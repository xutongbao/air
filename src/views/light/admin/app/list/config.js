import { Form, Input } from 'antd'

//添加编辑查看对话框表单字段
const getModalFields = () => {
  return (
    <>
      <Form.Item
        label="应用名称"
        name="title"
        rules={[
          {
            required: true,
            message: '请输入应用名称！',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  )
}

export { getModalFields }
