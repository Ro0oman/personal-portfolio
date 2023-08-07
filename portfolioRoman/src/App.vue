<template>
  <header>
    <nav>
      <!-- <router-link :to="{ name: 'trayectoria' }">
        <div>Mi Trayectoria</div>
      </router-link> -->
    </nav>
  </header>
    <div class="overflow-y-hidden">
      <router-view></router-view>
      <Trayectoria/>
    </div>

  
</template>

<script>
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
export default {
  
}
</script>

