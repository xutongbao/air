import { Form, Col, Input, Button, Space } from 'antd'
import { Icon } from '../../../../components/light'
import { renderTime } from '../../../../utils/tools'

//表格列字段
const getColumns = (props) => {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '项目名称',
      dataIndex: 'name',
    },
    {
      title: 'Git仓库名称',
      dataIndex: 'gitRepositorieName',
    },
    {
      title: 'Jenkins工程名称',
      dataIndex: 'jenkinsProjectName',
    },
    {
      title: '分支名称',
      dataIndex: 'branch',
    },
    {
      title: '测试链接',
      dataIndex: 'url',
      render: (text, record) => {
        const host = window.location.host.split(':')[0]

        const hash = record.info.hash ? record.info.hash : ''
        if (host.includes('xutongbao')) {
          const icePath = text.replace(/39.97.238.175:81/g, 'www.xutongbao.top')
          const nginxPath = text.replace(/39.97.238.175:81/g, 'nginx.xutongbao.top')
          return (
            <>
              <div>
                <a href={icePath} target="_blank" rel="noreferrer">
                  {icePath}
                </a>
              </div>
              {record.info.projectType === 'node' ? (
                <div>
                  <a
                    href={`${window.location.protocol}//${host}/${hash}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {`${window.location.protocol}//${host}/${hash}`}
                  </a>
                </div>
              ) : (
                <div>
                  <a
                    href={nginxPath}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {nginxPath}
                  </a>
                  <span>(nginx)</span>
                </div>
              )}
            </>
          )
        } else {
          return (
            <>
              <div>
                <a href={text} target="_blank" rel="noreferrer">
                  {text}
                </a>
              </div>
              {record.info.projectType === 'node' ? (
                <div>
                  <a
                    href={`${window.location.protocol}//${host}/${hash}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {`${window.location.protocol}//${host}/${hash}`}
                  </a>
                </div>
              ) : (
                <div>
                  <a
                    href={text.replace('81', '83')}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {text.replace('81', '83')}
                  </a>
                  <span>(nginx)</span>
                </div>
              )}
            </>
          )
        }
      },
    },
    {
      title: '备注',
      dataIndex: 'remarks',
      render: (text, record) => {
        return (
          <div>
            <div>{text}</div>
            {record.info.projectType === 'node' && (
              <Space>
                <a
                  href={`${record.url}/myLog.log`}
                  target="_blank"
                  rel="noreferrer"
                >
                  日志
                </a>
                <a
                  href={`https://app.pm2.io/bucket/615faf0cc0bbbba1fbcb831f/backend/overview/servers`}
                  target="_blank"
                  rel="noreferrer"
                >
                  监控
                </a>
              </Space>
            )}
          </div>
        )
      },
    },
    {
      title: '添加/更新时间',
      dataIndex: 'addtime',
      render: renderTime,
    },
    {
      title: '操作',
      render: (record) => {
        const getHref = () => {
          const host = window.location.host.split(':')[0] + ':8080'
          const href = `${window.location.protocol}//${host}/job/${record.jenkinsProjectName}/build?delay=0sec`
          return href
        }
        return (
          <div className="m-action">
            <Button
              className="m-action-btn"
              size="small"
              danger
              onClick={() => props.onDelete(record)}
            >
              删除
            </Button>
            <Button
              className="m-action-btn"
              size="small"
              onClick={() => props.onCheck(record)}
            >
              查看
            </Button>
            <Button
              className="m-action-btn"
              size="small"
              onClick={() => props.onEdit(record)}
            >
              编辑
            </Button>
            <a href={getHref()} target="_blank" rel="noreferrer">
              <Button className="m-action-btn" size="small" type="primary">
                <Icon name="jenkins" className="m-tool-btn-icon"></Icon>
                <span className="m-space-left">Jenkins部署</span>
              </Button>
            </a>
          </div>
        )
      },
    },
  ]
}

//搜索字段
const getSearchFields = (isExpand) => {
  // eslint-disable-next-line
  const expandClassname = `m-table-serach ${isExpand ? 'active' : ''}`
  const span = 6
  return (
    <>
      <Col span={span}>
        <Form.Item name="searchName" label="项目名称">
          <Input placeholder="项目名称" />
        </Form.Item>
      </Col>
    </>
  )
}

//添加编辑查看对话框表单字段
const getModalFields = () => {
  return (
    <>
      <Form.Item
        label="项目名称"
        name="name"
        rules={[
          {
            required: true,
            message: '请输入项目名称！',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="备注" name="remarks">
        <Input />
      </Form.Item>
    </>
  )
}

//Tool组件里的按钮
const getToolBtnList = ({ onOperate }) => {
  return (
    <>
      <div className="m-content-tool-row">
        <Button
          className="m-space"
          type="primary"
          onClick={() => onOperate({ type: 0 })}
        >
          删除
        </Button>
      </div>
    </>
  )
}

export { getColumns, getSearchFields, getModalFields, getToolBtnList }
