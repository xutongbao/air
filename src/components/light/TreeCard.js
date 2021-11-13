import React from 'react'
import { Button } from 'antd'

export default function TreeCard(props) {
  const { title, children, color = 'blue', item } = props
  return (
    <div className={`m-tree-card ${color}`}>
      <div className={`m-tree-card-header ${color}`}>{title}</div>
      <div className="m-tree-card-content">
        <div>{children}</div>
        <div style={{textAlign: 'center'}}>
          <Button size="small" onClick={() => props.onAddChild(item)}>添加条件</Button>
        </div>
      </div>
    </div>
  )
}
