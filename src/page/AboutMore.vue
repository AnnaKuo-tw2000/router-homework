<template>
    <div class="sidebar">
        <ul>
            <li><router-link :to="{ name: 'introduction' }">簡介</router-link></li>
            <li><router-link :to="{ name: 'author' }">作者</router-link></li>
            <li><router-link :to="{ name: 'background' }">背景</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<style scoped>
p {
    margin: 2% 0 0 3%
}

ul {
    min-width: 5%;
    height: 100vh;
    padding-top: 1%;
    text-align: center;
    background-color: #faf3e7;
}

li {
    cursor: pointer;
    height: 57px;
}



a {
    color: #b8860b;
    text-decoration: none;
    display: inline-block;
    padding: 20px 20px;
    width: 100%;
    border-right: 3px solid transparent;
}

a.router-link-exact-active {
    border-right: 3px solid rgb(204, 183, 151);

}

li:hover {
    background-color: #eedcaf;
}

.sidebar {
    display: flex;
}
</style>