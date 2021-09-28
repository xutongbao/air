const axios = require('axios')

const emailPost = (emailData) => {
  axios
    .post('http://39.97.238.175:81/api/log/email', {
      ...emailData,
    })
    .then((res) => {})
    .catch((error) => {
      console.error(error)
    })
}

const email = () => {
  const tempValues = {
    type: 'jenkins',
    title: '构建成功',
    username: 'xxx',
    path: `http://39.97.238.175:81${process.env.myBranch}`,
    errorTitle: '构建',
    detail: '构建成功',
    browser: '1',
  }
  emailPost(tempValues)
}
email()
