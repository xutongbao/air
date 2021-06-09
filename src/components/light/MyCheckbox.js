import React, { useState } from 'react'
import { Checkbox } from 'antd'

export default function MyCheckbox({ value, onChange, children }) {
  const [checked, setChecked] = useState(false)

  const handleChange = (e) => {
    setChecked(e.target.checked)
    onChange(e.target.checked)
  }

  let tempChecked = false
  if (typeof value === 'boolean') {
    tempChecked = value
  } else {
    tempChecked = checked
  }

  return <Checkbox checked={tempChecked} onChange={handleChange}>{children}</Checkbox>
}
