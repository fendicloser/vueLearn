<template>
  <div id="app">
    <div id="nav">
      <router-link to='/goodSelection'>商品选择</router-link> |
      <router-link to='/new'>newValue</router-link> |
      <router-link to="/">Hodme</router-link> |
      <router-link to="/about">Afut</router-link> |
      <button @click="goback">hahha</button>
   
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
    methods:{
      goback:function(){
        this.$router.push({path:'/goodSelection'})
      }
    }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
