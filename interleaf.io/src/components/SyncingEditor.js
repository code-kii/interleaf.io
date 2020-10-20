// Import React dependencies.
import React, { useMemo, useState } from "react";
// Import the Slate editor factory.
import { createEditor } from 'slate'
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'

const SyncingEditor = (props) => {
  // Use the use memo hook to prevent expensive re-renders.
  const editor = useMemo(() => withReact(createEditor()), [])

  // Add the initial value when setting up our state.
  const keyWord = props.type === 'paragraph' ? 'text' : 'code'
  const [value, setValue] = useState([
    {
      type: props.type,
      children: [{ text: 'Write your ' + keyWord + ' here. \n'}],
    },
  ])

  const classEditor = props.type === 'paragraph' ? 'textEditor' : 'codeEditor'
  return (<div className = {classEditor}>
      <Slate
        useState={editor}
        editor={editor}
        value={value}
        onChange={newValue => {
            setValue(newValue)
            console.log(newValue)
            console.log("SomeChange!")
        }}>
        <Editable />
      </Slate>

    <Slate
      useState={editor}
      editor={editor}
      value={value}
      onChange={newValue => {
        setValue(newValue)
        console.log(newValue)
        console.log("Some2Change!")
      }}>
      <Editable />
    </Slate>
    </div>)
}

export default SyncingEditor