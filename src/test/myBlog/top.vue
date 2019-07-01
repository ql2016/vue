<template>
    <nav class="header">
        <ul>
            <li>
                <router-link to="/myBlog">博客列表</router-link>
            </li>
            <li><router-link to="/addBlog">写博客</router-link></li>
        </ul>
    </nav>
</template>
<script>
export default {
    
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


