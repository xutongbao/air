import urls from './urls'
import { common } from './common'

const Api = {

  //#region 错误日志列表(node)
  testLogAdd: (data) => common({ url: urls.light.testLogAdd, data, method: 'post' }),

  //#endregion

  templateSearch: (data) => common({ url: urls.light.templateSearch, data, method: 'post' }),
  templateAdd: (data) => common({ url: urls.light.templateAdd, data, method: 'post' }),
  templateDelete: (data) => common({ url: urls.light.templateDelete, data, method: 'post' }),
  templateEdit: (data) => common({ url: urls.light.templateEdit, data, method: 'post' }),
  templateUp: (data) => common({ url: urls.light.templateUp, data, method: 'post' }),

  easyTemplateSearch: (data) => common({ url: urls.light.easyTemplateSearch, data, method: 'post' }),
  easyTemplateAdd: (data) => common({ url: urls.light.easyTemplateAdd, data, method: 'post' }),
  easyTemplateDelete: (data) => common({ url: urls.light.easyTemplateDelete, data, method: 'post' }),
  easyTemplateEdit: (data) => common({ url: urls.light.easyTemplateEdit, data, method: 'post' }),

  //#region 应用管理
  appListSearch: (data) => common({ url: urls.light.appListSearch, data, method: 'post' }),
  appListAdd: (data) => common({ url: urls.light.appListAdd, data, method: 'post' }),
  appListDelete: (data) => common({ url: urls.light.appListDelete, data, method: 'post' }),
  appListEdit: (data) => common({ url: urls.light.appListEdit, data, method: 'post' }),
  appTableSearch: (data) => common({ url: urls.light.appTableSearch, data, method: 'post' }),
  appTableAdd: (data) => common({ url: urls.light.appTableAdd, data, method: 'post' }),
  appTableDelete: (data) => common({ url: urls.light.appTableDelete, data, method: 'post' }),
  appTableEdit: (data) => common({ url: urls.light.appTableEdit, data, method: 'post' }),
  appFieldsSearch: (data) => common({ url: urls.light.appFieldsSearch, data, method: 'post' }),
  appFieldsAdd: (data) => common({ url: urls.light.appFieldsAdd, data, method: 'post' }),
  appFieldsDelete: (data) => common({ url: urls.light.appFieldsDelete, data, method: 'post' }),
  appFieldsEdit: (data) => common({ url: urls.light.appFieldsEdit, data, method: 'post' }),
  appFieldsEditAll: (data) => common({ url: urls.light.appFieldsEditAll, data, method: 'post' }),
  //#endregion

  //#region 流程管理
  processListSearch: (data) => common({ url: urls.light.processListSearch, data, method: 'post' }),
  processListAdd: (data) => common({ url: urls.light.processListAdd, data, method: 'post' }),
  processListDelete: (data) => common({ url: urls.light.processListDelete, data, method: 'post' }),
  processListEdit: (data) => common({ url: urls.light.processListEdit, data, method: 'post' }),
  processTableSearch: (data) => common({ url: urls.light.processTableSearch, data, method: 'post' }),
  processTableAdd: (data) => common({ url: urls.light.processTableAdd, data, method: 'post' }),
  processTableDelete: (data) => common({ url: urls.light.processTableDelete, data, method: 'post' }),
  processTableEdit: (data) => common({ url: urls.light.processTableEdit, data, method: 'post' }),
  processFieldsSearch: (data) => common({ url: urls.light.processFieldsSearch, data, method: 'post' }),
  processFieldsAdd: (data) => common({ url: urls.light.processFieldsAdd, data, method: 'post' }),
  processFieldsDelete: (data) => common({ url: urls.light.processFieldsDelete, data, method: 'post' }),
  processFieldsEdit: (data) => common({ url: urls.light.processFieldsEdit, data, method: 'post' }),
  processFieldsEditAll: (data) => common({ url: urls.light.processFieldsEditAll, data, method: 'post' }),
  //#endregion


  //#region jenkins部署列表
  jenkinsSearch: (data) => common({ url: urls.light.jenkinsSearch, data, method: 'post' }),
  jenkinsAdd: (data) => common({ url: urls.light.jenkinsAdd, data, method: 'post' }),
  jenkinsDelete: (data) => common({ url: urls.light.jenkinsDelete, data, method: 'post' }),
  jenkinsEdit: (data) => common({ url: urls.light.jenkinsEdit, data, method: 'post' }),
  jenkinsUp: (data) => common({ url: urls.light.jenkinsUp, data, method: 'post' }),

  //#endregion  
}

export default Api