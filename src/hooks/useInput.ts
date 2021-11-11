import React, { useState } from 'react'

export type ChangeEvent = React.ChangeEvent<HTMLInputElement>
export type OnChange = (event: ChangeEvent | string) => void

export function useInput(defaultValue = ''): [string, OnChange] {
  const [value, setValue] = useState(defaultValue)

  // if data is string, that set the value
  // if it is an event, then set the value using the even
  const onChange: OnChange = (data) => {
    const value = typeof data === 'string' ? data : data.target.value

    setValue(value)
  }

  return [value, onChange]
}
