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
  tableSearch: (data) => common({ url: urls.light.tableSearch, data, method: 'post' }),
  tableAdd: (data) => common({ url: urls.light.tableAdd, data, method: 'post' }),
  tableDelete: (data) => common({ url: urls.light.tableDelete, data, method: 'post' }),
  tableEdit: (data) => common({ url: urls.light.tableEdit, data, method: 'post' }),
  fieldsSearch: (data) => common({ url: urls.light.fieldsSearch, data, method: 'post' }),
  fieldsAdd: (data) => common({ url: urls.light.fieldsAdd, data, method: 'post' }),
  fieldsDelete: (data) => common({ url: urls.light.fieldsDelete, data, method: 'post' }),
  fieldsEdit: (data) => common({ url: urls.light.fieldsEdit, data, method: 'post' }),
  fieldsEditAll: (data) => common({ url: urls.light.fieldsEditAll, data, method: 'post' }),
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