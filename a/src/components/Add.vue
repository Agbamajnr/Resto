<template>
<div>
 <Header/>
    <h1> Add Resturant page</h1>
    <form class="form1" style="height:400px">
        <img src="@/assets/sign.png" alt="">
    <input type="text" name="name" v-model="resturant.name" placeholder="Enter name"><br>
    <input type="text" name="contact" v-model="resturant.contact" placeholder="Enter Contact"><br>
    <input type="text" name="address" v-model="resturant.address" placeholder="Enter Address">
    <button type="button" v-on:click="addResturant">Add New Resturant</button>
    </form>
</div>
</template>

<script>
import Header from '../components/Header.vue'
import axios from 'axios'

export default {
    name: 'Add',
    components:{Header},
    data() {
        return {
            name:'',
            resturant:{
                 name:'',
                 address:'',
                 contact:''
            },
           
        }
    },
    methods: {
        async addResturant(){
            console.warn(this.resturant);
            const result= await axios.post("http://localhost:3000/resturant",{
                name:this.resturant.name,
                contact:this.resturant.contact,
                address:this.resturant.address
            });
            if (result.status==201) {
                 this.$router.push({name:'Home'})
            }
            console.warn(result);
        }
    },
   mounted() {
       let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:'SignUp'})
       }
    },
}
</script>

<style scoped>
 @media only screen and (max-width: 600px) {
   form{
       width: 80%;
       height: auto;
   }
}
</style>





