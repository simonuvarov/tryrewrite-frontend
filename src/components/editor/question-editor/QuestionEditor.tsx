import React, { useCallback, useMemo } from 'react'
import { createEditor, Descendant } from 'slate'
import { Editable, Slate, withReact } from 'slate-react'
import { Element } from '../body-editor/Element'

interface QuestionEditorProps {
  className?: string
  placeholder: string
  value: Descendant[]
  onChange: (value: Descendant[]) => void
}
const QuestionEditor = (props: QuestionEditorProps) => {
  const editor = useMemo(() => withReact(createEditor()), [])

  const renderElement = useCallback((props) => <Element {...props} />, [])

  return (
    <Slate editor={editor} value={props.value} onChange={props.onChange}>
      <Editable
        placeholder={props.placeholder}
        spellCheck={false}
        className={props.className}
        renderElement={renderElement}
      />
    </Slate>
  )
}

export default QuestionEditor
