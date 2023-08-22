<template>
  <div>
    <n-timeline>
      <n-timeline-item type="info" time="2021-06-15">
        <div>
          <h1 class="text-[#E1EFE6]">{{ $t('trayectoria.tituloGradoMedio') }}</h1>
          <p class="text-[#AEB7B3]">
            {{ $t('trayectoria.contenidoGradoMedio') }}
          </p>
        </div>
      </n-timeline-item>
      <n-timeline-item type="info" time="2023-06-15"
        ><div>
          <h1 class="text-[#E1EFE6]">{{ $t('trayectoria.tituloGradoSuperior') }}</h1>
          <p class="text-[#AEB7B3]">
            {{ $t('trayectoria.contenidoGradoSuperior') }}
          </p>
        </div>
      </n-timeline-item>
      <n-timeline-item type="info" time="2023-03-01 - 2023-07-01"
        ><div>
          <h1 class="text-[#E1EFE6]">{{ $t('trayectoria.tituloTesi') }}</h1>
          <p class="text-[#AEB7B3]">
            {{ $t('trayectoria.contenidoTesi') }}
          </p>
        </div></n-timeline-item
      >
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
