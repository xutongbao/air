import { baseURL, nodeBaseURL } from '../utils/config'

const urls = {
  testUpload: baseURL + '/api/upload', //不是axios发起的请求，需要特殊处

  //#region 错误日志列表(node)
  testLogAdd: nodeBaseURL + '/api/log/add',

  //#endregion

  templateSearch: '/api/template/search',
  templateAdd: '/api/template/add',
  templateDelete: '/api/template/delete',
  templateEdit: '/api/template/edit',
  templateUp: '/api/template/up',

  easyTemplateSearch: '/api/easyTemplate/search',
  easyTemplateAdd: '/api/easyTemplate/add',
  easyTemplateDelete: '/api/easyTemplate/delete',
  easyTemplateEdit: '/api/easyTemplate/edit', 

  //#region 应用管理
  routerSearch: '/api/app/router/search',
  routerAdd: '/api/app/router/add',
  routerDelete: '/api/app/router/delete',
  routerEdit: '/api/app/router/edit',
  tableSearch: '/api/app/table/search',
  tableAdd: '/api/app/table/add',
  tableDelete: '/api/app/table/delete',
  tableEdit: '/api/app/table/edit',
  fieldsSearch: '/api/app/fields/search',
  fieldsAdd: '/api/app/fields/add',
  fieldsDelete: '/api/app/fields/delete',
  fieldsEdit: '/api/app/fields/edit',
  fieldsEditAll: '/api/app/fields/editAll',
  //#endregion

  //#region jenkins部署列表
  jenkinsSearch: '/api/jenkins/search',
  jenkinsAdd: '/api/jenkins/add',
  jenkinsDelete: '/api/jenkins/delete',
  jenkinsEdit: '/api/jenkins/edit',
  jenkinsUp: '/api/jenkins/up',
  //#endregion  
}

export default urls