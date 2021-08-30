import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import Icon from '../../../components/light/Icon'
import Api from '../../../api'

function Header(props) {
  const {
    collapsed,
    userInfo,
  } = props

  const handleArrow = () => {
    props.onSetState(['collapsed'], !collapsed)
    localStorage.setItem('collapsed', !collapsed)
  }

  const handleQuit = () => {
    Api.light.testLogout().then((res) => {
      if (res.state === 1) {
        props.history.push('/')
        window.localStorage.removeItem('accessTokenForAdmin')
      }
    })
  }

  const handleTheme = (theme) => {
    props.onSetState(['theme'], theme)
    localStorage.setItem('theme', JSON.stringify(theme))
  }

  useEffect(() => {
    const collapsed = JSON.parse(localStorage.getItem('collapsed')) === true
    props.onSetState(['collapsed'], collapsed)
    let theme = JSON.parse(localStorage.getItem('theme'))
    theme = theme ? theme : 'dark'
    props.onSetState(['theme'], theme)
    // eslint-disable-next-line
  }, [])

  const userMenu = (
    <Menu>
      {/* <Menu.Item key={0}>更改密码</Menu.Item> */}
      <Menu.Item key={1} onClick={() => handleQuit()}>
        退出
      </Menu.Item>
    </Menu>
  )

  const themeMenu = (
    <Menu>
      <Menu.Item key={0} onClick={() => handleTheme('dark')}>
        默认(深色)
      </Menu.Item>
      <Menu.Item key={1} onClick={() => handleTheme('light')}>
        浅色
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="m-list-header">
      <Icon
        name="arrow"
        className={`m-list-header-icon ${collapsed ? 'rotate' : ''}`}
        onClick={() => handleArrow()}
      ></Icon>
      <div className="m-list-header-info"></div>
      <div className="m-list-header-menu">
        <span className="m-list-header-menu-welcome">欢迎您</span>
        <Dropdown overlay={userMenu}>
          <span className="ant-dropdown-link">
            <span className="m-list-header-menu-username">
              {userInfo.username}
            </span>
            <DownOutlined />
          </span>
        </Dropdown>
        <Dropdown overlay={themeMenu}>
          <span className="m-list-header-menu-theme">
            <Icon name="theme"></Icon>
          </span>
        </Dropdown>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    collapsed: state.getIn(['light', 'collapsed']),
    userInfo: state.getIn(['light', 'userInfo']).toJS(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetState(key, value) {
      dispatch({ type: 'SET_LIGHT_STATE', key, value })
    },
    onDispatch(action) {
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))
