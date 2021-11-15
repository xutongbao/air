import React from 'react'
import Icon from './Icon'

export default function TreeCard(props) {
  const { title, children, color = 'blue', item } = props
  const handleAdd = (e) => {
    e.stopPropagation()
    props.onAddChild(item)
  }
  return (
    <div className={`m-tree-card ${color}`}>
      <div className={`m-tree-card-header ${color}`}>
        <div className="m-tree-card-header-title">{title}</div>
        {item.belongCategory !== '0' && (
          <Icon
            className="m-tree-card-header-delete"
            name="delete"
            onClick={() => props.onDelete(item)}
          ></Icon>
        )}
      </div>
      <div className="m-tree-card-content" onClick={() => props.onEdit(item)}>
        <div className="m-tree-card-content-text" title={children}>
          {children}
        </div>
        <span className="m-tree-card-add-wrap">
        <Icon
          name="add"
          onClick={handleAdd}
          className="m-tree-card-add-icon"
        ></Icon>
        </span>
      </div>
    </div>
  )
}
