<template>
  <div>
    <div>
        <main-menu/>
    </div>
    <div class="py-2">
      <div class="container">
        <div class="row">
          <div class="col-md-5 order-2 order-md-1"> <img src="@/assets/images/asdfdd-transformed.png" class="small-image"> </div>
          <div class="px-md-5 col-md-6 d-flex flex-column align-items-start justify-content-center order-1 order-md-2" style="padding-top: 60px; padding-left: 50px;">
            <h1>O mně</h1>
            <p class="mb-3">Jsem nadšený programátor s dvouletými zkušenostmi v oboru. Své dovednosti jsem získal prostřednictvím samostudia a praktických projektů, ve více programovacích jazycích, včetně Javy a JavaScriptu.</p> 
            <router-link to="/projekty"><button class="btn btn-primary mb-3" href="#">Projekty</button></router-link>
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

export default {
  components: {
    MainMenu,
    MainFooter
  }
}
</script>

<style>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* Set the desired maximum width and height */
  max-width: 300px;
  max-height: 200px;
}

.small-image {
  /* Ensure the image retains its aspect ratio */
  max-width: 100%;
  max-height: 100%;
}
</style>