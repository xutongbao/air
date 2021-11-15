import React from 'react'
import { Button, Slider } from 'antd'
import { Icon } from '../../../../../components/light'

function Tool(props) {
  const { onResetTreeToCenter, onScale } = props
  function formatter(value) {
    return `${value}%`
  }

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
          <span className="m-space">调整大小：</span>
          <Slider
            defaultValue={100}
            min={50}
            max={100}
            onAfterChange={onScale}
            tipFormatter={formatter}
            tooltipVisible
            className="m-space m-tree-slider"
            getTooltipPopupContainer={() =>
              document.getElementById('m-content-wrap')
            }
          />
        </div>
        <div className="m-content-tool-row">
          <Button
            className="m-space"
            type="primary"
            onClick={onResetTreeToCenter}
          >
            <Icon name="submit" className="m-tool-btn-icon"></Icon>
            保存
          </Button>
          <Button className="m-space" onClick={onResetTreeToCenter}>
            <Icon name="reset" className="m-tool-btn-icon"></Icon>
            重置
          </Button>
        </div>
      </div>
    </>
  )
}

export default Tool
