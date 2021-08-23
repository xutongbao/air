import React, { useState } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'

export default function CardPlus() {
  const [toolList, setToolList] = useState([
    {
      id: 0,
      name: '1',
    },
    {
      id: 1,
      name: '2',
    },
    {
      id: 2,
      name: '3',
    },
  ])

  const applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult
    if (removedIndex === null && addedIndex === null) return arr

    const result = [...arr]
    let itemToAdd = payload

    if (removedIndex !== null) {
      itemToAdd = result.splice(removedIndex, 1)[0]
    }

    if (addedIndex !== null) {
      result.splice(addedIndex, 0, itemToAdd)
    }

    return result
  }

  const handleGetChildPayload = (index) => {
    console.log(index)
    return index
  }

  const handleCardDrop = (dragResult) => {
    console.log(dragResult)
    const result = applyDrag(toolList, dragResult)
    console.log(result)
    setToolList(result)
  }
  return (
    <div className="m-test-list">
      <Container
        orientation="vertical"
        onDrop={handleCardDrop}
        getChildPayload={handleGetChildPayload}
      >
        {toolList.map((item) => (
          <Draggable key={item.id} className="m-test-list-item">
            <div>{item.name}</div>
          </Draggable>
        ))}
      </Container>
    </div>
  )
}
