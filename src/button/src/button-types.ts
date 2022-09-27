import { ExtractPropTypes, PropType } from 'vue'

export type DemoButtonType = 'primary' | 'secondary' | 'test'

export const buttonProps = {
  type: {
    type: String as PropType<DemoButtonType>,
    default: 'secondary'
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
