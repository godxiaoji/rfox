import _Form from './Form'
import FormFooter from './FormFooter'
import FormItem from './FormItem'

const Form = Object.assign(_Form, {
  Footer: FormFooter,
  Item: FormItem
})

export { Form, FormItem, FormFooter }
export default Form
