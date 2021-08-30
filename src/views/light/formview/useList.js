import { useState, useEffect } from 'react'
import Api from '../../../api'
import { Form, Input } from 'antd'
import { getRouterSearchObj, getFormComponentArr } from '../../../utils/tools'
import QrCodeWithLogo from 'qr-code-with-logo'
import logo from '../../../static/images/logo.png'

export default function useList(props) {
  const [form] = Form.useForm()
  const [fieldsDom, setFieldsDom] = useState([])
  // eslint-disable-next-line
  const [initValues, setInitValues] = useState({})
  const [isShowResult, setIsShowResult] = useState(false)
  const [title, setTitle] = useState('')
  const [isImageFirst, setIsImageFirst] = useState(false)
  const [qrCodeImageUrl, setQrCodeImageUrl] = useState()
  const [skin, setSkin] = useState({})

  //获取路由参数
  const routerSearchObj = getRouterSearchObj(props)
  const tableId = routerSearchObj.id

  //根据fields获取对话框字段
  const getFieldsDom = (fields) => {
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

  //搜索
  const handleSearch = () => {
    Api.light.fieldsSearch({ tableId }).then((res) => {
      if (res.code === 200) {
        const fields = res.data.fields
        setFieldsDom(getFieldsDom(res.data.fields))
        setTitle(res.data.title)
        setSkin(res.data.skin ? res.data.skin : {})
        const tempFields = fields.filter((item) => item.isModalField)
        if (Array.isArray(tempFields) && tempFields.length > 0) {
          if (tempFields[0].type === 'image') {
            setIsImageFirst(true)
          }
        }
      }
    })
  }

  //添加或编辑
  const handleFinish = (values) => {
    console.log('Success:', values)
    Api.light.tableAdd({ tableId, dataItem: values }).then((res) => {
      if (res.code === 200) {
        setIsShowResult(true)
      }
    })
  }

  //校验失败
  const handleFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  //挂载完执行，切换路由时，search会变化，也会执行
  useEffect(() => {
    handleSearch()
    // eslint-disable-next-line
  }, [props.location.search])

  //根据当前的url生成二维码
  useEffect(() => {
    const image = new Image()
    QrCodeWithLogo.toImage({
      image,
      content: document.location.href,
      logo: {
        src: logo,
      },
    })
    image.id = 'm-img'
    image.style = "display:none;"
    document.body.appendChild(image)
    const imageDom = document.getElementById('m-img')
    setTimeout(() => {
      setQrCodeImageUrl(imageDom.src)
    }, 500)
  }, [])

  return {
    form,
    initValues,
    fieldsDom,
    isShowResult,
    title,
    isImageFirst,
    qrCodeImageUrl,
    skin,
    handleSearch,
    handleFinish,
    handleFinishFailed,
  }
}
