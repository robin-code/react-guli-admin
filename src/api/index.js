import ajax from './ajax'


const BASE = 'http://localhost:5173'
// 登陆
/*
export function reqLogin(username, password) {
  return ajax('/login', {username, password}, 'POST')
}*/
export const reqLogin = (username, password) => ajax(BASE + '/api/login', {username, password}, 'POST')
