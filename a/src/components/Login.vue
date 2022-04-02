<template>
<!--signup form content-->
    <div class="form1">
            <img src="@/assets/sign.png" alt="">
            <h1>Login Here!</h1>
            <input type="email" v-model="email" placeholder="mail"><br>
            <input type="password" v-model="password" placeholder="password"><br>
            <button v-on:click="Login">Click</button>
            <p id="redirect-link">
                <router-link to="/">&#8592; Homepage</router-link> |
            <router-link to="/SignUp">SignUp &#8594;</router-link>
            </p>
        </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'Login',
    data() {
        return {
            email:'',
            password:''
        }
    },
    methods: {
        /*get  login data from users api*/
        async Login(){
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )
            if (result.status==200 && result.data.length>0) 
        {
            alert('Login done');
            localStorage.setItem("user-info",JSON.stringify(result.data[0]))
            this.$router.push({name:'Home'})
        }
            console.warn(result);
        }
    },
    /*redirect from login to Homepage*/
    mounted() {
        let user = localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'Home'})
        }
    },
}
</script>

<style>
#redirect-link{

margin-top: 20px;
}
#redirect-link a{
    text-decoration: none;
  margin-left: 10px;

}
 @media only screen and (max-width: 600px) {
   .form1{
       width: 80%;
       height: auto;
   }
   #redirect-link a{
        display: block;
    }
}
</style>

