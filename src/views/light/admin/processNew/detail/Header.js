import React, { useState, useEffect } from 'react'
import { Button, Steps } from 'antd'
import { withRouter, Link } from 'react-router-dom'
import { Icon } from '../../../../../components/light'
const { Step } = Steps

function Header(props) {
  const { applicationTitle, routerSearchObj, onSave } = props
  const [current, setCurrent] = useState(0)

  const accountList = [
    {
      id: 0,
      title: '编辑',
      type: 'edit',
      path: `/light/admin/app?type=detail&id=${routerSearchObj.id}&progress=edit`,
    },
    {
      id: 1,
      title: '皮肤',
      type: 'skin',
      path: `/light/admin/app?type=detail&id=${routerSearchObj.id}&progress=skin`,
    },
    {
      id: 2,
      title: '设置',
      type: 'set',
      path: `/light/admin/app?type=detail&id=${routerSearchObj.id}&progress=set`,
    },
    {
      id: 3,
      title: '发布',
      type: 'publish',
      path: `/light/admin/app?type=detail&id=${routerSearchObj.id}&progress=publish`,
    },
  ]

  const handleChange = (current) => {
    const result = accountList.find((item) => item.id === current)
    props.history.replace(result.path)
  }

  useEffect(() => {
    const result = accountList.find(
      (item) => item.type === routerSearchObj.progress
    )
    setCurrent(result.id)
    // eslint-disable-next-line
  }, [])

  return (
    <div className="m-design-header">
      <div className="m-design-header-title">
        <Icon
          name="goback"
          title="返回"
          className="m-set-application-header-icon"
          onClick={() => props.history.go(-1)}
        ></Icon>
        <span title={applicationTitle}>{applicationTitle}</span>
      </div>
    </div>
  )
}

export default withRouter(Header)
