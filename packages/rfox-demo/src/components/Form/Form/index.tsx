import {
  FxForm,
  FxGroup,
  FxInput,
  FxPicker,
  FxCalendar,
  FxCascader,
  FxSwitch,
  FxRate,
  FxSlider,
  FxRange,
  FxStepper,
  FxRadioGroup,
  FxCheckboxGroup,
  FxImageUploader,
  FxButton,
  showToast,
  ImageUploaderUploadReady
} from '@/index'
import { createForm, setValidateLanguage } from '@formily/core'
import { FormProvider, Field, FormConsumer } from '@formily/react'
import FormItem from './FormItem'
import { multiOptions, regionOptions } from '../Picker/data'

const genderOptions = [
  { label: '男', value: 1 },
  { label: '女', value: 2 }
]
const characters = ['活泼', '内向', '高冷']

setValidateLanguage('zh-CN')

const form = createForm({ validateFirst: true })

export default function ExpForm() {
  function getDataUrl(file: File) {
    return new Promise<string>(resolve => {
      const fr = new FileReader()
      fr.onload = function (e) {
        resolve((e.target?.result as string) ?? '')
      }
      fr.readAsDataURL(file)
    })
  }

  const hookUpload: ImageUploaderUploadReady = (file, handlers) => {
    getDataUrl(file).then(url => {
      handlers.success(url)
    })
  }

  function onSubmit(...args: any[]) {
    console.log(...args)
    showToast('校验通过')
  }

  function onChange(res: any) {
    console.log(res)
  }

  return (
    <>
      <FxGroup title="Formily">
        <FormProvider form={form}>
          <Field
            name="nickname"
            title="昵称"
            required
            component={[
              FxInput,
              { placeholder: '请输入昵称', showClear: true }
            ]}
            decorator={[FormItem]}
          />
          <Field
            name="avatar"
            title="头像"
            required
            component={[
              FxImageUploader,
              { uploadReady: hookUpload, columnNumber: 1, maxCount: 1 }
            ]}
            decorator={[FormItem]}
          />
          <Field
            name="gender"
            title="性别"
            required
            component={[
              FxRadioGroup,
              {
                options: genderOptions
              }
            ]}
            decorator={[FormItem]}
          />
          <Field
            name="weight"
            title="体重Kg"
            required
            component={[FxSlider, { showValue: true, min: 35, max: 120 }]}
            decorator={[FormItem]}
          />
          <Field
            name="season"
            title="季节"
            required
            component={[
              FxPicker,
              { options: multiOptions, placeholder: '选择季节' }
            ]}
            decorator={[FormItem]}
          />
          <Field
            name="birthday"
            title="生日"
            required
            component={[FxCalendar, { placeholder: '选择生日' }]}
            decorator={[FormItem]}
          />
          <Field
            name="character"
            title="性格"
            required
            component={[FxCheckboxGroup, { options: characters }]}
            decorator={[FormItem]}
          />
          <Field
            name="region"
            title="地区"
            required
            component={[
              FxCascader,
              {
                placeholder: '选择地区',
                fieldNames: { value: 'label' },
                options: regionOptions
              }
            ]}
            decorator={[FormItem]}
          />
          <Field
            name="happinessIndex"
            title="幸福指数"
            required
            component={[FxRate, { allowHalf: true }]}
            decorator={[FormItem]}
          />
          <Field
            name="stepper"
            title="步进器"
            required
            component={[FxStepper, { max: 10, step: 0.2, decimalLength: 1 }]}
            decorator={[FormItem]}
          />
          <Field
            name="agree"
            title="认可"
            required
            component={[FxSwitch]}
            decorator={[FormItem]}
          />
          <FormConsumer>
            {form => (
              <>
                <pre className="exp-form-json">
                  {JSON.stringify(form.values, null, 2)}
                </pre>
                <FxForm.Footer>
                  <FxButton
                    type="primary"
                    onClick={() => {
                      form.submit(onSubmit)
                    }}
                  >
                    提交
                  </FxButton>
                </FxForm.Footer>
              </>
            )}
          </FormConsumer>
        </FormProvider>
      </FxGroup>
    </>
  )
}
