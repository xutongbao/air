import React from 'react'
import { Button } from 'antd'
import { withRouter, Link } from 'react-router-dom'
import { Icon } from '../../../../components/light'

function Header(props) {
  const { applicationTitle, tableId, onSave } = props
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
        <Button type="primary" onClick={onSave}>
          保存
        </Button>
        <Link to={`/light/index/formview?id=${tableId}`} target="_blank" style={{display: 'inherit'}}>
          <Button>预览</Button>
        </Link>
      </div>
    </div>
  )
}

export default withRouter(Header)
