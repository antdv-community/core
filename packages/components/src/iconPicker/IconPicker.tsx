import { computed, defineComponent, reactive, ref, watch, onMounted } from 'vue'
import type { ExtractPublicPropTypes, PropType } from 'vue'
import { Input, Pagination, Popover, TabPane, Tabs, Tooltip } from 'ant-design-vue'
import { SelectOutlined } from '@ant-design/icons-vue'
import { Icon } from './Icon'
import { IconFont } from './IconFont'
import { useStyles } from './style'

const iconPickerProps = {
  value: String,
  icons: { type: Array as PropType<string[]>, default: () => [] }
}
export type IconPickerProps = Partial<
  ExtractPublicPropTypes<typeof iconPickerProps>
>
export default defineComponent({
  name: 'IconPicker',
  props: iconPickerProps,
  setup(props) {
    const currentSelect = ref()
    const isOpen = ref(false)
    const activeKey = ref('1')
    const current = ref(1)
    const iconfonts = reactive(['github', 'facebook', 'twitter', 'qq', 'weibo'])
    const iconsTotal = ref()
    const defaultPageSize = 50
    const { styles } = useStyles()

    const filterIcons = computed(() => {
      const startIcon = (current.value - 1) * defaultPageSize
      const endIcon = startIcon + defaultPageSize
      return props.icons.slice(startIcon, endIcon)
    })
    const selectIcon = (name: string) => {
      switch (activeKey.value) {
        case '2':
          return <IconFont name={name} />;
        default:
          return <Icon name={name} />;
      }
    }
    const popoverSlots = {
      title: null,
      content: () => (
        <>
          <Tabs v-model:activeKey={activeKey.value} onChange={() => currentSelect.value = ''}>
            <TabPane key="1" tab="antd-icons">
              <ul class={styles.value.list}>
                {filterIcons.value.map(item => {
                  return (
                    <li onClick={() => (currentSelect.value = item)}>
                      <Tooltip title={item}>
                        <Icon name={item} />
                      </Tooltip>
                    </li>
                  )
                })}
              </ul>
            </TabPane>
            <TabPane key="2" tab="iconfont">
              <ul class={styles.value.list}>
                {
                  iconfonts.map(item => (
                    <li onClick={() => (currentSelect.value = item)}>
                      <Tooltip title={item}>
                        <IconFont name={item} />
                      </Tooltip>
                    </li>
                  ))
                }
              </ul>
            </TabPane>
            <TabPane key="3" tab="iconify">
              计划中...
            </TabPane>
          </Tabs>
          <Pagination v-model:current={current.value} total={iconsTotal.value} defaultPageSize={defaultPageSize} hideOnSinglePage showSizeChanger={false} size={'small'} />
        </>
      ),
      default: () =>
        currentSelect.value ? (
          selectIcon(currentSelect.value)
        ) : (
          <SelectOutlined />
        )
    }
    watch(activeKey, (newValue) => {
      if (newValue === '1') {
        iconsTotal.value = props.icons.length
      } else if (newValue === '2') {
        iconsTotal.value = iconfonts.values.length
      } else {
        iconsTotal.value = 0
      }
    })
    onMounted(() => {
      iconsTotal.value = props.icons.length
    })
    return () => {
      return (
        <div>
          <Input
            v-model:value={currentSelect.value}
            v-slots={{
              addonAfter: () => (
                <Popover
                  v-model:open={isOpen.value}
                  trigger="click"
                  placement="bottomRight"
                  v-slots={popoverSlots}
                />
              )
            }}
          />
        </div>
      )
    }
  }
})
