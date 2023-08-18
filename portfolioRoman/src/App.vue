<template>
  <header class="w-full flex m-auto items-center flex-row justify-center">
    <nav class="xl:w-1/2 w-full py-4 xl:px-2 px-6 flex flex-row flex-wrap items-center justify-around font-bold xl:border-b-2">
      <a href="#inicio">{{ $t('header.inicio') }}</a>
      <a href="#trayectoria">{{ $t('header.trayectoria') }}</a>
      <a href="#proyectos">{{ $t('header.proyectos') }}</a>
      <a href="#contacto">{{ $t('header.contacto') }}</a>
      <div class="border rounded-md p-1 ml-2">
        Language:<select v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.code">
            {{ lang.text }}
          </option>
        </select>
      </div>
    </nav>
  </header>
  <div class="overflow-y-hidden">
    <router-view></router-view>
  </div>

  <!-- <p>{{ $t('main.hello') }}</p> -->
</template>

<script>
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
export default {
  setup() {
    const langs = [
      { code: 'es', text: 'Español' },
      { code: 'en', text: 'English' }
    ]
    return {
      langs
    }
  }
}
</script>
