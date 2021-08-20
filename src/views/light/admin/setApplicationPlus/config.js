import { Form, Input, Button } from 'antd'
import { FieldRequired } from '../../../../components/light'

//表格列字段
const getColumns = (props) => {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '字段名称',
      dataIndex: 'title',
    },
    {
      title: '英文名称',
      dataIndex: 'dataIndex',
    },
    {
      title: '表单组件名',
      dataIndex: 'formComponentName',
      render: (text) => {
        return text ? text : '无'
      },
    },
    {
      title: '渲染函数名',
      dataIndex: 'renderFunName',
      render: (text) => {
        return text ? text : '无'
      },
    },
    {
      title: '字段必填',
      dataIndex: 'rules',
      render: (text) => {
        const result = Array.isArray(text) && text.length > 0 && text[0]
        return result ? (result.required ? '是' : '否') : '否'
      },
    },
    {
      title: '表格展示',
      dataIndex: 'isColumn',
      render: (text) => {
        return text ? '是' : '否'
      },
    },
    // {
    //   title: '搜索',
    //   dataIndex: 'isSearch',
    //   render: (text) => {
    //     return text ? '是' : '否'
    //   },
    // },
    {
      title: '添加/编辑',
      dataIndex: 'isModalField',
      render: (text) => {
        return text ? '是' : '否'
      },
    },
    {
      title: '顺序号',
      dataIndex: 'orderIndex',
      render: (text) => {
        return typeof text === 'number' ? text : '无'
      },
    },
    {
      title: '操作',
      width: 220,
      render: (record) => {
        if (record.isSystem) {
          return '系统字段'
        } else {
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
        }
      },
    },
  ]
}

//组件元素
const getComponentArr = () => {
  return [
    {
      icon: 'input',
      name: '单行文本',
      formComponentName: "Input",
      dataIndex: 'input'
    },
    {
      icon: 'textarea',
      name: '多行文本',
    },
    {
      icon: 'number-input',
      name: '数字',
    },
  ]
}

//添加编辑查看对话框表单字段
const getAttrFields = () => {
  return (
    <>
      <Form.Item
        label="字段名称"
        name="title"
        rules={[
          {
            required: true,
            message: '请输入字段名称！',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="英文名称"
        name="dataIndex"
        rules={[
          {
            required: true,
            message: '请输入字段名称！',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="字段必填" name="rules">
        <FieldRequired></FieldRequired>
      </Form.Item>
    </>
  )
}

export { getColumns, getComponentArr, getAttrFields }
