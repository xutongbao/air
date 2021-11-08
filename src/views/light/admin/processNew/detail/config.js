import { Form, Input, Button, TreeSelect } from 'antd'
const { TextArea } = Input

//表格列字段
const getColumns = (props) => {
  return [
    {
      title: '分类名称',
      dataIndex: 'name',
    },
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 100,
      render: (text) => {
        return (
          <span
            className={`m-check-status ${text ? 'open' : 'forbidden'}`}
          >
            {text ? '已开启' : '已禁用'}
          </span>
        )
      },
    },
    {
      title: '操作',
      width: 320,
      render: (record) => {
        return (
          <div className="m-action">
            <Button
              className={`m-action-btn ${
                record.status === 3 ? 'forbidden' : 'open'
              }`}
              size="small"
              onClick={() => props.onStatus(record)}
            >
              {record.status === 3 ? '禁用' : '开启'}
            </Button>
            <Button
              className="m-action-btn"
              size="small"
              onClick={() => props.onAddChild(record)}
            >
              新增子类
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

//添加编辑查看对话框表单字段
const getModalFields = ({ treeData }) => {
  return (
    <>
      <Form.Item
        label="分类名称"
        name="name"
        rules={[
          {
            required: true,
            message: '请输入分类名称！',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="首字母" name="letter">
        <Input />
      </Form.Item>
      <Form.Item
        label="所属分类"
        name="belongCategory"
        rules={[
          {
            required: true,
            message: '请选择所属分类！',
          },
        ]}
      >
        <TreeSelect
          treeData={treeData}
          getPopupContainer={() => document.getElementById('m-modal-form-info')}
        ></TreeSelect>
      </Form.Item>
      <Form.Item label="备注" name="remark">
        <TextArea />
      </Form.Item>
      <Form.Item label="排序值" name="order">
        <Input />
      </Form.Item>
    </>
  )
}

export { getColumns, getModalFields }
