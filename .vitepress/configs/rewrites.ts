export const getRewrites = (): Record<string, string> => {
  return {
    'packages/:pkg/src/:comp/demo/(.*)': ':pkg/:comp/(.*)',
    'docs/(.*)': '(.*)'
  }
}
