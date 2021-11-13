import React from 'react'

export default function TreeCard(props) {
  const { title, children, color = 'blue' } = props
  return (
    <div className={`m-tree-card ${color}`}>
      <div className={`m-tree-card-header ${color}`}>{title}</div>
      <div className="m-tree-card-content">{children}</div>
    </div>
  )
}
