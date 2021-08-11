import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Header from './Header'
import useList from './useList'
import Card from './Card'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function Index(props) {
  const { applicationTitle, dataSource, moveCard } = useList(props)

  return (
    <div className="m-admin-content">
      <Header applicationTitle={applicationTitle}></Header>
      <div className="m-design-wrap">
        <div className="m-design-sidebar"></div>
        <div className="m-design-content">
          <DndProvider backend={HTML5Backend}>
            <div style={{ width: 400 }}>
              {dataSource.map((card, index) => (
                <Card
                  key={card.id}
                  index={index}
                  id={card.id}
                  title={card.title}
                  moveCard={moveCard}
                />
              ))}
            </div>
          </DndProvider>
        </div>
        <div className="m-design-attr"></div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({ type: 'SET_LIGHT_STATE', key, value })
    },
    onDispatch(action) {
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index))
