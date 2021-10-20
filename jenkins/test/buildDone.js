const axios = require('axios')

const port = 81
const host = {
  'LAPTOP-4KDIA4A3': 'http://localhost',
  iZ6ilh61jzkvrhZ: 'http://39.97.238.175'
}[process.env.computername]
const baseURL = `${host}:${port}`
console.log('test', baseURL)

//项目名称
const name = '无代码平台'

// 发邮件
const email = async () => {
  const emailData = {
    type: 'jenkins',
    title: '构建成功-测试环境',
    name,
    gitRepositorieName: process.env.gitRepositorieName,
    branch: process.env.branch,
    url: `${baseURL}/${process.env.pipeline}/${process.env.gitRepositorieName}/${process.env.branch}`,
    remarks: '自动'
  }
  await axios
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
const handleAddRecord = async () => {
  const dataItem = {
    id: Date.now(),
    name,
    gitRepositorieName: process.env.gitRepositorieName,
    branch: process.env.branch,
    url: `${baseURL}/${process.env.pipeline}/${process.env.gitRepositorieName}/${process.env.branch}`,
    remarks: '自动'
  }
  await axios
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

(async () => {
  await email()
  await handleAddRecord()
})()

