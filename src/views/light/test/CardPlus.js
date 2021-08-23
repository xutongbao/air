import React, { useState } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { v4 as uuidv4 } from 'uuid'

export default function CardPlus() {
  const [toolList, setToolList] = useState([
    {
      id: 't0',
      name: '1',
    },
    {
      id: 't1',
      name: '2',
    },
    {
      id: 't2',
      name: '3',
    },
  ])

  const [contentList, setContentList] = useState([
    {
      id: 'c0',
      name: 'a',
    },
    {
      id: 'c1',
      name: 'b',
    },
    {
      id: 'c2',
      name: 'c',
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

  const handleGetChildPayload = ({type, index}) => {
    if (type === 'tool') {
      const id = uuidv4()
      return {...toolList[index], id}
    } else if (type === 'content') {
      return contentList[index]
    }
  }

  const handleCardDrop = ({ type, dragResult }) => {
    console.log(dragResult)
    if (type === 'tool') {
      const result = applyDrag(toolList, dragResult)
      setToolList(result)
    } else if (type === 'content') {
      const result = applyDrag(contentList, dragResult)
      setContentList(result)
    }
  }

  return (
    <div className="m-test-wrap">
      <div className="m-test-tool">
        <Container
          orientation="vertical"
          onDrop={(dragResult) => handleCardDrop({ type: 'tool', dragResult })}
          getChildPayload={(index) => handleGetChildPayload({type: 'tool', index})}
          behaviour="copy"
          groupName="col"
        >
          {toolList.map((item) => (
            <Draggable key={item.id} className="m-test-list-item">
              <div>{item.name}</div>
            </Draggable>
          ))}
        </Container>
      </div>
      <div className="m-test-list">
        <Container
          orientation="vertical"
          onDrop={(dragResult) =>
            handleCardDrop({ type: 'content', dragResult })
          }
          getChildPayload={(index) => handleGetChildPayload({type: 'content', index})}
          groupName="col"
        >
          {contentList.map((item) => (
            <Draggable key={item.id} className="m-test-list-item">
              <div>{item.name}</div>
            </Draggable>
          ))}
        </Container>
      </div>
    </div>
  )
}
