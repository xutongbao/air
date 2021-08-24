import { baseURL } from '../utils/config'

const urls = {
  testUpload: baseURL + '/api/upload', //不是axios发起的请求，需要特殊处

  templateSearch: '/api/template/search',
  templateAdd: '/api/template/add',
  templateDelete: '/api/template/delete',
  templateEdit: '/api/template/edit',
  easyTemplateSearch: '/api/easyTemplate/search',
  easyTemplateAdd: '/api/easyTemplate/add',
  easyTemplateDelete: '/api/easyTemplate/delete',
  easyTemplateEdit: '/api/easyTemplate/edit',  
  routerSearch: '/api/router/search',
  routerAdd: '/api/router/add',
  routerDelete: '/api/router/delete',
  routerEdit: '/api/router/edit',
  tableSearch: '/api/table/search',
  tableAdd: '/api/table/add',
  tableDelete: '/api/table/delete',
  tableEdit: '/api/table/edit',
  fieldsSearch: '/api/fields/search',
  fieldsAdd: '/api/fields/add',
  fieldsDelete: '/api/fields/delete',
  fieldsEdit: '/api/fields/edit',
  fieldsEditAll: '/api/fields/editAll',
}

export default urls