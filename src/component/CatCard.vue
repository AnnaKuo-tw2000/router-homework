<template>
    <div class="cardBox">
        <span style="font-weight: bold;">{{ cats.name }}</span>
        <input type="checkbox" @change="checkboxChanged" />
        <p>年齡：{{ computedAge }}</p>
        <p>描述：{{ cats.des }}</p>
        <p>住址：{{ cats.address }}</p>
    </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
    props: ['cats',],
    data() {
        return {

        }
    },
    methods: {
        checkboxChanged(e) {
            this.$emit('checkboxChanged', this.cats.id, e.target.checked)

        },


    },
    computed: {
        computedAge() {
            const now = dayjs(new Date());
            const ageOfCat = dayjs(this.cats.birth);

            if (now.diff(ageOfCat, 'month') > 12) {
                return now.diff(ageOfCat, 'year') + `歲`
            } else {
                return now.diff(ageOfCat, 'month') + `個月大`
            }


        }
    }
}
</script>
<style scoped>
.cardBox {
    width: 350px;
    border: 1px solid rgb(179, 80, 9);
    padding: 40px;
    border-radius: 100px;
    transition: all 1s cubic-bezier(.01, .31, .74, .66);
    box-shadow: 0 3px 3px #8e3f07;
    background-color: #fbfaf8;
    line-height: 2;
    color: rgb(112, 50, 6);
}

.cardBox:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 5px #8e3f07;

}
</style>