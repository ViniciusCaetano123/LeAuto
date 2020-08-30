<template>
  <div class="containerP">
      <div class="painel">
          <img src="" alt="">
      </div>      
      <div class="conteudoPrincipal">
          dasdas
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{           
        }
    },
    methods:{       
    },    
    created(){
        document.documentElement.scrollTop = 0;
    }
}
</script>

<style>
.containerP{
    margin:0 auto;
    max-width: 1160px; 
    background: #fff;
    min-height:100vh;
}
.painel{
    background-image: url('/ecdxecf/img/p.jpg');
    background-color: #AF3437;
    background-blend-mode: multiply;
    height: 55vh;
    display: flex;
    justify-content: center;
    align-items: center;   
    background-repeat: no-repeat;
}
.conteudoPrincipal{
    max-width: 1060px;
    margin:0px  auto;
}

@media only screen and (max-width: 600px) {
  .painel{
    height: 23vh;
  }  
}
</style>
