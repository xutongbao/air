import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  Icon
} from '../../../../components/light'

function Header(props) {
  const { applicationTitle } = props
  return (
    <div className="m-design-header">
      <Icon name="arrow" className="m-set-application-header-icon" onClick={() => props.history.go(-1)}></Icon>
      {applicationTitle}
    </div>
  )
}

export default withRouter(Header)