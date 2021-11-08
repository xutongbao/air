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
  appListSearch: '/api/app/list/search',
  appListAdd: '/api/app/list/add',
  appListDelete: '/api/app/list/delete',
  appListEdit: '/api/app/list/edit',
  appTableSearch: '/api/app/table/search',
  appTableAdd: '/api/app/table/add',
  appTableDelete: '/api/app/table/delete',
  appTableEdit: '/api/app/table/edit',
  appFieldsSearch: '/api/app/fields/search',
  appFieldsAdd: '/api/app/fields/add',
  appFieldsDelete: '/api/app/fields/delete',
  appFieldsEdit: '/api/app/fields/edit',
  appFieldsEditAll: '/api/app/fields/editAll',
  //#endregion

  //#region 流程管理
  processListSearch: '/api/process/list/search',
  processListAdd: '/api/process/list/add',
  processListDelete: '/api/process/list/delete',
  processListEdit: '/api/process/list/edit',
  processTableSearch: '/api/process/table/search',
  processTableAdd: '/api/process/table/add',
  processTableDelete: '/api/process/table/delete',
  processTableEdit: '/api/process/table/edit',
  processFieldsSearch: '/api/process/fields/search',
  processFieldsAdd: '/api/process/fields/add',
  processFieldsDelete: '/api/process/fields/delete',
  processFieldsEdit: '/api/process/fields/edit',
  processFieldsEditAll: '/api/process/fields/editAll',
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