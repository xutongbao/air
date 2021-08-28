import React from 'react'
import { Button } from 'antd'
import { Icon } from '../../../../components/light'
import { Link } from 'react-router-dom'

function Tool(props) {
  const { routerSearchObj } = props

  return (
    <div className="m-content-tool">
      <div className="m-content-tool-row">
        <Link to={`/light/formview?id=${routerSearchObj.id}`} target="_blank">
          <Button className="m-space" type="primary">
            <Icon name="add" className="m-tool-btn-icon"></Icon>
            添加
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Tool
