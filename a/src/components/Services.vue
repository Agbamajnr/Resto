<template> 
<div style="margin-top:100px;">
  <h1>Resto Services</h1>
<div class="container">
<div class="card">
  <img src="@/assets/data.svg" alt="advert">
  <p>Manage Restaurant data</p>
</div>
<div class="card">
  <img src="@/assets/chef.svg" alt="advert">
  <p>List Restaurant</p>
</div>
<div class="card">
  <img src="@/assets/advert.svg" alt="advert">
  <p>Adverts and Reconmendations</p>
</div>
</div>
</div>
</template>

<script>
export default {
    name:'Services'
}
</script>

<style scoped>
.container{
  width: 100%;
  height: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.card{
  width: 25%;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}
.card img{
  width: 200px;
  height: 200px;
}
 @media only screen and (max-width: 600px) {
    .container{
      display: block;
    }
    .card{
      width: 90%;
      align-items: center;
      margin-top: 10px;
      margin-left: 20px;
    }
 }
</style>

