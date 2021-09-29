import { Form, Col, Input, Button } from 'antd'
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
      title: '分支名称',
      dataIndex: '',
    },
    {
      title: '测试链接',
      dataIndex: '',
    },
    {
      title: '添加/更新时间',
      dataIndex: 'addtime',
      render: renderTime,
    },
    {
      title: '操作',
      //width: 220,
      render: (record) => {
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
        label="名称"
        name="name"
        rules={[
          {
            required: true,
            message: '请输入名称！',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  )
}

//Tool组件里的按钮
const getToolBtnList = ({ onOperate, myAuthObj }) => {
  return (
    <>
      <div className="m-content-tool-row">
        {myAuthObj.btn && (
          <Button
            className="m-space"
            type="primary"
            onClick={() => onOperate({ type: 0 })}
          >
            <Icon name="correct" className="m-tool-btn-icon"></Icon>
            按钮
          </Button>
        )}
      </div>
    </>
  )
}

export { getColumns, getSearchFields, getModalFields, getToolBtnList }
