import ajax from './ajax'


// 登陆
/*
export function reqLogin(username, password) {
  return ajax('/login', {username, password}, 'POST')
}*/
export const reqLogin = (username, password) => ajax('/api/login', {username, password}, 'POST')
