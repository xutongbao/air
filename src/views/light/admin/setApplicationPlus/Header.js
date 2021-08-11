import React from 'react'
import { Button } from 'antd'
import { withRouter } from 'react-router-dom'
import { Icon } from '../../../../components/light'

function Header(props) {
  const { applicationTitle, onSave } = props
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
        <Button type="primary" onClick={onSave}>保存</Button>
        <Button>预览</Button>
      </div>
    </div>
  )
}

export default withRouter(Header)
