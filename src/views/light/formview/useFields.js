import { Form, Input } from 'antd'
import { getFormComponentArr, getRenderFunArr } from '../../../utils/tools'

export default function useFields() {
  //根据fields获取columns
  const getColumns = (fields) => {
    return fields
      .filter((item) => item.isColumn)
      .map((item) => {
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
    const arr = []
    fields.forEach((item) => {
      if (item.isModalField) {
        const result = getFormComponentArr().find(
          (componentItem) =>
            componentItem.formComponentName === item.formComponentName
        )
        if (item.type === 'formItem') {
          arr.push(
            <Form.Item
              key={item.id}
              label={item.title}
              name={item.dataIndex}
              rules={item.rules}
              className="m-formview-formitem"
            >
              {result ? (
                result.getComponent({ props: item.props })
              ) : (
                <Input></Input>
              )}
            </Form.Item>
          )
        } else if (item.type === 'image') {
          arr.push(
            <Form.Item key={item.id} name={item.dataIndex} wrapperCol={24}>
              {result ? (
                result.getComponent({
                  props: {
                    src: item.src,
                  },
                })
              ) : (
                <Input></Input>
              )}
            </Form.Item>
          )
        }
      }
    })
    return arr
  }

  return {
    getColumns,
    getModalFields,
  }
}
