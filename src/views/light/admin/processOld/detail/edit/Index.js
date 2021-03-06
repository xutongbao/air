import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form, Collapse, Col, Row, Card } from 'antd'
import Header from '../Header'
import useList from './useList'
import { Icon } from '../../../../../../components/light'
import { getComponentArr, getAttrFields } from './config'
import { Container, Draggable } from 'react-smooth-dnd'
import { getFormComponentArr } from '../../../../../../utils/tools'

const { Panel } = Collapse

function Index(props) {
  const {
    applicationTitle,
    dataSource,
    formForAttr,
    initValuesForAttr,
    routerSearchObj,
    cardActiveId,
    handleFinish,
    handleAdd,
    handleSave,
    handleCardActiveId,
    handleValuesChange,
    handleDelete,
    handleGetChildPayload,
    handleCardDrop,
  } = useList(props)

  return (
    <div className="m-admin-content">
      <Header
        applicationTitle={applicationTitle}
        routerSearchObj={routerSearchObj}
        onSave={handleSave}
      ></Header>
      <div className="m-design-wrap">
        <div className="m-design-sidebar">
          <Collapse defaultActiveKey={['1', '2', '3']}>
            <Panel header="通用字段" key="1">
              <div className="m-design-sidebar-container">
                <Container
                  orientation="horizontal"
                  onDrop={(dragResult) =>
                    handleCardDrop({ type: 'tool', dragResult })
                  }
                  getChildPayload={(index) =>
                    handleGetChildPayload({ type: 'tool', index })
                  }
                  behaviour="copy"
                  groupName="col"
                >
                  {getComponentArr().map((item) => (
                    <Draggable key={item.id}>
                      <div
                        className="m-component-item"
                        onClick={() => handleAdd({ fieldInfo: item })}
                      >
                        <div>
                          <Icon name={item.icon}></Icon>
                        </div>
                        <div>{item.title}</div>
                      </div>
                    </Draggable>
                  ))}
                </Container>
              </div>
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
          <Card title="流程开始" bordered={false}>
            1
          </Card>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <div className="m-design-card-wrap">
                <Container
                  orientation="vertical"
                  onDrop={(dragResult) =>
                    handleCardDrop({ type: 'content', dragResult })
                  }
                  getChildPayload={(index) =>
                    handleGetChildPayload({ type: 'content', index })
                  }
                  groupName="col"
                >
                  {dataSource.map((item) => {
                    const result = getFormComponentArr().find(
                      (componentItem) =>
                        componentItem.formComponentName ===
                        item.formComponentName
                    )
                    return (
                      <Draggable key={item.id}>
                        <div
                          className={`m-design-card ${
                            cardActiveId === item.id ? 'active' : ''
                          }`}
                          onClick={() => handleCardActiveId({ id: item.id })}
                        >
                          <div className="m-design-card-info">
                            {item.type === 'condition' && (
                              <div key={item.id}>
                                {result.getComponent({
                                  props: { title: item.title, ...item.props },
                                })}
                              </div>
                            )}
                          </div>
                          <div
                            className={`m-design-card-action ${
                              cardActiveId === item.id ? 'active' : ''
                            }`}
                          >
                            <Icon
                              name="delete"
                              className="m-design-card-delete"
                              onClick={(e) => handleDelete(e, item)}
                            ></Icon>
                          </div>
                        </div>
                      </Draggable>
                    )
                  })}
                </Container>
              </div>
            </Col>
            <Col span={8}>
              <Card hoverable title="通话数" bordered={false}>
                {2}
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable title="短信数" bordered={false}>
                {3}
              </Card>
            </Col>
            <Card title="流程结束" bordered={false}>
              1
            </Card>
          </Row>
        </div>
        <div className="m-design-attr">
          <Form
            form={formForAttr}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 15 }}
            initialValues={{ ...initValuesForAttr }}
            scrollToFirstError={true}
            onValuesChange={handleValuesChange}
            onFinish={handleFinish}
            id="m-set-application-modal-form"
            className="m-set-application-modal-form"
          >
            {cardActiveId ? (
              getAttrFields({ initValuesForAttr })
            ) : (
              <div className="m-empty-text">请选择字段</div>
            )}
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
