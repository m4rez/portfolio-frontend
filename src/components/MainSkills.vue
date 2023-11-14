<template>
<div>
  <div>
    <main-menu/>
  </div>
  <div class="py-1 pt-5" style="">
    <div class="container">
      <div class="row">
        <div class="text-center mx-auto col-md-12">
          <h1>Dovednosti</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6 p-4">
          <div class="card bg-light text-center">
            <div class="card-body p-4">
                <img src="/spring-boot.png" width="70px" height="70px">
              <hr>
              <ul class="list-unstyled my-3">
                <li class="mb-1">
                    <h3>SpringBoot</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 p-4">
          <div class="card bg-light text-center">
            <div class="card-body p-4">
                <img src="/vue-js.png" width="70px" height="70px">
              <hr>
              <ul class="list-unstyled my-3">
                <li class="mb-1">
                    <h3>Vue.js</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 p-4">
          <div class="card bg-light text-center">
            <div class="card-body p-4">
                <img src="/rest-api.png" width="70px" height="70px">
              <hr>
              <ul class="list-unstyled my-3">
                <li class="mb-1">
                    <h3>REST API</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 p-4">
          <div class="card bg-light text-center">
            <div class="card-body p-4">
                <img src="/nginx.png" width="70px" height="70px">
              <hr>
              <ul class="list-unstyled my-3">
                <li class="mb-1">
                    <h3>Nginx</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-1" style="">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 p-4">
          <div class="card bg-light text-center">
            <div class="card-body p-4">
                <img src="/github.png" width="70px" height="70px">
              <hr>
              <ul class="list-unstyled my-3">
                <li class="mb-1">
                    <h3>GitHub</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 p-4">
          <div class="card bg-light text-center">
            <div class="card-body p-4">
                <img src="/docker.png" width="70px" height="70px">
              <hr>
              <ul class="list-unstyled my-3">
                <h3>Docker</h3>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 p-4">
          <div class="card bg-light text-center">
            <div class="card-body p-4">
                <img src="/sql-server.png" width="70px" height="70px">
              <hr>
              <ul class="list-unstyled my-3">
                <li class="mb-1">
                    <h3>MSSQL</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 p-4">
          <div class="card bg-light text-center">
            <div class="card-body p-4">
                <img src="/mysql.png" width="70px" height="70px">
              <hr>
              <ul class="list-unstyled my-3">
                <li class="mb-1">
                    <h3>MySQL</h3>
                </li>
              </ul>
            </div>
          </div>
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