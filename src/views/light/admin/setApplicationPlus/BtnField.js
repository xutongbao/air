import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import { Icon } from '../../../../components/light'
import { Col } from 'antd'

export default function BtnField({ fieldInfo }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BTN_FIELD,
    item: { ...fieldInfo },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        console.log(`${item.name} 加入 ${dropResult.name}`)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))
  const opacity = isDragging ? 0.4 : 1
  return (
    <Col span={8}>
      <div
        className="m-component-item"
        ref={drag}
        style={{ opacity }}
        data-testid={`box-${fieldInfo.name}`}
      >
        <div>
          <Icon name={fieldInfo.icon}></Icon>
        </div>
        <div>{fieldInfo.name}</div>
      </div>
    </Col>
  )
}
