import { defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-types'

export default defineComponent({
  name: 'DemoButton',
  props: buttonProps,
  setup (props: ButtonProps, { slots }) {
    return () => {
      const { type } = toRefs(props)
      const buttonText = (slots.default != null) ? slots.default() : '按钮 '
      return <button class={`demo-button demo-button--${type.value}`}>{buttonText}</button>
    }
  }
})
