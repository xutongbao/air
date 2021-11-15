import React from 'react'
import Icon from '../Icon'

export default function TreeCard(props) {
  const { title, children, color = 'gray', item } = props
  const handleAdd = (e) => {
    e.stopPropagation()
    props.onAddChild(item)
  }
  const handleDelete = (e) => {
    e.stopPropagation()
    props.onDelete(item)
  }
  return (
    <div
      className={`m-tree-card ${color}`}
      onClick={() => props.onEdit(item)}
      id={`${item.belongCategory === '0' ? 'm-tree-root' : ''}`}
    >
      <div className={`m-tree-card-header ${color}`}>
        <div className="m-tree-card-header-title">{title}</div>
        {item.belongCategory !== '0' && (
          <Icon
            className="m-tree-card-header-delete"
            name="delete"
            onClick={handleDelete}
          ></Icon>
        )}
      </div>
      <div className="m-tree-card-content">
        <div className="m-tree-card-content-text" title={children}>
          {children}
        </div>
        <span className="m-tree-card-add-wrap" >
          <Icon
            name="bg-add"
            onClick={handleAdd}
            className="m-tree-card-add"
          ></Icon>
          <span className="m-tree-card-add-bg"></span>
        </span>
      </div>
    </div>
  )
}
