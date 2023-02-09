<template>
    <div>
        后台首页
        <el-button round  type="primary" @click="get">读取</el-button>
        <el-button round  type="primary" @click="set">设置</el-button>
        <el-button round  type="primary" @click="remove">删除</el-button>
    </div>
</template>


<script setup>
import { useCookies } from '@vueuse/integrations/useCookies'
const cookies =  useCookies()

function get() {
    console.log(cookies.get("admin-token"));
}

function set() {
    cookies.set("admin-token","12345")
}

function remove() {
    cookies.remove("admin-token")
}
</script>