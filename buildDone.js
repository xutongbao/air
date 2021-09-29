const axios = require('axios')

const baseURL = `http://${process.env.IP}:81`
console.log(baseURL)

console.log(process.env.myBranch)

// 发邮件
const email = () => {
  const emailData = {
    type: 'jenkins',
    title: '构建成功',
    name: '无代码平台',
    gitRepositorieName: process.env.gitRepositorieName,
    branch: 'origin/master',
    url: `${baseURL}${process.env.myBranch}`,
    remarks: '自动'
  }
  axios
    .post(`${baseURL}/api/log/email`, {
      ...emailData,
    })
    .then((res) => {
      console.log('E-Mail sent successfully!')
    })
    .catch((error) => {
      console.error(error)
    })
}

// 添加构建记录
const handleAddRecord = () => {
  const dataItem = {
    id: Date.now(),
    name: '无代码平台',
    gitRepositorieName: process.env.gitRepositorieName,
    branch: 'origin/master',
    url: `${baseURL}${process.env.myBranch}`,
    remarks: '自动'
  }
  axios
    .post(`${baseURL}/api/jenkins/add`, {
      dataItem,
    })
    .then((res) => {
      console.log('Record added successfully!')
    })
    .catch((error) => {
      console.error(error)
    })
}

email()
handleAddRecord()
