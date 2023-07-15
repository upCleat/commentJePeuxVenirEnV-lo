<script>
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'

export default {
  components: {
    LMap,
    LTileLayer
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      config: null,
      map: null,
      geojson: []
    }
  },
  methods: {
    async getData() {
      const res = await fetch('/data.json')
      if (res.status === 200) {
        const finalRes = await res.json()
        this.map = finalRes
      }
    },
    async getConfig() {
      const res = await fetch('/config.json')
      if (res.status === 200) {
        const finalRes = await res.json()
        this.config = finalRes
      }
    }
  },
  mounted() {
    this.getConfig()
    this.getData()
  }
}
</script>

<template>
  <div style="height: 100vh; width: 100%">
    <l-map ref="map" :zoom="16" :center="[39.72978, 116.16659]" :use-global-leaflet="false">
      <l-tile-layer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
    </l-map>
  </div>
</template>
