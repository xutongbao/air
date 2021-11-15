import React from 'react'

export default function TreeLine(props) {
  const { lineType } = props
  return (
    <div className="m-tree-line-wrap">
      {/* {JSON.stringify(lineType)} */}
      <div className="m-tree-line-row">
        <div className={`m-tree-line-item ${lineType.includes(1) ? 'right' : ' '} ${lineType.includes(4) ? 'bottom' : ' '}`}></div>
        <div className={`m-tree-line-item ${lineType.includes(1) ? 'left' : ' '} ${lineType.includes(2) ? 'bottom' : ' '}`}></div>
      </div>
      <div className="m-tree-line-row">
        <div className={`m-tree-line-item ${lineType.includes(3) ? 'right' : ' '} ${lineType.includes(4) ? 'top' : ' '}`}></div>
        <div className={`m-tree-line-item ${lineType.includes(2) ? 'top' : ' '} ${lineType.includes(3) ? 'left' : ' '}` }></div>
      </div>
    </div>
  )
}
