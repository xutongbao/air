import React from 'react'
import { BackTop } from 'antd'

export default function MyBackTop() {
  return (
    <BackTop
      className="m-back-top"
      target={() => {
        const dom = document.getElementById('m-content-wrap')
        return dom ? dom : window
      }}
    ></BackTop>
  )
}
