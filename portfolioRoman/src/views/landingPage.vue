<template>
  <main class="flex flex-col items-center content-center justify-center gap-4">
    <section class="mt-4 w-1/2" id="inicio">
      <div
        class="flex flex-row items-center content-center w-full justify-center gap-10 object-contain"
      >
        <n-image width="300" src="../../public/icono.webp" />
        <div class="flex flex-col">
          <h1 class="text-4xl font-bold">Hola, soy <span>Roman Myziuk</span></h1>
          <small class="text-xl">Junior Fullstack developer</small>
          <div class="max-w-xl">
            Desarrollo Aplicaciones Web Fullstack adaptandome a cualquier tecnologia que se me ponga
            encima. Actualmente desarrollo con <span>Vue.js</span> y <span>Laravel</span> debido a la versatilidad que
            ofrecen.
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
    <section class="w-1/2 p-4 flex flex-col content-center justify-center" id="trayectoria">
      <h1 class="title border-b-2">Trayectoria</h1>
      <div class="p-4">
        <Trayectoria></Trayectoria>
      </div>
    </section>
    <section class="w-1/2 p-4 flex flex-col content-center justify-center" id="proyectos">
      <h1 class="title border-b-2">Proyectos</h1>
        <Proyectos></Proyectos>
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
