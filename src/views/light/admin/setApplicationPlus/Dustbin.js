import { useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import MyCard from './MyCard'

export default function Dustbin({
  dataSource,
  cardActiveId,
  moveCard,
  handleCardActiveId,
}) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: 'Dustbin' }),
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
        <MyCard
          key={card.id}
          index={index}
          cardActiveId={cardActiveId}
          card={card}
          moveCard={moveCard}
          onCardActiveId={handleCardActiveId}
        />
      ))}
    </div>
  )
}
