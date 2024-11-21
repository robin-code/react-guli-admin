import ajax from './ajax'


// 登陆
/*
export function reqLogin(username, password) {
  return ajax('/login', {username, password}, 'POST')
}*/
export const reqLogin = (username, password) => ajax('/api/login', {username, password}, 'POST')

export const reqCategory = (parentCode) => ajax('/api/category/list', {parentCode})

export const reqAddCategory = (name, code, parentCode) => ajax('/api/category/', {
    name,
    code,
    parentCode
}, 'POST')

export const reqDeleteCategory = (id) => ajax(`/api/category/${id}`, {}, 'DELETE');
/**
 * 更新产品分类
 */
export const reqUpdateCategory = (id, name, code, parentCode) => ajax(`/api/category/${id}`, {
    name,
    code,
    parentCode
}, 'PUT');


/**
 * 分页查询产品
 * @param page
 * @param size
 * @param searchName
 * @param searchType
 */
export const reqSearchProducts = ({page, size, searchName, searchType}) => ajax('/api/product/page', {
    page,
    size,
    [searchType]: searchName,
})