<template>
    <form @submit.prevent="submitForm">
        <div class="username">
            用戶名：<input type="text" v-model="userName">
        </div>
        <div class="password">
            密碼：<input type="password" v-model="passWord">
        </div>
        <div class="button">
            <button :disabled="btnDisable">登入</button>
        </div>
        <p v-if="correct">用戶名或密碼錯誤</p>
    </form>
</template>
<script>
export default {
    // emits: ['submitForm'],
    data() {
        return {
            userName: '',
            passWord: '',
            correct: false,
        }
    },
    computed: {
        btnDisable() {
            if (this.userName && this.passWord) {
                return false
            } else {
                return true
            }
        },


    },
    methods: {
        submitForm() {
            if (this.userName === 'anna' && this.passWord === 'anna001114') {
                this.$store.commit('isLogin')
                this.correct = false;
                this.$router.push({ name: 'home' });
            } else {
                this.correct = true;
            }
        },
    }
}

</script>
<style scoped>
p {
    margin: 2% 0 0 3%;
    color: red
}

.username {
    margin: 2% 0 0 2%
}

.password {
    margin: 1% 0 0 2.8%;
}

.button {
    margin: 1% 0 0 12.2%
}
</style>
