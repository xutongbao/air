import React from 'react'
import { withRouter } from 'react-router-dom'
import { Icon } from '../../../../../components/light'

function Header(props) {
  const { applicationTitle } = props

  return (
    <div className="m-design-header">
      <div className="m-design-header-title">
        <Icon
          name="goback"
          title="返回"
          className="m-set-application-header-icon"
          onClick={() => props.history.go(-1)}
        ></Icon>
        <span title={applicationTitle}>{applicationTitle}</span>
      </div>
    </div>
  )
}

export default withRouter(Header)
