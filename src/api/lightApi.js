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
  easyTemplateSearch: (data) => common({ url: urls.light.easyTemplateSearch, data, method: 'post' }),
  easyTemplateAdd: (data) => common({ url: urls.light.easyTemplateAdd, data, method: 'post' }),
  easyTemplateDelete: (data) => common({ url: urls.light.easyTemplateDelete, data, method: 'post' }),
  easyTemplateEdit: (data) => common({ url: urls.light.easyTemplateEdit, data, method: 'post' }),
  routerSearch: (data) => common({ url: urls.light.routerSearch, data, method: 'post' }),
  routerAdd: (data) => common({ url: urls.light.routerAdd, data, method: 'post' }),
  routerDelete: (data) => common({ url: urls.light.routerDelete, data, method: 'post' }),
  routerEdit: (data) => common({ url: urls.light.routerEdit, data, method: 'post' }),
  tableSearch: (data) => common({ url: urls.light.tableSearch, data, method: 'post' }),
  tableAdd: (data) => common({ url: urls.light.tableAdd, data, method: 'post' }),
  tableDelete: (data) => common({ url: urls.light.tableDelete, data, method: 'post' }),
  tableEdit: (data) => common({ url: urls.light.tableEdit, data, method: 'post' }),
  fieldsSearch: (data) => common({ url: urls.light.fieldsSearch, data, method: 'post' }),
  fieldsAdd: (data) => common({ url: urls.light.fieldsAdd, data, method: 'post' }),
  fieldsDelete: (data) => common({ url: urls.light.fieldsDelete, data, method: 'post' }),
  fieldsEdit: (data) => common({ url: urls.light.fieldsEdit, data, method: 'post' }),
  fieldsEditAll: (data) => common({ url: urls.light.fieldsEditAll, data, method: 'post' }),
}

export default Api