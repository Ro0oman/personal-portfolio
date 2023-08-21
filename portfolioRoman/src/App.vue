<template>
  
  <header class="w-full flex m-auto items-center flex-row justify-center">
    <n-modal v-model:show="showModal">
      <n-card
        class="flex items-center"
        style="width: 600px"
        title="Selector de Idioma - Language Selector"
        :bordered="true"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
        <template #header-extra> </template>
        <n-alert title="Version Beta" type="warning" closable>
          Estas visualizando una version beta, mis habilidades no se relacionan directamente con el
          contenido de esta pagina
        </n-alert>
        <div class="flex xl:flex-row flex-col items-center justify-center gap-10 mt-4">
          <button @click="setLang('es')">
            <div
              class="flex items-center justify-center flex-col hover:scale-110 transition cursor-pointer duration-250"
            >
              <img class="flagImg" src="./assets/spain.png" alt="Español" />
              Español
            </div>
          </button>
          <button @click="setLang('en')">
            <div
              class="flex items-center justify-center flex-col hover:scale-110 transition cursor-pointer duration-250"
            >
              <img class="flagImg" src="./assets/united-kingdom.png" alt="English" />
              English
            </div>
          </button>
        </div>
      </n-card>
    </n-modal>
    <nav
      class="xl:w-1/2 w-full py-4 xl:px-2 px-6 flex flex-row flex-wrap items-center justify-around font-bold xl:border-b-2"
    >
      <a href="#inicio">{{ $t('header.inicio') }}</a>
      <a href="#trayectoria">{{ $t('header.trayectoria') }}</a>
      <a href="#proyectos">{{ $t('header.proyectos') }}</a>
      <a href="#contacto">{{ $t('header.contacto') }}</a>
      <!-- <div class="p-1 ml-2 flex flex-row items-center">
        Language:
        <n-select v-model:value="valueLang" :options="langOpts" @update:value="handleUpdateValue" />
      </div> -->
    </nav>
  </header>
  <div class="overflow-y-hidden">
    <router-view></router-view>
  </div>
</template>

<script>
import { NSelect, NModal, NCard, NAlert } from 'naive-ui'
import { RouterView } from 'vue-router'
import { ref } from 'vue'
export default {
  components: {
    NSelect,
    NModal,
    NCard,
    NAlert
  },
  setup() {
    const valueLang = ref('es')
    const showModal = ref(false)
    // Cambiar esta linea al desplegar en la pagina.
    const langOpts = ref([
      { value: 'es', label: 'Español' },
      { value: 'en', label: 'English' }
    ])
    return {
      valueLang,
      langOpts,
      showModal
    }
  },
  methods: {
    handleUpdateValue() {
      this.$i18n.locale = this.valueLang
    },
    setLang(lang){
      this.$i18n.locale = lang
      this.showModal = false
    }
  }
}
</script>
