import { Component } from 'react'

/**
 * api集合
 */
export default {
    newUserUrl: 'http://47.105.122.172:8023/',

    appUrl: 'http://test.bcrealm.com:9002/api/',
    userUrl: 'http://test.bcrealm.com:9003/api/',

    newLogin: 'user/login',//新游戏用户登录


    appLogin: 'user/login',// 用户登录ok
    getCodeUuId: 'user/getCodeUuId',//获取图片验证码唯一标识
    imgCode: 'user/imgCode',//图片验证码
    msg: 'user/back/msg',//找回密码获取手机验证码
    back: '/user/back/',//找回密码验证码验证
    backPwd: '/user/back/pwd',//修改密码


    oldLogin: 'login/appLogin',//老登录接口

    register: 'user/register',//注册ok
    sendCode: 'user/sendCode?',//获取验证码ok
    smsLogin: 'login/user/smsLogin',//短信登录ok
    uppwd: 'user/uppwd',//修改密码ok
    loginOut: 'login/loginOut',//退出登录ok

    realNameAu: 'user/realNameAu',//实名认证ok
    certificateType: 'certificateType?page=1&pageSize=10',//证件类型
    nationality: 'nationality',//国籍
    updateForApp: 'user/updateForApp',//修改用户信息(名称/性别)ok
    changeAvatar: 'user/photo/upload',//跟换头像ok
    letters: 'letters?page=1&pageSize=10',//获取指定用户的私信列表ok
    unreads: 'letters/unreads',//获取指定用户的未读私信数量ok
    upStatus: 'letters/upStatus',//修改指定用户的未读私信为已读ok

    topicList: 'topic?page=1&pageSize=10',//查询审核通过的话题ok
    sendTopic: 'topic/',//发布话题ok
    read: 'topic/read',//阅读话题

    newsList: 'news?page=1&pageSize=10',//新闻列表ok

    gameList: 'game?page=1&pageSize=10',//获取游戏列表ok
    banner: 'banner',//图集

    chatGroup: 'chatGroups/list/all', // 获取所有群列表
    joinItem: 'chatGroups/invitation/joinItem', // 加入群
    leaveChatGroup: 'chatGroups/leave', // 退出群
    groupInfo: 'chatGroups/details?', // 获取群详细信息
}