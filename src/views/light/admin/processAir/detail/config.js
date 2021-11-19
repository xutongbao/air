import { Form, Input, Button, TreeSelect, Select } from 'antd'
const { TextArea } = Input
const { Option } = Select

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
const getModalFields = ({ treeData, initValues, nodeType, handleChangeNodeType }) => {
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
        name="nodeType"
        label="节点类型"
        rules={[
          {
            required: true,
            message: '请选择节点类型！',
          },
        ]}
      >
        <Select
          placeholder="请选择"
          onChange={handleChangeNodeType}
          getPopupContainer={() => document.getElementById('m-content-wrap')}
        >
          <Option value={0}>条件节点</Option>
          <Option value={1}>执行节点</Option>
          <Option value={2}>审批节点</Option>
          <Option value={3}>抄送节点</Option>
        </Select>
      </Form.Item>
      {
        nodeType === 0 && (
          <div>1</div>
        )
      }
      <Form.Item
        label="内容"
        name="content"
        rules={[
          {
            required: true,
            message: '请输入内容！',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="color" label="颜色">
        <Select
          placeholder="请选择"
          allowClear
          getPopupContainer={() => document.getElementById('m-content-wrap')}
        >
          <Option value="blue">蓝色</Option>
          <Option value="orange">橙色</Option>
          <Option value="green">绿色</Option>
        </Select>
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
