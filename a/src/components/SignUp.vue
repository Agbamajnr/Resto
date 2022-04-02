<template>
    <div>
        <div class="form1">
            <img src="@/assets/sign.png" alt="">
            <h2>{{head}}</h2>
            <input type="text" v-model="name" placeholder="Name"><br>
            <input type="email" v-model="email" placeholder="mail"><br>
            <input type="password" v-model="password" placeholder="password"><br>
            <button @click="SignUp">Click</button>
            <p id="redirect-login">Have an account?<router-link to="/Login">Login &#8594;</router-link></p>
            <p id="redirect-link">
                <router-link to="/">&#8592; Homepage</router-link> 
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'SignUp',
    data() {
    return {
      head: 'SignUp !',
      name: '',
      email:'',
      password:''
    }
  },
  methods: {
     async SignUp()
     {
         let result = await axios.post(" http://localhost:3000/users", {
             email:this.email,
             password:this.password,
             name:this.name
         });
        console.warn(result);
        if (result.status==201) 
        {
            alert('Signup done');
            localStorage.setItem("user-info",JSON.stringify(result.data))
            this.$router.push({name:'Home'})
        }
      }
  },
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
body{
    
     background: #010010;
}
#redirect-link{

margin-top: 20px;
}
#redirect-link a{
    text-decoration: none;
  margin-left: 10px;

}
#redirect-login{
    margin-top: 5px;
}
#redirect-login a{
    text-decoration: none;
    color: orangered;
    margin: 2px;
}
#redirect-login a:hover{
    color: blue;
}
 @media only screen and (max-width: 600px) {
    #redirect-link a{
        display: block;
    }
 }


</style>

