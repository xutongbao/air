const axios = require('axios')

const baseURL = `http://${process.env.IP}:81${process.env.myBranch}`
console.log(baseURL)

const email = () => {
  const emailData = {
    type: 'jenkins',
    title: '构建成功',
    username: 'xxx',
    path: `${baseURL}{process.env.myBranch}`,
    errorTitle: '构建',
    detail: '构建成功',
    browser: '1',
  }
  axios
    .post(`${baseURL}/api/log/email`, {
      ...emailData,
    })
    .then((res) => {
      console.log('发送邮件成功！')
    })
    .catch((error) => {
      console.error(error)
    })
}

const handleAddRecord = () => {
  const dataItem = {
    id: Date.now(),
    name: '无代码平台',
    gitRepositorieName: 'air',
    branch: 'origin/master',
    url: '/air/origin/master/#/light/index/content?id=0',
    remarks: '自动'
  }
  axios
    .post(`${baseURL}/api/jenkins/add`, {
      dataItem,
    })
    .then((res) => {
      console.log('添加记录成功！')
    })
    .catch((error) => {
      console.error(error)
    })
}

email()
handleAddRecord()
