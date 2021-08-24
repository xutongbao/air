import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form, Button, Collapse, Col, Row, Input } from 'antd'
import Header from './Header'
import useList from './useList'
import { Icon } from '../../../../components/light'
import { getComponentArr, getAttrFields } from './config'
import { Container, Draggable } from 'react-smooth-dnd'
import { getFormComponentArr } from '../../../../utils/tools'

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
    handleFinish,
    handleFinishFailed,
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
        tableId={tableId}
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
          <Form
            form={form}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 17 }}
            initialValues={{ ...initValues }}
            onFinish={handleFinish}
            onFinishFailed={handleFinishFailed}
          >
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
                      componentItem.formComponentName === item.formComponentName
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
                          {item.type === 'formItem' && (
                            <Form.Item
                              key={item.id}
                              label={item.title}
                              name={item.dataIndex}
                              rules={item.rules}
                            >
                              {result ? (
                                result.getComponent({ props: item.props })
                              ) : (
                                <Input></Input>
                              )}
                            </Form.Item>
                          )}
                          {item.type === 'image' && (
                            <Form.Item
                              key={item.id}
                              name={item.dataIndex}
                              wrapperCol={24}
                            >
                              {result ? (
                                result.getComponent({ props: {
                                  src: item.src
                                } })
                              ) : (
                                <Input></Input>
                              )}
                            </Form.Item>
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
