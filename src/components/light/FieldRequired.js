import React, { useState } from 'react'
import { Checkbox, Input } from 'antd'

export default function FieldRequired({ value = {}, onChange }) {
  const [required, setRequired] = useState(false) 
  const [message, setMessage] = useState()

  const triggerChange = (changedValue) => {
    onChange({
      required,
      message,
      ...value,
      ...changedValue,
    });
  };


  const handleCheckbox = (e) => {
    setRequired(e.target.checked)
    triggerChange({ required: e.target.checked })
  }

  const handleInput = (e) => {
    setMessage(e.target.value)
    triggerChange({ message: e.target.value })
  }

  let checked = false
  let tempMessage = ''
  if (value && typeof value.required === 'boolean') {
    checked = value.required
    tempMessage = value.message
  } else {
    checked = required
    tempMessage = message
  }
  return (
    <div>
      <Checkbox checked={checked} onChange={handleCheckbox}>必填</Checkbox>
      <Input className={`m-fields-required-input ${checked ? 'active' : ''}`} value={tempMessage} onChange={handleInput} placeholder="请输入必填提示语"></Input>
    </div>
  )
}
