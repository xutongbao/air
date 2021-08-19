import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form, Button, Collapse, Card, Col, Row } from 'antd'
import Header from './Header'
import useList from './useList'
import MyCard from './MyCard'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Icon } from '../../../../components/light'
import { getComponentArr, getAttrFields } from './config'

const { Panel } = Collapse

function Index(props) {
  const {
    applicationTitle,
    dataSource,
    form,
    formForAttr,
    initValues,
    initValuesForAttr,
    tableId,
    cardActiveId,
    moveCard,
    handleFinish,
    handleFinishFailed,
    handleSave,
    handleCardActiveId,
    handleValuesChange,
  } = useList(props)

  return (
    <div className="m-admin-content">
      <Header
        applicationTitle={applicationTitle}
        tableId={tableId}
        onSave={handleSave}
      ></Header>
      <div className="m-design-wrap">
        <div className="m-design-sidebar">
          <Collapse defaultActiveKey={['1', '2', '3']}>
            <Panel header="通用字段" key="1">
              <Row gutter={[2, 2]}>
                {getComponentArr().map((item) => (
                  <Col span={8}>
                    <div className="m-component-item">
                      <div></div>
                      <div>{item.name}</div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Panel>
            <Panel header="联系信息字段" key="2">
              <Row gutter={[2, 2]}>
                <Col span={8}>
                  <div className="m-component-item">
                    <div></div>
                    <div>敬请期待</div>
                  </div>
                </Col>
              </Row>
            </Panel>
            <Panel header="商品字段" key="3">
              <Row gutter={[2, 2]}>
                <Col span={8}>
                  <div className="m-component-item">
                    <div></div>
                    <div>敬请期待</div>
                  </div>
                </Col>
              </Row>
            </Panel>
          </Collapse>
        </div>
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
        <div className="m-design-attr">
          <Form
            form={formForAttr}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 15 }}
            initialValues={{ ...initValuesForAttr }}
            scrollToFirstError={true}
            onValuesChange={handleValuesChange}
            id="m-set-application-modal-form"
            className="m-set-application-modal-form"
          >
            {getAttrFields()}
          </Form>
        </div>
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
