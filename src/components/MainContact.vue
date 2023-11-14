<template>
  <div>
    <div>
        <main-menu/>
    </div>
    <div class="py-5 text-center">
      <div class="container" style="padding-top: 70px;">
        <div class="row" >
          <div class="mx-auto p-4 col-lg-7">
            <h1 class="mb-4">Poslat e-mail</h1>
            <form>
              <div class="form-row">
                <div class="form-group col-md-6"> <input type="text" class="form-control" id="form27" v-model="emailData.name" placeholder="Jméno a Příjmení"> </div>
                <div class="form-group col-md-6"> <input type="email" class="form-control" id="form28" v-model="emailData.email" placeholder="Email"> </div>
              </div>
              <div class="form-group"> <input type="text" class="form-control" id="form29" v-model="emailData.subject" placeholder="Předmět"> </div>
              <div class="form-group"> <textarea class="form-control" id="form30" rows="3" v-model="emailData.text" placeholder="Vaše zpráva"></textarea> </div> 
              <button @click="sendEmail" class="btn btn-primary">Poslat</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div>
      <main-footer/>
    </div>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue';
import MainFooter from '@/components/MainFooter.vue';
import EmailService from '@/services/EmailService.js';

export default {
  components: {
    MainMenu,
    MainFooter
  },
  name: 'MainContact',
  data(){
    return{
      emailData :{
        name: "",
        email: "",
        subject:"",
        text: ""
      } 
    }
  },
  methods: {
    sendEmail(){
      EmailService.sendEmail(this.emailData)
      .then(response => {console.log(response)})
    }
  }
}
</script>