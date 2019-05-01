<template>
    <div>
        <h1>{{goodsSelectionTitle}}</h1>
        <div id="good">
            <div>
                <router-link to='/goodSelection/laptop' >电脑</router-link><br>
                <router-link to='/goodSelection/watch' >手表</router-link><br>
                <router-link to='/goodSelection/phone' >手机</router-link><br>
                <router-link to='/goodSelection/shoes' >鞋子</router-link><br>
            </div>
            <div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'goodsSelection',
    data(){
        return {
            goodsSelectionTitle:'请选择你的商品'
        }
    }
}
</script>
<style scoped>
    #good {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

</style>

