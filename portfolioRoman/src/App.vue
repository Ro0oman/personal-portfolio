<template>
  <!-- <router-link :to="{ name: 'trayectoria' }">
        <div>Mi Trayectoria</div>
      </router-link> -->
  <header class="w-full flex m-auto items-center flex-row justify-center">
    <nav class="xl:w-1/2 py-4 px-2 flex flex-row items-center justify-between font-bold">
      <a href="#inicio">Inicio</a>
      <a href="#trayectoria">Trayectoria</a>
      <a href="#proyectos">Proyectos</a>
      <a href="#contacto">Contacto</a>
    </nav>
  </header>
    <div class="overflow-y-hidden">
      <router-view></router-view>
    </div>

  
</template>

<script>
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
export default {
  
}
</script>

