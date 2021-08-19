import React from "react"

export default function Icon(props) {
  let { name, className, title } = props
  return (
    <span
      className={`icon iconfont icon-${name} ${className ? className : ""}`}
      title={title}
      onClick={props.onClick}
    ></span>
  )
}
