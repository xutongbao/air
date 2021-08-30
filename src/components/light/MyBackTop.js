import React from 'react'
import { BackTop } from 'antd'

export default function MyBackTop({
  dom = document.getElementById('m-content-wrap')
}) {
  return (
    <BackTop
      className="m-back-top"
      target={() => {
        return dom ? dom : window
      }}
    ></BackTop>
  )
}
