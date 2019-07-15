<template>
    <div class="users">
        <nav class="header">
            <ul>
                <li>
                    <router-link to="/users">用户列表</router-link>
                </li>
                <li>
                    <router-link to="/addUser">添加用户</router-link>
                </li>
            </ul>
        </nav>
        <router-view />
    </div> 
</template>
<script>
export default {
    data() {
        return {

        }
    },
    created() {
    },
    methods: {
    },
}
</script>
<style scoped>
    .header ul{
        display: flex;
    }
    .header li {
        width: 1.5rem;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        background: #eee;
        margin: 0 0.2rem 0 0;
    }
    .header li a{
        /* color: #000; */
        text-decoration: none;
    }
</style>


