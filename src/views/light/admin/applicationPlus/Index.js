import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Modal, Button, Form, Menu, Dropdown } from 'antd'
import { getModalFields } from './config'
import { Icon } from '../../../../components/light'

import useList from './useList'

function Index(props) {
  const {
    isModalVisible,
    initValues,
    type,
    form,
    modalTitle,
    handleDelete,
    handleAdd,
    handleEdit,
    setIsModalVisible,
    handleFinish,
    handleFinishFailed,
    handleJumpToSet,
  } = useList(props)

  const { router } = props

  return (
    <>
      <div className="m-admin-content home">
        <div className="m-admin-row">
          <div className="m-adimn-row-title">自定义应用</div>
          <div className="m-app-wrap">
            {router.map((item) => (
              <div
                key={item.id}
                className="m-app-item"
                title={item.title}
                onClick={() => handleJumpToSet(item.id)}
              >
                <Dropdown
                  overlay={
                    <Menu onClick={e => e.domEvent.stopPropagation()}>
                      <Menu.Item key="0" onClick={() => handleEdit(item.id)}>
                        修改名称
                      </Menu.Item>
                      <Menu.Item key="1" onClick={() => handleDelete(item.id)}>
                        删除应用
                      </Menu.Item>
                    </Menu>
                  }
                >
                  <span className="m-app-item-icon">
                    <Icon name="more"></Icon>
                  </span>
                </Dropdown>
                {item.title}
              </div>
            ))}
            <div className="m-app-item" onClick={handleAdd}>
              <Icon name="add" className="m-application-icon"></Icon>
              创建新应用
            </div>
          </div>
        </div>
        <Modal
          title={modalTitle}
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
          forceRender
        >
          <Form
            form={form}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 17 }}
            initialValues={{ ...initValues }}
            onFinish={handleFinish}
            onFinishFailed={handleFinishFailed}
          >
            {getModalFields()}
            <Form.Item
              wrapperCol={{ offset: 4, span: 17 }}
              className="m-modal-footer"
            >
              {(type === 'add' || type === 'edit') && (
                <>
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
                </>
              )}
              <Button
                className="m-space"
                onClick={() => setIsModalVisible(false)}
              >
                取消
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    router: state.getIn(['light', 'router']).toJS(),
  }
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
