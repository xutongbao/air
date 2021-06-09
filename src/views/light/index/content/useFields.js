import { Form, Input } from 'antd'
import { getFormComponentArr, getRenderFunArr } from '../../../../utils/tools'

export default () => {
  //根据fields获取columns
  const getColumns = (fields) => {
    return fields.filter(item => item.isColumn).map((item) => {
      return {
        title: item.title,
        dataIndex: item.dataIndex,
        render: (text, record) => {
          const result = getRenderFunArr().find(
            (funItem) => funItem.renderFunName === item.renderFunName
          )
          return result ? result.render(text, record) : text
        },
      }
    })
  }

  //根据fields获取对话框字段
  const getModalFields = (fields) => {
    return fields.map((item) => {
      if (item.isModalField) {
        const result = getFormComponentArr().find(
          (componentItem) =>
            componentItem.formComponentName === item.formComponentName
        )
        return (
          <Form.Item
            key={item.id}
            label={item.title}
            name={item.dataIndex}
            rules={item.rules}
          >
            {result ? result.component : <Input></Input>}
          </Form.Item>
        )
      }
    })
  }

  return {
    getColumns,
    getModalFields,
  }
}
