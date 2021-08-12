import { Form, Col, Input, Button } from 'antd'

//表格列字段
const getColumns = (props) => {
  return [
    ...props.columns,
    {
      title: '操作',
      width: 220,
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
        <Form.Item name="name" label="店铺名称">
          <Input placeholder="名称或ID或百度ID" />
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
            message: '请输入店铺名称！',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  )
}


export { getColumns, getSearchFields, getModalFields }
