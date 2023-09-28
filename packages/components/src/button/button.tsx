import { defineComponent } from 'vue'
import type { ButtonProps } from './typing.ts'

const Button = defineComponent<ButtonProps>(
  (props) => {
    return () => {
      return (
        <div>
          Button
          {props.type}
        </div>
      )
    }
  },
  {
    name: 'ApButton'
  }
)

export default Button
