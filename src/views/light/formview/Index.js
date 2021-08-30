import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button, Form, Result, Image, Space } from 'antd'
import { Icon } from '../../../components/light'
import useList from './useList'

function Index(props) {
  const {
    initValues,
    form,
    fieldsDom,
    isShowResult,
    title,
    isImageFirst,
    qrCodeImageUrl,
    skin,
    handleFinish,
    handleFinishFailed,
  } = useList(props)

  return (
    <div
      className="m-formview-wrap"
      style={{ backgroundImage: `url(${skin.backgroundImg})` }}
    >
      <div className="m-formview-inner">
        {/* <div className="m-formview-color-header"></div> */}
        {!isShowResult ? (
          <>
            {skin.headerImg && (
              <div className="m-formview-header-img-wrap">
                <img
                  className="m-formview-header-img"
                  alt="表头"
                  src={skin.headerImg}
                ></img>
              </div>
            )}
            <div
              className={`m-formview-header-text ${
                isImageFirst ? 'image-first' : ''
              }`}
            >
              <Space>
                <span>{title}</span>
                {qrCodeImageUrl && (
                  <Image
                    className="m-qrcode-img"
                    src={qrCodeImageUrl}
                    alt={'二维码'}
                    preview={{
                      mask: '',
                    }}
                  ></Image>
                )}
              </Space>
            </div>
            <Form
              form={form}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 17 }}
              initialValues={{ ...initValues }}
              onFinish={handleFinish}
              onFinishFailed={handleFinishFailed}
            >
              {fieldsDom}
              <Form.Item
                wrapperCol={{ offset: 4, span: 17 }}
                className="m-formview-formitem m-formview-formitem-footer-mobile"
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
          </>
        ) : (
          <Result
            status="success"
            title="提交成功"
            subTitle="感谢您的参与"
            extra={
              <Button
                type="primary"
                onClick={() => {
                  document.location.reload()
                }}
              >
                返回
              </Button>
            }
          ></Result>
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
