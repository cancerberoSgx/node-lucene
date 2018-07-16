import { readFileSync } from 'fs';

const ast = JSON.parse(readFileSync('./research-assets/estree-ts-ast1.json').toString())
traverse(ast, (opts)=>{
  // console.log(opts)
  if(opts.key==='loc'){
    delete opts.parent.loc
  }
})

console.log(JSON.stringify(ast, null, 2));


export interface Node{key?: string, value: any, parent: any, typeOf: string}
function traverse(parent: any, fn: (obj: Node)=>void) {
  if( parent && typeof parent == "object" ) {
      Object.entries(parent).forEach(([key, value]) => {
          fn({key, value, parent, typeOf: 'object'})
          // key is either an array index or object key
          traverse(value, fn)
      })
  }
  else {
    fn({value: parent, parent, typeOf: typeof parent})
      // parent is a number or string
  }
}