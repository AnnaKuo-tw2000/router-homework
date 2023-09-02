<template>
    <main style="padding:30px;">
        <div style="display:flex;flex-wrap:wrap;gap:20px 20px;margin-bottom: 30px;" v-show="!showDataChange">
            <CatCard v-for="cats in catList" :key="cats.id" :cats="cats" @checkboxChanged="updateSelectedCats" />
        </div>
        <button v-show="!showDataChange" @click="showDataChange = true">變更地址</button>
        <div v-show="showDataChange">
            <div>新地址：<input v-model="catNewAddress" /></div>
            <button @click="changeAddress" style="margin-right:10px">送出</button>
            <button @click="showDataChange = false">取消變更</button>
        </div>
    </main>
</template>

<script>
import CatCard from '../component/CatCard.vue'

export default {
    components: {
        CatCard
    },
    data() {
        return {
            catList: [
                { id: 1, name: '大白', birth: '2020/10/11', des: '我是胖胖大白貓，我欺軟怕硬，最愛欺負小貓', address: 'A' },
                { id: 2, name: '紅紅', birth: '2019/4/9', des: '請叫我瘦弱紅紅，貓中一隻花，曾經也是众星拱月，直到我被絕了育QQ', address: 'B' },
                { id: 3, name: '黑仔', birth: '2022/10/29', des: '酷酷黑仔就是我，別隨便摸我，誰惹我我跟誰急', address: 'C' },
                { id: 4, name: '小黃', birth: '2023/1/23', des: '我明明毛色不黃，但不知道為什麼大家叫我小黃，可能我比較性感吧:D。大白我還在講話你不要弄我', address: 'D' },
                { id: 5, name: '阿花', birth: '2021/11/14', des: '我最漂亮了，皮膚Q彈白亮，摸過的都說好', address: 'E' }
            ],
            catNewAddress: '',
            showDataChange: false,
            selectedCatIds: [],


        }
    },
    methods: {
        changeAddress() {
            if (!this.catNewAddress) {
                this.showDataChange = false
            } else {
                this.catList.forEach(cur => {
                    if (this.selectedCatIds.includes(cur.id)) {
                        cur.address = this.catNewAddress;
                    }
                })
            }

            this.selectedCatIds = [];
            this.showDataChange = false;

            // console.log(this.selectedCatIds)
        },
        updateSelectedCats(catId, check) {
            if (check === true) {
                this.selectedCatIds.push(catId)
            } else {
                const index = this.selectedCatIds.indexOf(catId);
                this.selectedCatIds.splice(index, 1)
            }
            console.log(this.selectedCatIds)
            console.log(check)
        }

    }


}
</script>