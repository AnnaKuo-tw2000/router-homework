<template>
    <main style="padding:30px">
        <template v-if="!showDataChange">
            <h3>我的當前設定：</h3>
            <div style="margin-bottom:20px">
                <div>性別：{{ settingData.sex === 'male' ? '男' : '女' }}</div>
                <div>地址：{{ settingData.address }}</div>
                <div>手機：{{ settingData.phone }}</div>
                <div>電子郵箱：{{ settingData.email }}</div>
            </div>
            <div><button @click="showDataChange = true">變更資料</button></div>
        </template>
        <ChangeData v-else :settingData="settingData" @returnCurSet="returnCurSet" @submitData="submitData" />
    </main>
</template>

<script>
import ChangeData from '../component/ChangeData.vue';
export default {
    components: {
        ChangeData
    },
    data() {
        return {
            showDataChange: false,
            settingData: {
                sex: "male",
                address: "台中市高山區大通街25號",
                phone: "0900000000",
                email: "ttt@gmail.com",
            }
        }
    },
    methods: {
        returnCurSet() {
            this.showDataChange = false
        },
        submitData(newData) {
            this.showDataChange = false
            this.settingData = newData

        }
    }
}
</script>