import FieldStoreT from './FieldStore'
import TextFieldT from './TextField'
import FieldT from './Field'
import DocumentT from './Document'

export namespace document {
  export type Field = FieldT
  export type FieldStore = FieldStoreT
  export type Document = DocumentT
  export type TextField = TextFieldT
}
export const document = {
  FieldStore: FieldStoreT,
  Document: DocumentT,
  TextField: TextFieldT
}
