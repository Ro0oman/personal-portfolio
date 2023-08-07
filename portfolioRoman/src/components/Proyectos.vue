<template>
  <div class="cards my-4">
    <n-grid cols="2 s:2 l:2 xl:3 2xl:3" :x-gap="12" :y-gap="8" responsive="screen">
      <n-grid-item>
        <n-card title="Proyecto Final de Grado" hoverable>
          <template #cover>
            <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
          </template>
          Probando
          <n-tag>
            Anyway.FM
            <template #avatar>
              <n-avatar
                src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"
              />
            </template>
          </n-tag>
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script>
import { NCard, NSpace, NGrid, NGridItem, NTag, NAvatar } from 'naive-ui'

export default {
  components: {
    NCard,
    NSpace,
    NGrid,
    NGridItem, NTag, NAvatar
  }
}
</script>
