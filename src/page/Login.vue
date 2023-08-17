<template>
    <form @submit.prevent="submitForm">
        <div class="username">
            用戶名：<input type="text" v-model="$store.state.userName">
        </div>
        <div class="password">
            密碼：<input type="password" v-model="$store.state.passWord">
        </div>
        <div class="button">
            <button :disabled="btnDisable">登入</button>
        </div>
        <p v-if="$store.state.correct">用戶名或密碼錯誤</p>
    </form>
</template>
<script>
export default {
    emits: ['submitForm'],
    data() {
        return {
            isBtnDisable: true,
            // userName: '',
            // passWord: '',
            // formIsValid: true,
            // mode: '登入',

        }
    },
    computed: {
        btnDisable() {
            if (this.$store.state.userName && this.$store.state.passWord) {
                return this.isBtnDisable === false
            } else {
                return this.isBtnDisable === true
            }
        },


    },
    methods: {
        submitForm() {
            this.$store.commit('isLogin')
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
