import { ref } from 'vue'

export function useTable() {
  const tableRef = ref(null)
  return {
    tableRef,
  }
}
