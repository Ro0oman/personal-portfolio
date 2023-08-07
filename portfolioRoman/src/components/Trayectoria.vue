<template>
  <div class="text-[#0067B1]">
    <n-timeline>
      <n-timeline-item
        type="info"
        title="Titulo CFGM en Sistemas Microinformaticos y Redes"
        content="Introduccion a la Seguridad Informatica, Instalacion y configuracion de Aplicaciones en Red(DHCP, Apache, DNS, FTP...), Primer contacto con HTML5, Montaje y 
        Mantenimiento de Ordenadores "
        time="2021-06-15"
      />
      <n-timeline-item
        type="info"
        title="Titulo CFGS en Desarrollo de Aplicaciones Web"
        content="Programación en: Java, Python, C, SQL, PLSQL, PHP, JavaScript, Laravel, Vue Js, MySQL"
        time="2023-06-15"
      />
      <n-timeline-item
        type="info"
        title="Trabajo como Junior en TESI"
        content="Desarrollo fullstack en Vue JS, Laravel y .NET"
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
