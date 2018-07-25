export interface TraverseNode { key?: string, value: any, parent: any, typeOf: string }
export function traverse(parent: any, fn: (obj: TraverseNode) => void) {
  if (parent && typeof parent == "object") {
    Object.entries(parent).forEach(([key, value]) => {
      fn({ key, value, parent, typeOf: 'object' })
      // key is either an array index or object key
      traverse(value, fn)
    })
  }
  else {
    fn({ value: parent, parent, typeOf: typeof parent })
    // parent is a number or string
  }
}