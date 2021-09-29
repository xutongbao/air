import React from 'react'
import { Button } from 'antd'
import { Icon } from '../../../../components/light'

function Tool(props) {
  const { myAuthObj, onAdd, onOperate, getToolBtnList } = props

  return (
    <div className="m-content-tool">
      <div className="m-content-tool-row">
        {myAuthObj.add && (
          <Button className="m-space" type="primary" onClick={onAdd}>
            <Icon name="add" className="m-tool-btn-icon"></Icon>
            添加
          </Button>
        )}
      </div>
      {getToolBtnList({ onOperate, myAuthObj })}
    </div>
  )
}

export default Tool
