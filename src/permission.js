import router from '~/router/index'
import {  getToken } from '~/composables/auth'
import { toast,showFullloading,hideFulloading  } from '~/composables/util'
import store from '~/store'

// 全局前置守卫 async 异步操作
router.beforeEach ( async (to, from, next) => {
    // to 是即将到达的路径  from 是源路径 从哪个哪个路径来

    // 显示 loading 
    showFullloading()

    const token = getToken()

    // 没有登录强制跳转登录页
    if(!token && to.path != "/login"){
        toast("请先登录","error")
        return next({path: "/login"})
    } 

    // 放置重复登录
    if (token && to.path == "/login"){
        toast("请勿重复登录","warning")
        return next({path:from.path ? from.path : "/" })
    }
    

    //  如果用户登录了，自动获取用户信息，并存储在vuex当中
    if (token) { // await 异步操作
        await store.dispatch("getinfo")
    }

    // 设置页面标题
    let title = (to.meta.title ? to.meta.title : "404页面") + "-tqtcloud"
    document.title = title

    next()
})


// 全局后置守卫
router.afterEach((to, from) => {
    hideFulloading()
})