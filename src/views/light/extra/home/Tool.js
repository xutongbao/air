import React from 'react'
import { Button } from 'antd'
import { Icon } from '../../../../components/light'
import { getToolBtnList } from './config'
import Api from '../../../../api'

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

  const handleRefreshLogReport = () => {
    Api.light.refreshLogReport().then(res => {
      if (res.state === 1) {
        console.log(res)
      }
    })
  }

  const isDev = localStorage.getItem('isDev')

  return (
    <div className="m-content-tool">
      <div className="m-content-tool-row">
        <a href={getHref()} target="_blank" rel="noreferrer">
          <Button className="m-space" type="primary">
            <Icon name="jenkins" className="m-tool-btn-icon"></Icon>
            <span className="m-space-left">Jenkins部署</span>
          </Button>
        </a>
        {isDev === 'true' && (
          <Button className="m-space" type="primary" onClick={handleRefreshLogReport}>
            <Icon name="reset" className="m-tool-btn-icon"></Icon>
            <span className="m-space-left">刷新日志报告</span>
          </Button>
        )}
        <a href={`/report.html`} target="_blank" rel="noreferrer">
          <Button className="m-space" type="primary">
            <Icon name="log" className="m-tool-btn-icon"></Icon>
            <span className="m-space-left">日志报告</span>
          </Button>
        </a>
      </div>
      {getToolBtnList({ onOperate })}
    </div>
  )
}

export default Tool
