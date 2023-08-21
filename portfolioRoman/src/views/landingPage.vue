<template>
  <main class="flex flex-col items-center content-center justify-center gap-4">
    <section class="mt-4 xl:w-1/2" id="inicio">
      <div
        class="flex flex-row items-center content-center w-full justify-center gap-10 object-contain spanAmarillo"
      >
        <n-image width="300" src="https://demo.d3roman.host/resources/falloutBoy.png" />
        <div class="flex flex-col">
          <h1 class="text-4xl font-bold">{{ $t('landing.holaSoy') }} <span>Roman Myziuk</span></h1>
          <small class="text-xl">Junior Fullstack developer</small>
          <div class="max-w-xl"><span>{{ $t('general.exigente') }}</span>  {{ $t('general.y') }} <span>{{ $t('general.perfeccionista') }}</span> {{ $t('landing.descripcion1') }} 
          </div>
          <div class="flex flex-row text-4xl mt-2 gap-4">
            <a class="icon" href="https://github.com/Ro0oman">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
            <a class="icon" href="https://www.linkedin.com/in/roman-myziuk/">
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="xl:w-1/2 p-4 flex flex-col content-center justify-center" id="trayectoria">
      <h1 class="title border-b-2">{{ $t('header.trayectoria') }}</h1>
      <div class="p-4">
        <Trayectoria></Trayectoria>
      </div>
    </section>
    <section class="xl:w-1/2 p-4 flex flex-col content-center justify-center" id="proyectos">
      <h1 class="title border-b-2">{{ $t('header.proyectos') }}</h1>
      <Proyectos></Proyectos>
      <span>{{ $t('proyectos.noSonTodos') }} <a class="underline text-xl" href="https://github.com/Ro0oman">Github</a></span> 
    </section>
    <section class="xl:w-1/2 p-4 mb-20 flex flex-col content-center justify-center" id="contacto">
      <h1 class="title border-b-2">{{ $t('header.contacto') }}</h1>
      <span>
        {{ $t('contacto.info1') }}
        <a class="underline text-2xl" href="mailto:romainot99@gmail.com">romainot99@gmail.com</a>
        {{ $t('contacto.info2') }}
        <a class="underline text-xl" href="https://www.linkedin.com/in/roman-myziuk/"> LinkedIn</a>  </span>
    </section>
  </main>
</template>

<script>
import Trayectoria from '../components/Trayectoria.vue'
import Proyectos from '../components/Proyectos.vue'
import { NImage } from 'naive-ui'
export default {
  components: {
    NImage,
    Trayectoria,
    Proyectos
  }
}
</script>
