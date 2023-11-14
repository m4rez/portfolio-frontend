<template>
  <div>
    <div>
        <main-menu/>
    </div>
    <div class="py-5 text-center" style="height: 620px">
      <div class="container">
        <div class="row">
          <div class="mx-auto col-md-12">
            <h1 class="mb-3">Projekty</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-6 col-lg-4 p-4"> <img @click="unitMoverRedirect" class="img-fluid d-block mb-3 mx-auto" src="/unitmover.png" width="250" >
            <h4 class="hover-link"><b @click="unitMoverRedirect">UnitMover</b></h4>
            <p class="mb-0" >Aplikace pro společnost specializující se na výrobu fyzických serverů. Tato aplikace umožňuje zaznamenávání, ověřování, úpravu a mazání záznamů o průběhu testovacího procesu serverů. Byla vyvinuta na základě požadavků testovacího týmu a umožňuje uživatelům snadno navigovat v procesu testování a spravovat záznamy.</p>
          </div>
          <div class="col-6 col-lg-4 p-4"> <img @click="ecobazarRedirect" class="img-fluid d-block mb-3 mx-auto" src="/eshop.png" width="250" alt="Card image cap">
            <h4 class="hover-link"> <b @click="ecobazarRedirect">E-shop</b></h4>
            <p class="mb-0">Vytvořil jsem komplexní e-shop s administrátorským rozhraním. Administrátoři se mohou přihlašovat a provádět různé úkoly, včetně přidávání produktů, nahrávání fotografií a úpravy popisků. Tato aplikace usnadňuje správu e-shopu a zvyšuje jeho atraktivitu pro zákazníky.</p>
          </div>
          <div class="col-6 col-lg-4 p-4"> <router-link to="/"><img class="img-fluid d-block mb-3 mx-auto" src="/portfolio.png" width="250" ></router-link>
            <router-link to="/"><h4 class="hover-link"> <b>Portfolio</b></h4></router-link>
            <p class="mb-0"> Mým posledním projektem je mé osobní portfolio, které demonstruje dovednosti v oblasti webového vývoje a správy serverů. Použil jsem Vue.js pro interaktivní uživatelské rozhraní, spravuji vlastní VPS server s Ubuntu OS a používám Nginx pro hostování. Také jsem si vyzkoušel práci s Dockerem, doménami, DNS směrováním a SSL certifikáty pro bezpečný provoz.</p>
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
  },
  methods: {
    unitMoverRedirect(){
      window.location.href = 'https://portfolio-zezula.website/projekty/unitmover';
    },
    ecobazarRedirect(){
      window.location.href = 'https://portfolio-zezula.website/projekty/ecobazar';
    }
  }
}
</script>

<style>
.hover-link {
  color:black;
  cursor: pointer;
  position: relative;
  display: inline-block;
}

.hover-link:hover {
  text-decoration: underline;
}

/* Černá čára kolem obrázků */
.img-fluid {
  border: 1px solid rgba(0, 0, 0, 0.164);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Stín při najetí kurzorem */
}

/* Přidání stínu k obrázkům při najetí kurzorem */
.img-fluid:hover {
  width: 270px;
  cursor: pointer;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4); /* Intenzivnější stín při najetí kurzorem */
}
</style>