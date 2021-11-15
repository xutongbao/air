import React from 'react'
import { Button } from 'antd'
import { Icon } from '../../../../../components/light'

function Tool(props) {
  const { onResetTreeToCenter } = props

  return (
    <>
      <div className="m-content-tool">
        <div className="m-content-tool-row">
          <Button
            className="m-space"
            type="primary"
            onClick={onResetTreeToCenter}
          >
            <Icon name="reset" className="m-tool-btn-icon"></Icon>
            复位
          </Button>
        </div>
      </div>
    </>
  )
}

export default Tool
