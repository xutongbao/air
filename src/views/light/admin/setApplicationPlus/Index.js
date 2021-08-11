import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Modal, Button, Form } from 'antd'
import Tool from './Tool'
import { getColumns, getModalFields } from './config'
import { MyTableForEasy, Icon } from '../../../../components/light'
import Header from './Header'
import useList from './useList'

function Index(props) {
  const {
    dataSource,
    isModalVisible,
    initValues,
    type,
    form,
    applicationTitle,
    modalTitle,
    formComponentName,
    handleSearch,
    handleDelete,
    handleAdd,
    handleEdit,
    handleCheck,
    setIsModalVisible,
    handleFinish,
    handleFinishFailed,
    handleValuesChange,
  } = useList(props)


  return (
    <div className="m-admin-content">
      <Header applicationTitle={applicationTitle}></Header>
      <Tool
        onAdd={handleAdd}
      ></Tool>
      <MyTableForEasy
        dataSource={dataSource}
        onSearch={handleSearch}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onCheck={handleCheck}
        getColumns={getColumns}
      ></MyTableForEasy>
      <Modal
        title={modalTitle}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={900}
        className="m-set-application-modal"
        forceRender
      >
        <Form
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 17 }}
          initialValues={{ ...initValues }}
          scrollToFirstError={true}
          onFinish={handleFinish}
          onFinishFailed={handleFinishFailed}
          onValuesChange={handleValuesChange}
          id="m-set-application-modal-form"
          className="m-set-application-modal-form"
        >
          {getModalFields({dataSource, type, initValues, formComponentName})}
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
