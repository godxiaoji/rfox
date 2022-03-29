import type { ImageUploaderItemProps } from './types'
import type { FC } from '../helpers/types'
import { Image } from '../Image'
import { Icon } from '../Icon'
import { ActivityIndicator } from '../ActivityIndicator'
import DeleteOutlined from '../Icon/icons/DeleteOutlined'

const FxImageUploaderItem: FC<ImageUploaderItemProps> = ({
  item,
  imageMode,
  onClick
}) => {
  return (
    <div
      className="fx-image-uploader_item"
      onClick={() => onClick(item)}
      onContextMenu={e => e.nativeEvent.preventDefault()}
    >
      <Image src={item.url} draggable={false} mode={imageMode} />
      {item.status !== 'uploaded' && item.status !== 'reading' ? (
        <div className="fx-image-uploader_item-status">
          {item.status === 'uploading' ? (
            <ActivityIndicator size="40" color="#ffffff" />
          ) : item.status === 'failed' ? (
            <Icon icon={DeleteOutlined} />
          ) : (
            <></>
          )}
          <span>{item.message}</span>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default FxImageUploaderItem
