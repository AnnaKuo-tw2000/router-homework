<template>
    <header>
        <ul>
            <li @click="navToHome">首頁</li>
            <li @click="navToAbout">關於</li>
            <li @click="checkLogin">個人</li>
            <li @click="navToSet">設定</li>
            <li @click="navToLogin">{{ switchCaption }}</li>
        </ul>
    </header>
    <main>
        <router-view></router-view>
    </main>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        navToHome() {
            this.$router.push({ name: 'home' })
        },
        navToAbout() {
            this.$router.push({ name: 'about' })
        },
        navToLogin() {
            this.$router.push({ name: 'login' })
        },
        navToSet() {
            this.$router.push({ name: 'setting' })
        },
        checkLogin() {
            if (this.$store.state.formIsValid === false) {
                window.alert('請先登入')
                this.$router.push({ name: 'login' })
            } else {
                this.$router.push({ name: 'personal' })

            }
        }

    },
    computed: {
        switchCaption() {
            return this.$store.state.formIsValid ? '登出' : '登入';
        }
    }
}

</script>

<style scoped>
ul {
    display: flex;
    background-color: rgb(248, 217, 222);
}

li {
    width: 80px;
    padding: 1%;
    margin-left: 10px;
    cursor: pointer;
    text-align: center
}

li:active,
li:focus {
    color: rgb(255, 85, 0);
    border-bottom: 3px solid rgb(255, 85, 0);
}
</style>