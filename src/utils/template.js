// 全局替换一次  template
// 替换完复制，不要保存，以后还要使用

const Api = {
  //#region 列表
  templateSearch: (data) => common({ url: urls.light.templateSearch, data, method: 'post' }),
  templateAdd: (data) => common({ url: urls.light.templateAdd, data, method: 'post' }),
  templateDelete: (data) => common({ url: urls.light.templateDelete, data, method: 'post' }),
  templateEdit: (data) => common({ url: urls.light.templateEdit, data, method: 'post' }),
  templateUp: (data) => common({ url: urls.light.templateUp, data, method: 'post' }),

  //#endregion
}

const urls = {
  //#region 列表
  templateSearch: '/api/template/search',
  templateAdd: '/api/template/add',
  templateDelete: '/api/template/delete',
  templateEdit: '/api/template/edit',
  templateUp: '/api/template/up',
  //#endregion
}