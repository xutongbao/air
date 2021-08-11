import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form, Button } from 'antd'
import Header from './Header'
import useList from './useList'
import Card from './Card'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {Icon } from '../../../../components/light'

function Index(props) {
  const {
    applicationTitle,
    dataSource,
    form,
    initValues,
    moveCard,
    handleFinish,
    handleFinishFailed,
  } = useList(props)

  return (
    <div className="m-admin-content">
      <Header applicationTitle={applicationTitle}></Header>
      <div className="m-design-wrap">
        <div className="m-design-sidebar"></div>
        <div className="m-design-content">
          <Form
            form={form}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 17 }}
            initialValues={{ ...initValues }}
            onFinish={handleFinish}
            onFinishFailed={handleFinishFailed}
          >
            <DndProvider backend={HTML5Backend}>
              <div>
                {dataSource.map((card, index) => (
                  <Card
                    key={card.id}
                    index={index}
                    card={card}
                    moveCard={moveCard}
                  />
                ))}
              </div>
            </DndProvider>
            <Form.Item
              wrapperCol={{ offset: 4, span: 17 }}
              className="m-design-footer"
            >
              <Button type="primary" htmlType="submit" className="m-space">
                <Icon name="submit" className="m-tool-btn-icon"></Icon>
                提交
              </Button>
              <Button
                className="m-space"
                onClick={() => {
                  form.resetFields()
                }}
              >
                <Icon name="reset" className="m-tool-btn-icon"></Icon>
                重置
              </Button>
            </Form.Item>
          </Form>
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
