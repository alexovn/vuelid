export function get(obj: Record<string, unknown>, path: string) {
  if (path === '') {
    return obj
  }
  
  const pathArr = path.split('.');
  let item: unknown = obj
  
  for (const i of pathArr) {
    if (item !== undefined && item !== null) {
       item = (item as Record<string, unknown>)[i]
    } else {
      return
    }
  }
  
  return item
}