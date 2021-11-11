import React from 'react'
import { Button } from 'antd'
import { Icon } from '../../../../../components/light'

function Tool(props) {
  const { onAdd, myAuthObj } = props

  return (
    <>
      {myAuthObj.add && (
        <div className="m-content-tool m-hide">
          <div className="m-content-tool-row">
            <Button className="m-space" type="primary" onClick={onAdd}>
              <Icon name="add" className="m-tool-btn-icon"></Icon>
              添加分类
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default Tool
