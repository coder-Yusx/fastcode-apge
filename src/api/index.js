import {get,post} from './http'

//登录
export function login(username,password) {
  return get("sys/login/"+username+"/"+password)
}

//获取菜单
export function getMenus(){
  return get("/sys/menus")
}

//获取路由
export function getRouter(){
  return get("/sys/routers")
}
