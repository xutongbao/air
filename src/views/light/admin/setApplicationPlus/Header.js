import React from 'react'
import { Button, Space } from 'antd'
import { withRouter } from 'react-router-dom'
import { Icon } from '../../../../components/light'

function Header(props) {
  const { applicationTitle } = props
  return (
    <div className="m-design-header">
      <div className="m-design-header-title" title={applicationTitle}>
        <Icon
          name="arrow"
          className="m-set-application-header-icon"
          onClick={() => props.history.go(-1)}
        ></Icon>
        {applicationTitle}
      </div>
      <div className="m-design-header-middle"></div>
      <div className="m-design-header-action">
        <Button type="primary">保存</Button>
        <Button>预览</Button>
      </div>
    </div>
  )
}

export default withRouter(Header)
