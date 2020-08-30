<template>
  <div id="app">
            <div class="container-fluid" style="background:#fff;margin-bottom:20px;">
    <div class="container" style="padding-left:0px;max-width:1180px;">
    <nav  style="padding-left:0px;">
      <div class="navAjs"  >
          <a  href="https://www.lefisc.com.br"> <img src="https://www.lefisc.com.br/imagens/logoOriginal.jpg" style="width:115px;height:27px;margin-left:10px;"></a>
          <p>Troca Nome</p>
      </div>
    </nav>
    </div>
    </div> 
    <br>
    <router-view  />
  </div>
</template>

<script>


export default {
  name: 'App',
 
}
</script>

<style>
.navAjs{
  display:flex;height:60px;align-items: center;
}
#app {
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.navAjs p{
  position: relative;
  margin-left:24px;
  color: #383838;
  font-size: 20px !important;
font-weight: 600 !important;
margin-top: 15px;

}
.navAjs p::before{
  content: "";
  position: absolute;
  height: 25px;
  width: 1px;
  top:3px;
  left: -14px;
  background: grey;
}
li{
  position: relative;
}
li.active a{
  color: #383838;
}
li.active a::after{
  content: '';
  position: absolute;
  left:-3px;
  top:13px;  
  width: 1px;
  height: 25px;
  background: #000;
  border-left: .7px solid grey;
}
</style>
