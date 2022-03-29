import classNames from 'classnames'
import type {
  ImageUploaderEmits,
  ImageUploaderProps,
  UploadHandlers,
  BeforeUploadReturn,
  FileItem
} from './types'
import type { FC, OnChange } from '../helpers/types'
import { Button } from '../Button'
import { Order } from '../Order'
import { ImagePreview } from '../ImagePreview'
import { showDialog } from '../Dialog'
import {
  isPromiseLike,
  isSameArray,
  cloneData,
  noop,
  getNumber,
  returnTrue,
  isStringArray
} from '../helpers/util'
import { formatFileSize } from '../helpers/digital-conversion'
import { useLocale } from '../ConfigProvider/context'
import type {
  OnDelete as OrderOnDelete,
  Item as OrderItem
} from '../Order/types'
import DeleteOutlined from '../Icon/icons/DeleteOutlined'
import { useCallback, useEffect, useRef, useState } from 'react'
import { getAccepts, getNewUid, urlId } from './util'
import { useStableState } from '../hooks/use'
import UploaderAdd from './ImageUploaderAdd'
import UploaderItem from './ImageUploaderItem'

const FxImageUploader: FC<ImageUploaderProps & ImageUploaderEmits> = ({
  uploadReady = noop,
  beforeUpload = returnTrue,
  preview = true,
  ...props
}) => {
  const { locale } = useLocale()
  const [getOrderItems, setOrderItems] = useStableState<OrderItem[]>([])
  const [getFormValue, setFormValue] = useStableState<string[]>([])

  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewCurrent, setPreviwCurrent] = useState('')
  // const [fileItems, setFileItems] = useState<Record<number, FileItem>>({})
  const fileItems = useRef<Record<number, FileItem>>({})
  const [updateFileCount, setUpdateFileCount] = useState(0)

  const maxCount = getNumber(props.maxCount, 9)
  const accept2 = getAccepts(props.accept).join(',')

  const onAddFiles: OnChange = e => {
    const files = (e.target as HTMLInputElement).files || []

    for (let i = 0; i < files.length; i++) {
      addFile(files[i])
    }
  }

  function addFileItem(item: FileItem) {
    fileItems.current[item.id] = item
    setUpdateFileCount(count => count + 1)
  }

  function addFile(file: File) {
    beforePromise(
      beforeUpload(file, {
        formatSize: formatFileSize
      })
    ).then(res => {
      if (res instanceof File) {
        file = res
        res = true
      }

      res && uploadFile(file)
    })
  }

  function getNewOrderItems() {
    return cloneData(getOrderItems(true))
  }

  function uploadFile(file: File) {
    const newOrderItems = getNewOrderItems()

    if (newOrderItems.length - (hasUploadButton() ? 1 : 0) >= maxCount) {
      return
    }

    const fileItem: FileItem = {
      id: getNewUid(),
      status: 'reading',
      message: 'Reading'
    }

    addFileItem(fileItem)

    newOrderItems.splice(
      newOrderItems.length - (hasUploadButton() ? 1 : 0),
      0,
      {
        id: fileItem.id
      }
    )

    setOrderItems(newOrderItems)

    updateUploadButton()

    uploadReady(file, createUploadHandlers(fileItem.id))
  }

  function beforePromise(res: BeforeUploadReturn) {
    if (res == null) {
      return Promise.resolve(true)
    } else if (typeof res === 'boolean') {
      return Promise.resolve(res)
    } else if (isPromiseLike(res)) {
      return (res as Promise<boolean | File>)
        .then(res => {
          if (res instanceof File) {
            return res
          }

          return !!res
        })
        .catch(() => {
          return false
        })
    }

    return Promise.resolve(res instanceof File ? res : true)
  }

  function getFileItemById(id: number | string) {
    return fileItems.current[id as number] || null
  }

  /**
   * 是否完成上传
   */
  function isDone(fileItem: FileItem) {
    return fileItem.status === 'failed' || fileItem.status === 'uploaded'
  }

  function updateFileStatus({ id, status, message, url }: FileItem) {
    const fileItem = getFileItemById(id)

    if (fileItem && !isDone(fileItem)) {
      fileItem.message = message
      fileItem.status = status

      if (status === 'uploaded' && url) {
        fileItem.url = url

        urlId(url, id)

        updateValue()
      }

      setUpdateFileCount(count => count + 1)
    }
  }

  function createUploadHandlers(id: number): UploadHandlers {
    return {
      getUploadId: () => id,
      formatSize: formatFileSize,
      setUploading(message) {
        updateFileStatus({
          id,
          message: message || 'Uploading',
          status: 'uploading'
        })
      },
      fail(e) {
        let message = ''
        if (e instanceof Error) {
          message = e.message
        } else if (e) {
          message = e.toString()
        } else {
          message = 'Failed'
        }

        updateFileStatus({
          id,
          message,
          status: 'failed'
        })
      },
      success(url) {
        updateFileStatus({
          id,
          message: 'Uploaded',
          status: 'uploaded',
          url
        })
      }
    }
  }

  function updateValue() {
    const newVal: string[] = []

    getOrderItems(true).forEach(({ id }) => {
      const fileItem = getFileItemById(id)

      if (fileItem && fileItem.status === 'uploaded' && fileItem.url) {
        newVal.push(fileItem.url)
      }
    })

    if (!isSameArray(newVal, getFormValue(true))) {
      setFormValue(newVal)

      props.onChange && props.onChange(cloneData(newVal))
    }
  }

  /**
   * 是否存在添加按钮
   */
  function hasUploadButton() {
    const items = getOrderItems(true)

    if (items.length === 0) {
      return false
    }

    return items[items.length - 1].draggable === false
  }

  function updateUploadButton() {
    const newItems = getOrderItems(true)

    if (hasUploadButton()) {
      if (newItems.length > maxCount) {
        // 超过要删掉按钮
        newItems.splice(newItems.length - 1, 1)
      }
    } else {
      if (newItems.length < maxCount) {
        newItems.push({
          id: -1,
          draggable: false
        })
      }
    }

    setOrderItems(newItems)
  }

  function isSameUploadedList() {
    const _value = isStringArray(props.value) ? cloneData(props.value) : []

    const items = getOrderItems(true)

    for (let i = 0; i < items.length; i++) {
      const fileItem = getFileItemById(items[i].id as number)

      if (fileItem) {
        if (fileItem.status === 'uploaded') {
          if (_value.length === 0) {
            // fileItem 还有 value 没了
            return false
          }

          if (fileItem.url === _value[0]) {
            _value.shift()
          } else {
            return false
          }
        }
      }
    }

    return _value.length === 0
  }

  function updateUploadedList() {
    if (isSameUploadedList()) {
      return
    }

    const uploadingCache: number[] = []

    // 缓存正在上传的项
    getOrderItems(true).forEach(({ id }) => {
      const fileItem = getFileItemById(id)

      if (fileItem && fileItem.status === 'uploading') {
        uploadingCache.push(id as number)
      }
    })

    const newOrderItems: OrderItem[] = []
    const _formValue: string[] = []

    if (props.value) {
      props.value.forEach(url => {
        const fileItem: FileItem = {
          id: urlId(url),
          status: 'uploaded',
          url,
          message: 'Uploaded'
        }

        addFileItem(fileItem)
        newOrderItems.push({ id: fileItem.id })
        _formValue.push(url)
      })
    }

    if (uploadingCache.length > 0) {
      // 吧正在上传的项加进去
      newOrderItems.push(...uploadingCache.map(id => ({ id })))
    }

    setOrderItems(newOrderItems)
    setFormValue(_formValue)

    updateUploadButton()
  }

  function onUpdateOrderItems(items: OrderItem[]) {
    setOrderItems(items)

    updateUploadButton()

    updateValue()
  }

  function onItemClick(item: { id: number }) {
    const fileItem = getFileItemById(item.id)
    const newOrderItems = getNewOrderItems()

    if (fileItem) {
      if (fileItem.status === 'uploaded') {
        if (preview) {
          // 针对已经上传完毕的
          setPreviwCurrent(fileItem.url as string)
          setPreviewVisible(true)
        }
      } else if (fileItem.status === 'failed') {
        for (let i = 0; i < newOrderItems.length; i++) {
          // 上传失败的单击删除
          if (newOrderItems[i].id === fileItem.id) {
            newOrderItems.splice(i, 1)
            setOrderItems(newOrderItems)

            updateUploadButton()

            break
          }
        }
      }
    }
  }

  const onDelete: OrderOnDelete = ({ index, item }) => {
    const fileItem = getFileItemById(item.id)

    fileItem &&
      props.onDelete &&
      props.onDelete({
        index,
        item: {
          id: fileItem.id,
          status: fileItem.status,
          url: fileItem.url || null
        }
      })
  }

  function onPreviewDelete(activeIndex: number) {
    const current = getFormValue(true)[activeIndex]
    const newOrderItems = getNewOrderItems()

    for (let i = 0, j = 0; i < newOrderItems.length; i++) {
      const optionItem = getFileItemById(newOrderItems[i].id)

      if (optionItem.status === 'uploaded') {
        if (j === activeIndex && optionItem.url === current) {
          showDialog({
            content: locale.imageUploaderDeleteContent,
            confirmText: locale.imageUploaderDeleteConfirmText
          }).then(res => {
            if (res.confirm) {
              newOrderItems.splice(i, 1)
              setOrderItems(newOrderItems)

              updateUploadButton()
              updateValue()

              if (getFormValue(true).length === 0) {
                setPreviewVisible(false)
              }
            }
          })

          break
        }

        j++
      }
    }
  }

  useEffect(updateUploadedList, [props.value])

  useEffect(updateUploadButton, [maxCount])

  const renderItem = useCallback(
    ({ id }) =>
      id === -1 ? (
        <UploaderAdd
          accept={accept2}
          multiple={props.multiple}
          disabled={props.disabled}
          onAddFiles={onAddFiles}
        />
      ) : (
        <UploaderItem
          item={getFileItemById(id)}
          onClick={onItemClick}
          imageMode={props.imageMode}
        />
      ),
    [
      setUpdateFileCount,
      props.imageMode,
      props.multiple,
      props.disabled,
      onAddFiles,
      onItemClick
    ]
  )

  const classes = classNames('fx-image-uploader', props.className)

  return (
    <>
      <div className={classes}>
        <Order
          columnNumber={props.columnNumber}
          deletable={props.deletable}
          items={getOrderItems()}
          onDelete={onDelete}
          onUpdateItems={onUpdateOrderItems}
          render={renderItem}
        />
        <input
          type="hidden"
          name={props.name}
          value={getFormValue().join(',')}
        />
      </div>
      <ImagePreview
        className="fx-image-uploader_preview"
        urls={getFormValue()}
        visible={previewVisible}
        current={previewCurrent}
        onChange={url => setPreviwCurrent(url)}
        showClose
        renderClose={({ activeIndex }) => (
          <Button
            onClick={() => onPreviewDelete(activeIndex)}
            icon={DeleteOutlined}
            size="large"
            pattern="borderless"
            shape="square"
            ghost
          />
        )}
      />
    </>
  )
}

export default FxImageUploader
