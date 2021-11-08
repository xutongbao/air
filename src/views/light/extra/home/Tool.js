import React from 'react'
import { Button } from 'antd'
import { Icon } from '../../../../components/light'
import { getToolBtnList } from './config'

function Tool(props) {
  const { onOperate } = props
  const getHref = () => {
    if (window.location.host.includes('xutongbao')) {
      const href = `${window.location.protocol}//jenkins.xutongbao.top`
      return href
    } else {
      const host = window.location.host.split(':')[0] + ':8080'
      const href = `${window.location.protocol}//${host}`
      return href
    }
  }

  return (
    <div className="m-content-tool">
      <div className="m-content-tool-row">
        <a
          href={getHref()}
          target="_blank"
          rel="noreferrer"
        >
          <Button className="m-space" type="primary">
            <Icon name="jenkins" className="m-tool-btn-icon"></Icon>
             <span className="m-space-left">Jenkins部署</span>
          </Button>
        </a>
      </div>
      {getToolBtnList({ onOperate })}
    </div>
  )
}

export default Tool
