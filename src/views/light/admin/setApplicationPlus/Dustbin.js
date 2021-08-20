import { useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
export const Dustbin = () => {
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
    <div ref={drop} className={`m-center-list-wrap ${isActive ? 'active' : ''}`}>
      
    </div>
  )
}
