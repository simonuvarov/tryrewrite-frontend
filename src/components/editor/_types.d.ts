import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'

// https://docs.slatejs.org/concepts/12-typescript
declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
  }
}
