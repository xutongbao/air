import { Form, Input } from 'antd'
import { FieldRequired } from '../../../../components/light'

//组件元素
const getComponentArr = () => {
  return [
    {
      id: 1,
      icon: 'input',
      title: '单行文本',
      formComponentName: 'Input',
      dataIndex: 'input',
      renderFunName: 'renderSpan',
      isHasRules: true,
      isHasPlaceHolder: true,
    },
    {
      id: 2,
      icon: 'textarea',
      title: '多行文本',
      formComponentName: 'TextArea',
      dataIndex: 'textArea',
      renderFunName: 'renderSpan',
      isHasRules: true,
      isHasPlaceHolder: true,
    },
    {
      id: 3,
      icon: 'number-input',
      title: '数字',
      formComponentName: 'InputNumber',
      dataIndex: 'inputNumber ',
      renderFunName: 'renderSpan',
      isHasRules: true,
      isHasPlaceHolder: true,
    },
    {
      id: 4,
      icon: 'image',
      title: '图片',
      formComponentName: 'Image',
      dataIndex: 'image',
      renderFunName: 'renderImage',
      isHasRules: false,
      isHasPlaceHolder: false,
    },
    {
      id: 5,
      icon: 'select',
      title: '下拉列表',
      formComponentName: 'Select',
      dataIndex: 'select',
      renderFunName: 'renderSelect',
      isHasRules: true,
      isHasPlaceHolder: true,
    },
  ]
}

//添加编辑查看对话框表单字段
const getAttrFields = ({ initValuesForAttr }) => {
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
      {initValuesForAttr.isHasPlaceHolder && (
        <Form.Item label="placeholder" name="placeholder">
          <Input />
        </Form.Item>
      )}

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
      {initValuesForAttr.isHasRules && (
        <Form.Item label="字段必填" name="rules">
          <FieldRequired></FieldRequired>
        </Form.Item>
      )}
    </>
  )
}

export { getComponentArr, getAttrFields }
