import { useState, useEffect } from 'react'
import Api from '../../../api'
import { Form } from 'antd'
import { getRouterSearchObj } from '../../../utils/tools'
import useFields from './useFields'
import QRCode from 'qrcode'
import QrCodeWithLogo from 'qr-code-with-logo'
import logo from '../../../static/images/logo.png'

export default function useList(props) {
  const [form] = Form.useForm()
  const [modalFields, setModalFields] = useState([])
  const { getModalFields } = useFields(props)
  // eslint-disable-next-line
  const [initValues, setInitValues] = useState({})
  const [isShowResult, setIsShowResult] = useState(false)
  const [title, setTitle] = useState('')
  const [isImageFirst, setIsImageFirst] = useState(false)
  const [qrCodeImageUrl, setQrCodeImageUrl] = useState()

  //获取路由参数
  const routerSearchObj = getRouterSearchObj(props)
  const tableId = routerSearchObj.id

  //搜索
  const handleSearch = () => {
    Api.light.fieldsSearch({ tableId }).then((res) => {
      if (res.code === 200) {
        const fields = res.data.fields
        setModalFields(getModalFields(res.data.fields))
        setTitle(res.data.title)
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

  useEffect(() => {
    //不带logo
    // QRCode.toDataURL(document.location.href)
    //   .then((url) => {
    //     console.log(url)
    //     setQrCodeImageUrl(url)
    //   })
    //   .catch((err) => {
    //     console.error(err)
    //   })

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
    })
  }, [])

  return {
    form,
    initValues,
    modalFields,
    isShowResult,
    title,
    isImageFirst,
    qrCodeImageUrl,
    handleSearch,
    handleFinish,
    handleFinishFailed,
  }
}
