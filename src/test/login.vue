<template>
    <div class="login">
        <ul>
            <li>用户名：<input type="text"></li>
            <li>密码：<input type="text"></li>
        </ul>
        <button>登录</button>
    </div>
</template>
<script>
export default {
    created() {
        fetch("/apis/test/testToken.php",{
            method: "post",
            headers: {
                token: "f4c902c9ae5a2a9d8f84868ad064e706"
            },
            body: JSON.stringify({username:'wrw',password:'321321'})
        })
        .then(result => {
            return result.json()
        })
        .then(data => {
            console.log(data)
        })

        this.$axios.post("/apis/test/testToken.php",{
            username:'wrw',password:'321321'
        })
    }
}
</script>

