<template>
<router-view/>
</template> 

<script>
import SignUp from './components/SignUp.vue'


export default {
  name: 'App',
  components: {
    SignUp,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  
}
body{
  margin: 0;
  background: #ddd;
}
.form1{
    width: 450px;
    height: 480px;
    margin-left: auto;
    margin-right: auto;
    background: #fff;
    border-radius: 8px;
    color: #010010;
    margin-top: 5%;
}
.form1 img{
 width: 200px;
 height: 100px;
}
.form1 input{
    width: 80%;
    height: 40px;
    margin-top: 15px;
    border: 2px solid skyblue;
    border-radius: 6px;
    padding-left: 10px;
}
.form1 button{
    margin-top: 18px;
    width: 80%;
    height: 40px;
    background: skyblue;
    outline: none;
    border: none;
    border-radius: 6px;
}
</style>
