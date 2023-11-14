<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <div class="container"> 
      <router-link to="/" class="navbar-brand" href="#">
        <i class="fa d-inline fa-lg fa-stop-circle"></i>
        <b> Marek Zezula</b>
      </router-link>
        <button class="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item"> <router-link to="/" class="nav-link" href="#">O mně</router-link> </li>
          <li class="nav-item"> <router-link to="/projekty" class="nav-link" href="#">Projekty</router-link> </li>
          <li class="nav-item"> <router-link to="/dovednosti" class="nav-link" href="#">Dovednosti</router-link> </li>
        </ul> <router-link to="/kontakt" class="btn navbar-btn ml-md-2 btn-light text-dark">Kontakt</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
</script>
