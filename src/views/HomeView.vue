<script>
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker, LGeoJson, LLayerGroup } from '@vue-leaflet/vue-leaflet'
import { gpx } from '@tmcw/togeojson'
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LGeoJson,
    LLayerGroup
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
    async getGpxData(url) {
      this.geojson = []
      const res = await fetch(url)
      const finalRes = await res.text()
      const geoJson = { url: url, value: this.getGeoJson(finalRes) }
      this.geojson.push(geoJson)
    },
    display(value) {
      this.map[value].gpx.forEach((filegpx) => {
        this.getGpxData(`/gpx/${filegpx}`)
      })
    },
    styleFunction(value) {
      let hash = 0
      value.split('').forEach((char) => {
        hash = char.charCodeAt(0) + ((hash << 5) - hash)
      })
      let colour = '#'
      for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xff
        colour += value.toString(16).padStart(2, '0')
      }

      return () => {
        return {
          color: colour
        }
      }
    },
    getGeoJson(gpxContent) {
      if (!gpxContent || gpxContent !== '') {
        try {
          const gpxData = new DOMParser().parseFromString(gpxContent, 'text/xml')
          const jsonData = gpx(gpxData)
          return { jsonData }
        } catch (e) {
          console.error('Invalid gpx content')
          return {}
        }
      }
      return {}
    },
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
  computed: {
    isGeoJson() {
      return this.geojson.length > 0
    },
    listPassPoint() {
      const result = []
      if (this.map != null) {
        Object.keys(this.map).forEach((element) => {
          let read = {
            name: element,
            title: this.map[element].title,
            alt: this.map[element].alt,
            gpx: this.map[element].gpx,
            coord: [this.map[element].coord.lat, this.map[element].coord.long]
          }

          result.push(read)
        })

        return result
      }
      return null
    }
  },
  mounted() {
    this.getConfig()
    this.getData()
  }
}
</script>

<style scoped>
#mapContainer {
  width: 100vw;
  height: 100vh;
}
</style>

<template>
  <div v-if="config != null" id="mapContainer">
    <l-map
      ref="map"
      :zoom="config.viewpoint.zoom"
      :center="config.viewpoint.coord"
      :use-global-leaflet="false"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-layer-group v-if="isGeoJson" ref="geoJson">
        <l-geo-json
          v-for="gjson in geojson"
          :key="gjson.id"
          :geojson="gjson.value.jsonData"
          :optionsStyle="this.styleFunction(gjson.url)"
        ></l-geo-json>
      </l-layer-group>
      <l-marker
        @click="display(item.name)"
        v-for="item in listPassPoint"
        :key="item.name"
        :title="item.title"
        :alt="item.alt"
        :lat-lng="item.coord"
      ></l-marker>
    </l-map>
  </div>
</template>
