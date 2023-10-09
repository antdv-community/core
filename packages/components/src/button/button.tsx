import { defineComponent } from 'vue'
import type { ButtonProps } from './typing.ts'
import { useStyles } from './style'

const Button = defineComponent<ButtonProps>(
  (props) => {
    const { styles } = useStyles()
    return () => {
      return (
        <div class={styles.value.btn}>
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
