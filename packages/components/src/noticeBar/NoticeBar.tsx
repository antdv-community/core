import { defineComponent } from 'vue';
import { Alert } from 'ant-design-vue'
import './index.css'

export default defineComponent({
  name: 'NoticeBar',
  props: {
    message: String,
    closable: Boolean,
    banner: Boolean,
    duration: String
  },
  setup(props, { attrs, slots }) {
    return () => {
      const defaultProps = {
        ...props,
        banner: true,
        closeable: true,
      }
      return (
        <>
          <Alert
            {...defaultProps}
            {...attrs}
            v-slots={{...slots}}
          />
        </>
      );
    }
  },
});