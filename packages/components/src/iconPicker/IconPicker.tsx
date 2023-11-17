import { computed, defineComponent, reactive, ref, watch, onMounted } from 'vue'
import type { ExtractPublicPropTypes, PropType } from 'vue'
import { Input, Pagination, Popover, TabPane, Tabs, Tooltip } from 'ant-design-vue'
import { SelectOutlined } from '@ant-design/icons-vue'
import { Icon } from './Icon'
import { IconFont } from './IconFont'
import { IconIfy } from './IconIfy'
import { useStyles } from './style'
import defaultIcons from './data/ant-design-icons-vue'

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
  setup() {
    const currentSelect = ref()
    const isOpen = ref(false)
    const activeKey = ref('1')
    const current = ref(1)
    const iconfonts = reactive(['github', 'facebook', 'twitter', 'qq', 'weibo'])
    const iconifys = reactive(['mdi:account-alert', 'mdi:account-card-outline', 'mdi:account-child-circle', 'mdi:yin-yang', 'mdi:yoga'])
    const iconsTotal = ref()
    const defaultPageSize = 50
    const { styles } = useStyles()

    const filterIcons = computed(() => {
      const startIcon = (current.value - 1) * defaultPageSize
      const endIcon = startIcon + defaultPageSize
      return defaultIcons.icons.slice(startIcon, endIcon)
    })
    const selectIcon = (name: string) => {
      switch (activeKey.value) {
        case '2':
          return <IconFont name={name} />;
        case '3':
          return <IconIfy name={name} />;
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
                    <Tooltip title={item}>
                      <li onClick={() => (currentSelect.value = item)}>
                        <Icon name={item} />
                      </li>
                    </Tooltip>
                  )
                })}
              </ul>
            </TabPane>
            <TabPane key="2" tab="iconfont">
              <ul class={styles.value.list}>
                {
                  iconfonts.map(item => (
                    <Tooltip title={item}>
                      <li onClick={() => (currentSelect.value = item)}>
                        <IconFont name={item} />
                      </li>
                    </Tooltip>
                  ))
                }
              </ul>
            </TabPane>
            <TabPane key="3" tab="iconify">
              <ul class={styles.value.list}>
                {
                  iconifys.map(item => (
                    <Tooltip title={item}>
                      <li onClick={() => (currentSelect.value = item)}>
                        <IconIfy name={item} />
                      </li>
                    </Tooltip>
                  ))
                }
              </ul>
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
        iconsTotal.value = defaultIcons.icons.length
      } else if (newValue === '2') {
        iconsTotal.value = iconfonts.length
      } else {
        iconsTotal.value = iconifys.length
      }
    })
    onMounted(() => {
      iconsTotal.value = defaultIcons.icons.length
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
