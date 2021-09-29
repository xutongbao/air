import React from 'react'
import { Button } from 'antd'
import { Icon } from '../../../../components/light'

function Tool() {
  const getHref = () => {
    const host = window.location.host.split(':')[0] + ':8080'
    const href = `${window.location.protocol}//${host}`
    return href
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
    </div>
  )
}

export default Tool
