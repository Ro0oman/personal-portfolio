<template>
  <div class="text-[#0067B1]">
    <n-timeline>
      <n-timeline-item
        type="info"
        :title="$t('trayectoria.tituloGradoMedio')"
        :content="$t('trayectoria.contenidoGradoMedio')"
        time="2021-06-15"
      />
      <n-timeline-item
        type="info"
        :title="$t('trayectoria.tituloGradoSuperior')"
        :content="$t('trayectoria.contenidoGradoSuperior')"
        time="2023-06-15"
      />
      <n-timeline-item
        type="info"
        :title="$t('trayectoria.tituloTesi')"
        :content="$t('trayectoria.contenidoTesi')"
        time="2023-03-01 - 2023-07-01"
      />
    </n-timeline>
  </div>
</template>

<script>
import { NTimeline, NTimelineItem } from 'naive-ui'

export default {
  components: {
    NTimeline,
    NTimelineItem
  }
}
</script>
