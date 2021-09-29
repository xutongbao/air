import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Modal, Button, Form } from 'antd'
import Tool from './Tool'
import {
  getSearchFields,
  getColumns,
  getModalFields,
  getToolBtnList,
} from './config'
import { Search, MyTable, Icon } from '../../../../components/light'
import useList from './useList'
import useOperate from './useOperate'

function Index(props) {
  const {
    dataSource,
    total,
    current,
    pageSize,
    isModalVisible,
    initValues,
    type,
    form,
    searchForm,
    modalTitle,
    handleSearch,
    handleDelete,
    handleAdd,
    handleEdit,
    handleCheck,
    setIsModalVisible,
    handleFinish,
    handleFinishFailed,
    handleAction,
  } = useList(props)

  const { handleRowSelect, handleOperate } = useOperate({
    onSearch: handleSearch,
  })

  return (
    <div className="m-list-wrap">
      <div className="m-content-list-wrap" id="m-content-wrap">
      <div className="m-template-page">模板页面</div>
        <Search
          searchForm={searchForm}
          onSearch={handleSearch}
          getSearchFields={getSearchFields}
          isReset={true}
        ></Search>
        <Tool
          onAdd={handleAdd}
          onOperate={handleOperate}
          getToolBtnList={getToolBtnList}
        ></Tool>
        <MyTable
          dataSource={dataSource}
          total={total}
          current={current}
          pageSize={pageSize}
          onSearch={handleSearch}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onCheck={handleCheck}
          onRowSelect={handleRowSelect}
          onAction={handleAction}
          getColumns={getColumns}
        ></MyTable>
        <Modal
          title={modalTitle}
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
          width={800}
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
          >
            <div id="m-modal-form-info" className="m-modal-form-info">
              {getModalFields()}
            </div>
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
