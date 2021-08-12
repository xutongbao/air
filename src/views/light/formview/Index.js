import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button, Form, Result } from 'antd'
import { Icon } from '../../../components/light'
import useList from './useList'

function Index(props) {
  const {
    initValues,
    form,
    modalFields,
    isShowResult,
    title,
    handleFinish,
    handleFinishFailed,
  } = useList(props)

  return (
    <div className="m-formview-wrap">
      <div className="m-formview-inner">
        <div className="m-formview-color-header"></div>
        {isShowResult ? (
          <Result
            status="success"
            title="提交成功"
            subTitle="感谢您的参与"
          ></Result>
        ) : (
          <>
            <div className="m-formview-header">{title}</div>
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
          </>
        )}
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
