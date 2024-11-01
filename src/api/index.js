import ajax from './ajax'


const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// 登陆
/*
export function reqLogin(username, password) {
  return ajax('/login', {username, password}, 'POST')
}*/
export const reqLogin = (username, password) => ajax(BASE_URL + '/api/login', {username, password}, 'POST')
