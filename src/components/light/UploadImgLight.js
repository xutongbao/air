import React from 'react'
import { Button, Upload, message } from 'antd'
import urls from '../../api/urls'
import { getHost } from '../../utils/tools'

export default function UploadImgLight({
  value = '',
  msg,
  onChange,
  accept = '.jpg',
}) {
  const imageUrl = value
  let defaultValue = {
    uid: '-1',
    name: imageUrl,
    status: 'done',
    url: imageUrl,
  }

  const fileList = []
  if (value) {
    fileList.push(defaultValue)
  }

  const uploadProps = {
    name: 'file',
    action: urls.light.testUpload,
    maxCount: 1,
    listType: 'picture',
    defaultFileList: [...fileList],
    accept,
    onChange(info) {
      // if (info.file.status !== 'uploading') {
      //   console.log(info.file, info.fileList)
      //   onChange(undefined)
      // }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} 上传成功`)
        if (info.file.response.state === 1) {
          // console.log(info.file.xhr.responseURL)
          const imgUrl = `${getHost(info.file.xhr.responseURL)}/${info.file.response.data.filename}`
          console.log(imgUrl)
          onChange(imgUrl)
        }
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 上传失败`)
      }
    },
  }

  return (
    <span>
      <Upload {...uploadProps}>
        <Button>上传图片</Button>
        <span className="m-upload-text">{msg}</span>
      </Upload>
    </span>
  )
}
