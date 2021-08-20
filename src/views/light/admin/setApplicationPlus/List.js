import { useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import ListItem from './ListItem'

export default function List({
  dataSource,
  cardActiveId,
  moveCard,
  handleCardActiveId,
  handleDelete,
}) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BTN_FIELD,
    drop: () => ({ name: '容器' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))
  const isActive = canDrop && isOver
  return (
    <div
      ref={drop}
      className={`m-center-list-wrap ${isActive ? 'active' : ''}`}
    >
      {dataSource.map((card, index) => (
        <ListItem
          key={card.id}
          index={index}
          cardActiveId={cardActiveId}
          card={card}
          moveCard={moveCard}
          onCardActiveId={handleCardActiveId}
          onDelete={handleDelete}
        />
      ))}
    </div>
  )
}
