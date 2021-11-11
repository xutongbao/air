import { Form, Input, Button, TreeSelect } from 'antd'
const { TextArea } = Input

//表格列字段
const getColumns = (props) => {
  return [
    {
      title: '流程树',
      dataIndex: 'name',
    },
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '操作',
      width: 320,
      render: (record) => {
        return (
          <div className="m-action">
            {record.belongCategory !== '0' && (
              <Button
                className="m-action-btn"
                size="small"
                danger
                onClick={() => props.onDelete(record)}
              >
                删除
              </Button>
            )}
            <Button
              className="m-action-btn"
              size="small"
              onClick={() => props.onAddChild(record)}
            >
              新增子条件分支
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
const getModalFields = ({ treeData, initValues }) => {
  return (
    <>
      <Form.Item
        label="条件分支名称"
        name="name"
        rules={[
          {
            required: true,
            message: '请输入条件分支名称！',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="父级条件分支"
        name="belongCategory"
        rules={[
          {
            required: true,
            message: '请选择所属分类！',
          },
        ]}
      >
        <TreeSelect
          disabled={initValues.belongCategory === '0'}
          treeData={treeData}
          getPopupContainer={() => document.getElementById('m-modal-form-info')}
        ></TreeSelect>
      </Form.Item>
      <Form.Item label="备注" name="remark">
        <TextArea />
      </Form.Item>
    </>
  )
}

export { getColumns, getModalFields }
