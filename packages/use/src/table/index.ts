import { ref } from 'vue'
export const useTable = () => {
  const tableRef = ref(null)
  return {
    tableRef
  }
}
