import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Modal, Button, Form } from 'antd'
import Tool from './Tool'
import { getColumns } from './config'
import { MyTable, Icon } from '../../../components/light'
import useList from './useList'
import useOperate from './useOperate'

function Index(props) {
  const {
    dataSource,
    total,
    current,
    pageSize,
    columns,
    isModalVisible,
    initValues,
    type,
    form,
    modalTitle,
    modalFields,
    handleSearch,
    handleDelete,
    handleAdd,
    handleEdit,
    handleCheck,
    setIsModalVisible,
    handleFinish,
    handleFinishFailed,
  } = useList(props)

  const { handleRowSelect } = useOperate()

  return (
    <div>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 17 }}
        initialValues={{ ...initValues }}
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
      >
        {modalFields}
        <Form.Item wrapperCol={{ offset: 4, span: 17 }}>
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
        </Form.Item>
      </Form>
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
