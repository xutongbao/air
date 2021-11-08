import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import useList from './useList'
import Header from '../Header'
import Preview from '../../../../formview/Index'
import { Form } from 'antd'
import { UploadImgLight } from '../../../../../../components/light'

function Index(props) {
  const { applicationTitle, routerSearchObj, skin, form, handleSave, handleValuesChange } =
    useList(props)
  return (
    <div className="m-admin-content">
      <Header
        applicationTitle={applicationTitle}
        routerSearchObj={routerSearchObj}
        onSave={handleSave}
      ></Header>
      <div className="m-design-wrap">
        <div className="m-design-sidebar skin">
          <Form
            form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 15 }}
            initialValues={{ ...skin }}
            // onFinish={handleFinish}
            // onFinishFailed={handleFinishFailed}
            onValuesChange={handleValuesChange}
          >
            <Form.Item label="表头图片" name="headerImg">
              <UploadImgLight msg="尺寸640*272"></UploadImgLight>
            </Form.Item>
            <Form.Item label="背景图片" name="backgroundImg">
              <UploadImgLight msg="尺寸1394*840"></UploadImgLight>
            </Form.Item>
          </Form>
        </div>
        <div className="m-design-content">
          <Preview previewSkin={skin}></Preview>
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
