import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import { Form, Input, Button } from 'antd'
import { getFormComponentArr } from '../../../../utils/tools'

export default function ListItem({
  index,
  cardActiveId,
  card,
  moveCard,
  onCardActiveId,
  onDelete,
}) {
  const ref = useRef(null)
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.LIST_ITEM,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex

      console.log(hoverIndex)
    },
  })
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.LIST_ITEM,
    item: () => {
      return { id: card.id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0 : 1
  drag(drop(ref))

  //console.log(card)
  const renderDom = () => {
    if (card.isModalField) {
      const result = getFormComponentArr().find(
        (componentItem) =>
          componentItem.formComponentName === card.formComponentName
      )
      return (
        <div
          ref={ref}
          style={{ opacity }}
          data-handler-id={handlerId}
          className={`m-design-card ${
            cardActiveId === card.id ? 'active' : ''
          }`}
          onClick={() => onCardActiveId({ id: card.id })}
        >
          <div className="m-design-card-info">
            <Form.Item
              key={card.id}
              label={card.title}
              name={card.dataIndex}
              rules={card.rules}
            >
              {result ? result.component : <Input></Input>}
            </Form.Item>
          </div>
          <div className="m-design-card-action">
            <Button
              className="m-action-btn"
              size="small"
              danger
              onClick={() => onDelete(card)}
            >
              删除
            </Button>
          </div>
        </div>
      )
    } else {
      return null
    }
  }

  return <>{renderDom()}</>
}
