<template>
  <div  style="padding-top: 70px;">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <p class="lead">Zadejte e-mail pro zaslání mého CV</p>
          <form class="form-inline">
            <div class="form-group"> <input type="email" class="form-control" v-model="emailName" placeholder="Váš e-mail" style=""> </div> <button @click="sendCV" class="btn btn-primary ml-3">Zaslat</button>
          </form>
        </div>
        <div class="col-5 col-md-1 align-self-center"> <a href="https://www.facebook.com/marek.zezula.1">
            <i class="fa fa-fw fa-facebook text-muted fa-2x"></i>
          </a> </div>
        <div class="col-5 col-md-1 align-self-center"> <a href="https://twitter.com/lurkerhino">
            <i class="fa fa-fw fa-twitter text-muted fa-2x"></i>
          </a> </div>
        <div class="col-5 col-md-1 align-self-center"> <a href="https://www.instagram.com/marek_zez/">
            <i class="fa fa-fw fa-instagram text-muted fa-2x"></i>
          </a> </div>
          <div class="col-5 col-md-1 align-self-center"> <a href="https://www.linkedin.com/in/marek-zezula-618094209/">
            <img src="/linkedin.png" width = 30>
          </a> </div>
      </div>
      <div class="row">
        <div class="col-md-12 mt-3 text-center">
          <p>© Copyright 2018 Pingendo - All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EmailService from '@/services/EmailService.js';

export default{
  name: 'MainFooter',
  data(){
    return{
      emailName :""
      } 
  },
  methods: {
    sendCV() {
      EmailService.sendCV(this.emailName)
      .then(response => {console.log(response),
      console.log("podarilo se")})
    }
  }
}

</script>