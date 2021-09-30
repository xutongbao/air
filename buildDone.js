const axios = require('axios')

const baseURL = `http://${process.env.IP}:${process.env.PORT}`
console.log(baseURL)

console.log(process.env.myBranch)
console.log(process.env.GENERATE_SOURCEMAP)
console.log(typeof process.env.GENERATE_SOURCEMAP)
//项目名称
const name = '无代码平台'

// 发邮件
const email = () => {
  const emailData = {
    type: 'jenkins',
    title: '构建成功',
    name,
    gitRepositorieName: process.env.gitRepositorieName,
    branch: process.env.myBranch,
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
    name,
    gitRepositorieName: process.env.gitRepositorieName,
    branch: process.env.myBranch,
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
