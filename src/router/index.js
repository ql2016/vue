import Vue from 'vue';
//import Router from 'vue-router';
import trialIndex from '@/view/trialIndex';
import activity from '@/view/activity';
import report from '@/view/report';
import myTrial from '@/view/myTrial';
import rule from '@/view/rule';
import notice from '@/view/notice';
import ranking from '@/view/ranking';
import test from '@/test/test';
import address from '@/test/address';
import uploader from '@/test/uploader';
import login from '@/test/login';
import register from '@/test/register';
import addBlog from '@/test/myBlog/add';
import blogList from '@/test/myBlog/list';
import detailBlog from '@/test/myBlog/detailBlog';
import users from '@/test/userManage/index';
import userList from '@/test/userManage/list';
import addUser from '@/test/userManage/add';
import detailUser from '@/test/userManage/detailUser';

//Vue.use(Router);

export default [
    {
        path: '/',
        name: 'trialIndex',
        component: trialIndex,
    },
    {
        path: '/activity',
        name: 'activity',
        component: activity,
    },
    {
        path: '/report',
        name: 'report',
        component: report,
    },
    {
        path: '/myTrial',
        name: 'myTrial',
        components: {
            default: ranking,
            login,
            register
        }
    },
    {
        path: '/test',
        name: 'test',
        component: test,
        redirect: '/address',
        children: [
            {
                path: '/address',
                name: 'address',
                component: address,
            },
            {
                path: '/uploader',
                name: 'uploader',
                component: uploader,
                // beforeEnter: (to,from,next) => { //路由独享的守卫
                //     alert('请先登录');
                //     next('./login')
                // }
            },
            {
                path: '/login',
                name: 'login',
                component: login,
            },
            {
                path: '/register',
                name: 'register',
                component: register,
            },
        ]
    },
    {
        path: '/myBlog',
        name: 'myBlog',
        component: blogList
    },
    {
        path: '/addBlog',
        name: 'addBlog',
        component: addBlog
    },
    {
        path: '/blog/:id',
        name: 'detailBlog',
        component: detailBlog
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: addBlog
    },
    {
        path: '/users',
        name: 'users',
        component: users,
        redirect: '/users',
        children: [
            {
                path: '/users',
                name: 'userList',
                component: userList,
            },
            {
                path: '/addUser',
                name: 'addUser',
                component: addUser,
            },
            {
                path: '/user/:id',
                name: 'detailUser',
                component: detailUser
            },
            {
                path: '/editUser/:id',
                name: 'editUser',
                component: addUser
            }
        ]
    }
]
