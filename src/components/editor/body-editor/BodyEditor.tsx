import React, { useCallback, useMemo } from 'react'
import { createEditor, Descendant } from 'slate'
import { Editable, Slate, withReact } from 'slate-react'
import { Element } from './Element'
import { renderLeaf } from './renderLeaf'
import { useDecorate } from './useDecorate'

interface BodyEditorProps {
  className?: string
  placeholder: string
  value: Descendant[]
  onChange: (value: Descendant[]) => void
}

const BodyEditor = (props: BodyEditorProps) => {
  const editor = useMemo(() => withReact(createEditor()), [])

  const renderElement = useCallback((props) => <Element {...props} />, [])

  const decorate = useDecorate()

  return (
    <Slate editor={editor} value={props.value} onChange={props.onChange}>
      <Editable
        placeholder={props.placeholder}
        spellCheck={false}
        className={props.className}
        decorate={decorate}
        renderLeaf={renderLeaf}
        renderElement={renderElement}
      />
    </Slate>
  )
}

export default BodyEditor
