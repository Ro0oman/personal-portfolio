<template>
    <main class="flex flex-col items-center content-center justify-center gap-4">
        <section class="mt-4 w-1/2">
            <div class="flex flex-row items-center content-center w-full justify-center gap-10 object-contain">
                <n-image width="300" src="../../public/icono.webp" />
                <div class="flex flex-col">
                    <h1 class="text-4xl">
                        Hola, soy <span>Roman Myziuk</span>
                    </h1>
                    <small>Junior Fullstack developer</small>
                    <div class="max-w-xl">
                        Desarrollo Aplicaciones Web Fullstack adaptandome a cualquier tecnologia que se me ponga encima.
                        Actualmente desarrollo
                        con Vue.js y Laravel debido a la versatilidad que ofrecen.
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
        <section class="w-1/2 p-4 flex flex-col content-center justify-center">
            <h1 class="title border-b-2">Proyectos</h1>
            <section class="projects-box">
                <!-- <div class="card">
                    <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
                        alt="">
                    <div class="card-content">
                        <h2>
                            Card Heading
                        </h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste,
                            voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum
                            corrupti ipsa asperiores harum? Dicta odio aut hic.
                        </p>
                        <a href="#" class="button">
                            Find out more
                            <span class="material-symbols-outlined">
                                arrow_right_alt
                            </span>
                        </a>
                    </div>
                </div>
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
                        alt="">
                    <div class="card-content">
                        <h2>
                            Card Heading
                        </h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste,
                            voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum
                            corrupti ipsa asperiores harum? Dicta odio aut hic.
                        </p>
                        <a href="#" class="button">
                            Find out more
                            <span class="material-symbols-outlined">
                                arrow_right_alt
                            </span>
                        </a>
                    </div>
                </div>
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
                        alt="">
                    <div class="card-content">
                        <h2>
                            Card Heading
                        </h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste,
                            voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum
                            corrupti ipsa asperiores harum? Dicta odio aut hic.
                        </p>
                        <a href="#" class="button">
                            Find out more
                            <span class="material-symbols-outlined">
                                arrow_right_alt
                            </span>
                        </a>
                    </div>
                </div>
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
                        alt="">
                    <div class="card-content">
                        <h2>
                            Card Heading
                        </h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste,
                            voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum
                            corrupti ipsa asperiores harum? Dicta odio aut hic.
                        </p>
                        <a href="#" class="button">
                            Find out more
                            <span class="material-symbols-outlined">
                                arrow_right_alt
                            </span>
                        </a>
                    </div>
                </div>
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
                        alt="">
                    <div class="card-content">
                        <h2>
                            Card Heading
                        </h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste,
                            voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum
                            corrupti ipsa asperiores harum? Dicta odio aut hic.
                        </p>
                        <a href="#" class="button">
                            Find out more
                            <span class="material-symbols-outlined">
                                arrow_right_alt
                            </span>
                        </a>
                    </div>
                </div>
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
                        alt="">
                    <div class="card-content">
                        <h2>
                            Card Heading
                        </h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste,
                            voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum
                            corrupti ipsa asperiores harum? Dicta odio aut hic.
                        </p>
                        <a href="#" class="button">
                            Find out more
                            <span class="material-symbols-outlined">
                                arrow_right_alt
                            </span>
                        </a>
                    </div>
                </div> -->
            </section>
        </section>
        <section class="w-1/2 p-4 flex flex-col content-center justify-center">
            <h1 class="title border-b-2">Trayectoria</h1>
                <div class="p-4">
                    <Trayectoria></Trayectoria>
                </div>
        </section>
    </main>
</template>

<script>
import Trayectoria  from '../components/Trayectoria.vue'
import { NImage } from 'naive-ui'
export default {
    components: {
        NImage, Trayectoria
    }
}
</script>