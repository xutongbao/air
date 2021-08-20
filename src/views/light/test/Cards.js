import React, { Component } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'

class Cards extends Component {
  constructor() {
    super()

    let temp = [
      {
        id: 'column0',
        type: 'container',
        props: { orientation: 'vertical' },
        children: [
          {
            type: 'draggable',
            id: '00',
            props: { className: 'card', style: {} },
            data: 'a',
          },
          {
            type: 'draggable',
            id: '01',
            props: { className: 'card', style: {} },
            data: 'b',
          },
        ],
      },
      {
        id: 'column1',
        type: 'container',
        props: { orientation: 'vertical' },
        children: [
          {
            type: 'draggable',
            id: '10',
            props: { className: 'card', style: {} },
            data: '1',
          },
          {
            type: 'draggable',
            id: '11',
            props: { className: 'card', style: {} },
            data: '2',
          },
          {
            type: 'draggable',
            id: '12',
            props: { className: 'card', style: {} },
            data: '3',
          },
        ],
      },
    ]

    this.state = {
      scene: {
        type: 'container',
        props: {
          orientation: 'horizontal',
        },
        children: temp,
      },
    }
  }

  render() {
    return (
      <div className="card-scene">
        <Container
          orientation="horizontal"
          onDrop={(dropResult) => this.onColumnDrop(dropResult)}
          dragHandleSelector=".column-drag-handle"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'cards-drop-preview',
          }}
        >
          {this.state.scene.children.map((column) => {
            return (
              <Draggable key={column.id}>
                <div>
                  <Container
                    {...column.props}
                    groupName="col"
                    onDrop={(e) => this.onCardDrop(column.id, e)}
                    getChildPayload={(index) =>
                      this.getCardPayload(column.id, index)
                    }
                    dropPlaceholder={{
                      animationDuration: 150,
                      showOnTop: true,
                      className: 'drop-preview',
                    }}
                    dropPlaceholderAnimationDuration={200}
                  >
                    {column.children.map((card) => {
                      return (
                        <Draggable key={card.id}>
                          <div {...card.props}>
                            <p>{card.data}</p>
                          </div>
                        </Draggable>
                      )
                    })}
                  </Container>
                </div>
              </Draggable>
            )
          })}
        </Container>
      </div>
    )
  }

  applyDrag(arr, dragResult) {
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

  getCardPayload(columnId, index) {
    const temp = this.state.scene.children.filter((p) => p.id === columnId)[0]
      .children[index]

    return temp
  }

  onColumnDrop(dropResult) {
    const scene = Object.assign({}, this.state.scene)
    scene.children = this.applyDrag(scene.children, dropResult)
    this.setState({
      scene,
    })
  }

  onCardDrop(columnId, dropResult) {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      const scene = Object.assign({}, this.state.scene)
      const column = scene.children.filter((p) => p.id === columnId)[0]
      const columnIndex = scene.children.indexOf(column)

      const newColumn = Object.assign({}, column)
      newColumn.children = this.applyDrag(newColumn.children, dropResult)
      scene.children.splice(columnIndex, 1, newColumn)

      this.setState({
        scene,
      })
    }
  }
}

export default Cards
