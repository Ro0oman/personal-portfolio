<template>
  <div class="cards my-4">
    <div class="my-2 mb-4">
      <div class="text-2xl">{{ $t('proyectos.etiquetas') }}</div>
      <div class="flex gap-2 py-2 rounded-md flex-wrap items-center">
        <div class="etiqueta">
          <n-tag checkable :bordered="false" v-model:checked="vueTag">
            Vue.js
            <template #avatar>
              <n-avatar src="https://vuejs.org/images/logo.png" />
            </template>
          </n-tag>
        </div>
        <div class="etiqueta">
          <n-tag checkable :bordered="false" v-model:checked="naiveUITag">
            Naive UI
            <template #avatar>
              <n-avatar src="https://www.naiveui.com/assets/naivelogo-93278402.svg" />
            </template>
          </n-tag>
        </div>
        <div class="etiqueta">
          <n-tag checkable :bordered="false" v-model:checked="tailwindTag">
            Tailwind
            <template #avatar>
              <n-avatar
                src="https://cdn.iconscout.com/icon/free/png-256/free-tailwind-css-5285308-4406745.png"
              />
            </template>
          </n-tag>
        </div>
        <div class="etiqueta">
          <n-tag checkable :bordered="false" v-model:checked="htmlTag">
            HTML & CSS
            <template #avatar>
              <n-avatar src="https://logowik.com/content/uploads/images/css3-html51661.jpg" />
            </template>
          </n-tag>
        </div>
        <div class="etiqueta">
          <n-tag checkable :bordered="false" v-model:checked="jsTag">
            JavaScript
            <template #avatar>
              <n-avatar
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
              />
            </template>
          </n-tag>
        </div>
        <div class="etiqueta">
          <n-tag checkable :bordered="false" v-model:checked="laravelTag">
            Laravel
            <template #avatar>
              <n-avatar
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
              />
            </template>
          </n-tag>
        </div>
        <div class="etiqueta">
          <n-tag checkable :bordered="false" v-model:checked="crudTag">
            CRUD API
            <template #avatar>
              <n-avatar src="https://cdn-icons-png.flaticon.com/512/2165/2165004.png" />
            </template>
          </n-tag>
        </div>
        <div class="etiqueta">
          <n-tag checkable :bordered="false" v-model:checked="steamTag">
            Steam API
            <template #avatar>
              <n-avatar src="https://i.blogs.es/a34507/steam/1366_2000.jpg" />
            </template>
          </n-tag>
        </div>
        <div class="etiqueta">
          <n-tag checkable :bordered="false" v-model:checked="slqTag">
            SQL
            <template #avatar>
              <n-avatar
                src="data:image/png;base64,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"
              />
            </template>
          </n-tag>
        </div>
      </div>
    </div>
    <n-grid cols="1 s:2 l:2 xl:2 2xl:2" :x-gap="12" :y-gap="6" responsive="screen">
      <n-grid-item>
        <div class="card">
          <div>
            <n-image class="coverImg" src="https://demo.d3roman.com/resources/tfg.png" />
            <div class="tags flex m-2 gap-2 flex-wrap">
              <div class="etiqueta">
                <n-tag checkable :bordered="false" v-model:checked="naiveUITag">
                  Naive UI
                  <template #avatar>
                    <n-avatar src="https://www.naiveui.com/assets/naivelogo-93278402.svg" />
                  </template>
                </n-tag>
              </div>
              <div class="etiqueta">
                <n-tag class="etiqueta" checkable v-model:checked="vueTag">
                  Vue.js
                  <template #avatar>
                    <n-avatar src="https://vuejs.org/images/logo.png" />
                  </template>
                </n-tag>
              </div>
              <div class="etiqueta">
                <n-tag class="etiqueta" checkable :bordered="false" v-model:checked="tailwindTag">
                  Tailwind
                  <template #avatar>
                    <n-avatar
                      src="https://cdn.iconscout.com/icon/free/png-256/free-tailwind-css-5285308-4406745.png"
                    />
                  </template>
                </n-tag>
              </div>
              <div class="etiqueta">
                <n-tag class="etiqueta" checkable :bordered="false" v-model:checked="htmlTag">
                  HTML & CSS
                  <template #avatar>
                    <n-avatar src="https://logowik.com/content/uploads/images/css3-html51661.jpg" />
                  </template>
                </n-tag>
              </div>
              <div class="etiqueta">
                <n-tag class="etiqueta" checkable :bordered="false" v-model:checked="laravelTag">
                  Laravel
                  <template #avatar>
                    <n-avatar
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
                    />
                  </template>
                </n-tag>
              </div>
              <div class="etiqueta">
                <n-tag class="etiqueta" checkable :bordered="false" v-model:checked="crudTag">
                  CRUD API
                  <template #avatar>
                    <n-avatar src="https://cdn-icons-png.flaticon.com/512/2165/2165004.png" />
                  </template>
                </n-tag>
              </div>
              <div class="etiqueta">
                <n-tag class="etiqueta" checkable :bordered="false" v-model:checked="steamTag">
                  Steam API
                  <template #avatar>
                    <n-avatar src="https://i.blogs.es/a34507/steam/1366_2000.jpg" />
                  </template>
                </n-tag>
              </div>
              <div class="etiqueta">
                <n-tag class="etiqueta" checkable :bordered="false" v-model:checked="slqTag">
                  SQL
                  <template #avatar>
                    <n-avatar
                      src="data:image/png;base64,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"
                    />
                  </template>
                </n-tag>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="p-4">
              <h1 class="text-xl mb-4">PC-Creator</h1>
              <p>{{ $t('proyectos.descripcionPC-Creator') }}</p>
            </div>
            <div class="botones pb-4">
              <div class="botones flex flex-wrap gap-2 justify-around mt-4">
                <a href="https://github.com/Ro0oman/Proyecto-TFG-Roman" target="_blank">
                  <n-button icon-placement="left">
                    <template #icon>
                      <i class="fa buttonIcon fa-github" aria-hidden="true"></i>
                    </template>
                    Code
                  </n-button>
                </a>
                <a href="https://pcbuilder.d3roman.com/dashboard" target="_blank">
                  <n-button icon-placement="left">
                    Demo
                  </n-button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </n-grid-item>
      <n-grid-item>
        <div class="card">
          <div>
            <n-image class="coverImg" src="https://demo.d3roman.com/resources/pong.png" />
            <div class="tags flex m-2 gap-2 flex-wrap">
              <div class="etiqueta">
                <n-tag class="etiqueta" checkable :bordered="false" v-model:checked="jsTag">
                  JavaScript
                  <template #avatar>
                    <n-avatar
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                    />
                  </template>
                </n-tag>
              </div>
              <div class="etiqueta">
                <n-tag class="etiqueta" checkable :bordered="false" v-model:checked="htmlTag">
                  HTML & CSS
                  <template #avatar>
                    <n-avatar src="https://logowik.com/content/uploads/images/css3-html51661.jpg" />
                  </template>
                </n-tag>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="p-4">
              <h1 class="text-xl mb-4">{{ $t('proyectos.tituloPong') }}</h1>
              <p>{{ $t('proyectos.descripcionPong') }}</p>
            </div>
            <div class="botones pb-4">
              <div class="botones flex flex-wrap gap-2 justify-around mt-4">
                <a href="https://github.com/Ro0oman/PONG-V2" target="_blank">
                  <n-button icon-placement="left">
                    <template #icon>
                      <i class="fa buttonIcon fa-github" aria-hidden="true"></i>
                    </template>
                    Code
                  </n-button>
                </a>
                <a href="https://demo.d3roman.com/" target="_blank">
                  <n-button icon-placement="left"> Demo </n-button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </n-grid-item>
      <n-grid-item>
        <div class="card">
          <div>
            <n-image class="coverImg" src="https://demo.d3roman.com/resources/portfolio.png" />
            <div class=" tags flex m-2 gap-2 flex-wrap">
              <div class="etiqueta">
                <n-tag class="etiqueta" checkable :bordered="false" v-model:checked="naiveUITag">
                  Naive UI
                  <template #avatar>
                    <n-avatar src="https://www.naiveui.com/assets/naivelogo-93278402.svg" />
                  </template>
                </n-tag>
              </div>
              <div class="etiqueta">
                <n-tag class="etiqueta" checkable :bordered="false" v-model:checked="tailwindTag">
                  Tailwind
                  <template #avatar>
                    <n-avatar
                      src="https://cdn.iconscout.com/icon/free/png-256/free-tailwind-css-5285308-4406745.png"
                    />
                  </template>
                </n-tag>
              </div>
              <div class="etiqueta">
                <n-tag class="etiqueta" checkable :bordered="false" v-model:checked="vueTag">
                  Vue.js
                  <template #avatar>
                    <n-avatar src="https://vuejs.org/images/logo.png" />
                  </template>
                </n-tag>
              </div>
              <div class="etiqueta">
                <n-tag class="etiqueta" checkable :bordered="false" v-model:checked="htmlTag">
                  HTML & CSS
                  <template #avatar>
                    <n-avatar src="https://logowik.com/content/uploads/images/css3-html51661.jpg" />
                  </template>
                </n-tag>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="p-4">
              <h1 class="text-xl mb-4">{{ $t('proyectos.tituloPortfolio') }}</h1>
              <p>{{ $t('proyectos.descripcionPortfolio') }}</p>
            </div>
            <div class="botones pb-4">
              <div class="botones flex flex-wrap gap-2 justify-around mt-4">
                <a href="https://github.com/Ro0oman/personal-portfolio" target="_blank">
                  <n-button icon-placement="left">
                    <template #icon>
                      <i class="fa buttonIcon fa-github" aria-hidden="true"></i>
                    </template>
                    Code
                  </n-button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script>
import { NCard, NImage, NSpace, NGrid, NGridItem, NTag, NAvatar, NButton } from 'naive-ui'
import { ref } from 'vue'

export default {
  components: {
    NCard,
    NImage,
    NSpace,
    NGrid,
    NGridItem,
    NTag,
    NAvatar,
    NButton
  },
  setup() {
    const vueTag = ref(false)
    const naiveUITag = ref(false)
    const tailwindTag = ref(false)
    const htmlTag = ref(false)
    const laravelTag = ref(false)
    const crudTag = ref(false)
    const steamTag = ref(false)
    const slqTag = ref(false)
    const jsTag = ref(false)
    return {
      vueTag,
      naiveUITag,
      tailwindTag,
      htmlTag,
      laravelTag,
      crudTag,
      steamTag,
      slqTag,
      jsTag
    }
  }
}
</script>
