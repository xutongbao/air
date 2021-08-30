import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Card, Col, Row } from 'antd'
import useList from './useList'

function Home(props) {
  const { companyCount, shopCount, courseCount } = useList(props)
  return (
    <div className="m-admin-content">
      <div className="m-home-content-box">
        <div className="m-home-welcome">今日概况</div>
        <div className="m-home-content">
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Card hoverable title="客户数" bordered={false}>
                {companyCount}
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable title="通话数" bordered={false}>
                {shopCount}
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable title="短信数" bordered={false}>
                {courseCount}
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.getIn(['light', 'userInfo']).toJS(),
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))
