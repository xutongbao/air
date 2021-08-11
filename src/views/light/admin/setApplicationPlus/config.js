import { Form, Input, Button, Select, InputNumber, Checkbox } from 'antd'
import { getFormComponentArr, getRenderFunArr } from '../../../../utils/tools'
import { FieldRequired } from '../../../../components/light'

const { Option } = Select

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

//添加编辑查看对话框表单字段
const getModalFields = ({
  dataSource,
  type,
  initValues,
  formComponentName,
}) => {
  const checkTitle = (_, value) => {
    if (type === 'edit') {
      if (value === initValues.title) {
        return Promise.resolve()
      }
    }
    const result = dataSource.find((item) => item.title === value)
    if (result) {
      return Promise.reject(new Error('字段名称已存在!'))
    } else {
      return Promise.resolve()
    }
  }

  const checkDataIndex = (_, value) => {
    if (type === 'edit') {
      if (value === initValues.dataIndex) {
        return Promise.resolve()
      }
    }
    const result = dataSource.find((item) => item.dataIndex === value)
    if (result) {
      return Promise.reject(new Error('英文字段名称已存在!'))
    } else {
      return Promise.resolve()
    }
  }

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
          {
            validator: checkTitle,
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
          {
            validator: checkDataIndex,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="表单组件"
        name="formComponentName"
        rules={[
          {
            required: true,
            message: '请选择表单组件！',
          },
        ]}
      >
        <Select
          placeholder="请选择"
          getPopupContainer={() =>
            document.getElementById('m-set-application-modal-form')
          }
        >
          {getFormComponentArr().map((item) => (
            <Option key={item.id} value={item.formComponentName}>
              {item.title}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="渲染函数名"
        name="renderFunName"
        rules={[
          {
            required: true,
            message: '请选择表渲染函数名！',
          },
        ]}
      >
        <Select
          placeholder="请选择"
          getPopupContainer={() =>
            document.getElementById('m-set-application-modal-form')
          }
        >
          {getRenderFunArr()
            .filter((item) =>
              item.formComponentNameArr.includes(formComponentName)
            )
            .map((item) => (
              <Option key={item.id} value={item.renderFunName}>
                {item.title}
              </Option>
            ))}
        </Select>
      </Form.Item>
      <Form.Item label="字段必填" name="rules">
        <FieldRequired></FieldRequired>
      </Form.Item>
      <Form.Item label="表格展示" name="isColumn" valuePropName="checked">
        <Checkbox>展示</Checkbox>
      </Form.Item>
      {/* <Form.Item
        label="搜索"
        name="isSearch"
        valuePropName="checked"
      >
        <Checkbox>展示</Checkbox>
      </Form.Item> */}
      <Form.Item label="添加/编辑" name="isModalField" valuePropName="checked">
        <Checkbox>展示</Checkbox>
      </Form.Item>
      <Form.Item
        label="顺序号"
        name="orderIndex"
        rules={[
          {
            required: true,
            message: '请输入顺序号！',
          },
        ]}
      >
        <InputNumber min={1} max={100} />
      </Form.Item>
    </>
  )
}

export { getColumns, getModalFields }
