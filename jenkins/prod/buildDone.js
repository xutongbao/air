const axios = require('axios')
const { getBaseURL, getJenkinsProjectName } = require('../util/tools')

const { baseURL } = getBaseURL()
//项目名称
const name = '无代码平台'

// 发邮件
const email = async () => {
  const emailData = {
    type: 'jenkins',
    title: '构建成功-线上环境',
    name,
    gitRepositorieName: process.env.gitRepositorieName,
    jenkinsProjectName: getJenkinsProjectName({ cd: process.env.cd }),
    branch: process.env.branch,
    url: `${baseURL}/${process.env.gitRepositorieName}`,
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
    jenkinsProjectName: getJenkinsProjectName({ cd: process.env.cd }),
    branch: process.env.branch,
    url: `${baseURL}/${process.env.gitRepositorieName}`,
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

