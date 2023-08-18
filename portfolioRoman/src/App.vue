<template>
  <header class="w-full flex m-auto items-center flex-row justify-center">
    <nav class="xl:w-1/2 w-full py-4 xl:px-2 px-6 flex flex-row flex-wrap items-center justify-around font-bold xl:border-b-2">
      <a href="#inicio">{{ $t('header.inicio') }}</a>
      <a href="#trayectoria">{{ $t('header.trayectoria') }}</a>
      <a href="#proyectos">{{ $t('header.proyectos') }}</a>
      <a href="#contacto">{{ $t('header.contacto') }}</a>
      <div class="p-1 ml-2 flex flex-row items-center ">
        Language:
        <n-select v-model:value="valueLang" :options="langOpts"  @update:value="handleUpdateValue"/>
      </div>
    </nav>
  </header>
  <div class="overflow-y-hidden">
    <router-view></router-view>
  </div>

  <!-- <p>{{ $t('main.hello') }}</p> -->
</template>

<script>
import { NSelect } from 'naive-ui'
import { RouterView } from 'vue-router'
import { ref } from 'vue'
export default {
  components:{
    NSelect
  },
  setup() {
    const valueLang = ref('es')
    const langOpts = ref(
      [
        { value: 'es', label: 'Español' },
        { value: 'en', label: 'English' }
      ])
    return {
      valueLang, langOpts
    }
  },
  methods:{
    handleUpdateValue(){
      this.$i18n.locale = this.valueLang
    }
  }
}
</script>
