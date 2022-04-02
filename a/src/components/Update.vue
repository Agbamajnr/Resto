<template>
<div>
    <Header/>
    <h1>My Update page</h1>
       <form class="form1" style="height:400px">
           <img src="@/assets/sign.png" alt="">
    <input type="text" name="name" v-model="resturant.name" placeholder="Enter name"><br>
    <input type="text" name="contact" v-model="resturant.contact" placeholder="Enter Contact"><br>
    <input type="text" name="address" v-model="resturant.address" placeholder="Enter Address">
    <button type="button" v-on:click="UpdateResturant">Update Resturant</button>
    </form>
</div>  
</template>

<script>
import Header from "../components/Header.vue"
import axios from 'axios'

export default {
    name:'Update',
    components:{
        Header
    },
    data() {
        return {
            resturant:{
                 name:'',
                 address:'',
                 contact:''
            },
           
        }
    },
    methods: {
        async UpdateResturant(){
            console.warn(this.resturant)
            const result = await axios.put(" http://localhost:3000/resturant/" +this.$route.params.id,{
                name:this.resturant.name,
                contact:this.resturant.contact,
                address:this.resturant.address
            });
             if (result.status==200) {
                 this.$router.push({name:'Home'})
            }
            
        }
    },
    async mounted() {
       let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:'SignUp'})
       }
       const result = await axios.get("http://localhost:3000/resturant/" + this.$route.params.id)
      // console.warn(this.$route.params.id);
    //  console.warn(result);
      this.resturant=result.data
    },

}
</script>

