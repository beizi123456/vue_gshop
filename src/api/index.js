/*
    包含n个接口请求函数的模块
*/

import ajax from "./ajax";


// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// [2、获取食品分类列表](#2获取食品分类列表)
export const reqFoodTypes = () => ajax(`/index_category`)
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)
export const reqShops = (longitude, latitude) => ajax(`/shops`, { latitude, longitude })
// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)
export const searchShops = (geohash, keyword) => ajax(`/search_shops`, { geohash, keyword })
// [5、获取一次性验证码](#5获取一次性验证码)
export const captcha = () => ajax(`http://localhost:3000/captcha`)
// [6、用户名密码登陆](#6用户名密码登陆)
export const loginPwd = (name, pwd, captcha) => ajax(`/login_pwd`, { name, pwd, captcha }, 'POST')
// [7、发送短信验证码](#7发送短信验证码)
export const sendCode = (phone) => ajax(`/sendcode`, { phone })
// [8、手机号验证码登陆](#8手机号验证码登陆)
export const loginSms = (phone, code) => ajax(`/login_sms`, { phone, code }, 'POST')
// [9、根据会话获取用户信息](#9根据会话获取用户信息)
export const userInfo = () => ajax(`/userinfo`)
// [10、用户登出](#10用户登出)
export const logOut = () => ajax(`/logout`)


