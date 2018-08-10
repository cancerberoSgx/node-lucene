import FieldStoreT from './FieldStore'
import TextFieldT from './TextField'
import DocumentT from './Document'

export namespace document {
  export type FieldStore = FieldStoreT
  export type Document<T> = DocumentT<T>
  export type TextField<T> = TextFieldT<T>
}
export const document = {
  FieldStore: FieldStoreT,
  Document: DocumentT,
  TextField: TextFieldT
}