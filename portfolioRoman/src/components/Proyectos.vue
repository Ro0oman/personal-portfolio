<template>
  <div class="cards my-4">
    <div class="my-2 mb-4">
      <div class="text-2xl">Etiquetas</div>
      <div class="flex gap-4 p-2 border rounded-md ">
        <n-tag
          checkable
          :bordered="false"
          v-model:checked="vueTag"
        >
          Vue.js
          <template #avatar>
            <n-avatar src="https://vuejs.org/images/logo.png" />
          </template>
        </n-tag>
        <n-tag
          checkable
          :bordered="false"
          v-model:checked="jsTag"
        >
          JavaScript
          <template #avatar>
            <n-avatar src="data:image/png;base64,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" />
          </template>
        </n-tag>
        <n-tag
          checkable
          :bordered="false"
          v-model:checked="laravelTag"
        >
          Laravel
          <template #avatar>
            <n-avatar
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
            />
          </template>
        </n-tag>
        <n-tag
          checkable
          :bordered="false"
          v-model:checked="crudTag"
        >
          CRUD API
          <template #avatar>
            <n-avatar src="https://cdn-icons-png.flaticon.com/512/2165/2165004.png" />
          </template>
        </n-tag>
        <n-tag
          checkable
          :bordered="false"
          v-model:checked="steamTag"
        >
          Steam API
          <template #avatar>
            <n-avatar src="https://assets.stickpng.com/images/58aefdc2c869e092af51ee6f.png" />
          </template>
        </n-tag>
        <n-tag
          checkable
          :bordered="false"
          v-model:checked="slqTag"
        >
          SQL
          <template #avatar>
            <n-avatar
              src="data:image/png;base64,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"
            />
          </template>
        </n-tag>
      </div>
    </div>
    <n-grid cols="2 s:2 l:2 xl:3 2xl:3" :x-gap="12" :y-gap="8" responsive="screen">
      <n-grid-item class="hover:scale-105 transition">
        <n-card title="PC-Creator">
          <template #cover>
            <img src="../assets/tfg.png" />
            <div class="flex m-2 gap-2 flex-wrap">
              <n-tag
                checkable
                v-model:checked="vueTag"
              >
                Vue.js
                <template #avatar>
                  <n-avatar src="https://vuejs.org/images/logo.png" />
                </template>
              </n-tag>
              <n-tag
                checkable
                :bordered="false"
                v-model:checked="laravelTag"
              >
                Laravel
                <template #avatar>
                  <n-avatar
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
                  />
                </template>
              </n-tag>
              <n-tag
                checkable
                :bordered="false"
                v-model:checked="crudTag"
              >
                CRUD API
                <template #avatar>
                  <n-avatar src="https://cdn-icons-png.flaticon.com/512/2165/2165004.png" />
                </template>
              </n-tag>
              <n-tag
                checkable
                :bordered="false"
                v-model:checked="steamTag"
              >
                Steam API
                <template #avatar>
                  <n-avatar src="https://assets.stickpng.com/images/58aefdc2c869e092af51ee6f.png" />
                </template>
              </n-tag>
              <n-tag
                checkable
                :bordered="false"
                v-model:checked="slqTag"
              >
                SQL
                <template #avatar>
                  <n-avatar
                    src="data:image/png;base64,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"
                  />
                </template>
              </n-tag>
            </div>
          </template>
          Aplicacion que permite crear ordenadores los cuales van orientados a un juego especifico.
        </n-card>
      </n-grid-item>
      <n-grid-item class="hover:scale-105 transition">
        <n-card title="PONG V.2 Hecho con JavaScript Vanilla">
          <template #cover>
            <img src="../assets/tfg.png" />
            <div class="flex m-2 gap-2 flex-wrap">
              <n-tag
          checkable
          :bordered="false"
          v-model:checked="jsTag"
        >
          JavaScript
          <template #avatar>
            <n-avatar src="data:image/png;base64,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" />
          </template>
        </n-tag>
            </div>
          </template>
          Aplicacion que permite crear ordenadores los cuales van orientados a un juego especifico.
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script>
import { NCard, NSpace, NGrid, NGridItem, NTag, NAvatar } from 'naive-ui'
import { ref } from 'vue'

export default {
  components: {
    NCard,
    NSpace,
    NGrid,
    NGridItem,
    NTag,
    NAvatar
  },
  setup() {
    const vueTag = ref(false)
    const laravelTag = ref(false)
    const crudTag = ref(false)
    const steamTag = ref(false)
    const slqTag = ref(false)
    const jsTag = ref(false)
    return {
      vueTag,
      laravelTag,
      crudTag,
      steamTag,
      slqTag,
      jsTag
    }
  }
}
</script>
