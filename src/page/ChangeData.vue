<template>
    <main>
        <div>
            性別：<input type="radio" name="sex" value="male" v-model="newData.sex">男
            <input type="radio" name="sex" value="female" v-model="newData.sex">女
        </div>
        <div>
            地址：<input type="text" v-model="newData.address">
        </div>
        <div>
            手機：<input type="text" v-model="newData.phone">
        </div>
        <div>
            電子郵箱：<input type="email" v-model="newData.email">
        </div>
        <div style="display: flex;">
            <button :disabled="btnProhibited" type="submit" @click="submitData">送出</button>
            <button style="margin-left: 10px;" @click="returnCurSet">取消變更</button>
        </div>
    </main>
</template>

<script>

export default {
    props: ['settingData'],
    data() {
        return {
            newData: {
                address: this.settingData.address,
                phone: this.settingData.phone,
                email: this.settingData.email,
                sex: this.settingData.sex,
            },
            // showData: false,
            btnDisable: true

        }
    },
    methods: {
        returnCurSet() {
            // this.showData = false
            this.$emit('returnCurSet')
        },
        submitData() {
            // this.showData = false
            this.$emit('submitData', this.newData)
        }

    },
    computed: {
        btnProhibited() {
            const anyFieldEmpty =
                !this.newData.address || !this.newData.phone || !this.newData.email;

            const anyDataChanged =
                this.newData.address !== this.settingData.address ||
                this.newData.phone !== this.settingData.phone ||
                this.newData.email !== this.settingData.email ||
                this.newData.sex !== this.settingData.sex;

            if (anyFieldEmpty || !anyDataChanged) {
                return true
            } else {
                return false
            }
        }
    }

}
</script>

<style scoped>
div {
    margin-bottom: 10px;
}
</style>