import React from 'react'

export default function TreeLine(props) {
  const { lineType } = props
  return (
    <div className="m-tree-line-wrap">
      {JSON.stringify(lineType)}
    </div>
  )
}
