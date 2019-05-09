<template>
    <div>
        {{myCount}}
        <button @click="add">+</button>
        <button @click="subAdd">-</button>
        <p>{{count}}</p>
        <button @click="clear">清零</button>
    </div>
</template>
<<script>
export default {
    data(){
        return {
            myCount:this.$store.getters.count
        }
    },
    computed:{
        count(){
            return this.$store.getters.count
        }
    },
    methods:{
        add(){
            this.$store.dispatch('addCountAsync')
        },
        subAdd(){
            this.$store.commit('subAddCount')
        },
        clear(){
            this.$store.commit('clearCount')
        }
    }
}
</script>
