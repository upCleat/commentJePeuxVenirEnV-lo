const fs = require('fs')
const path = require('path')
const { XMLParser } = require('fast-xml-parser')

const inDevelopmentMode = process.env.Node_ENV === 'development'
const config = require('../public/config.json')
const passagePoints = require('../public/passagepoint.json')
let result = {}

const options = {
  ignoreAttributes: false,
  attributeNamePrefix: ''
}

// Converts numeric degrees to radians
function toRad(Value) {
  return (Value * Math.PI) / 180
}

// Declaration
class COORDS {
  constructor(lat, long) {
    this.long = long
    this.lat = lat
  }

  /*
  This function takes in latitude and longitude of two
  location and returns the distance between them as the crow flies (in m)
  */
  distFromPoint(coord) {
    const R = 6371000 // 6371 km en m
    const dLat = toRad(coord.lat - this.lat)
    const dLon = toRad(coord.long - this.long)
    const lat1 = toRad(this.lat)
    const lat2 = toRad(coord.lat)

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const d = R * c
    return d
  }

  // Method
  toString() {
    return `long:${this.long} lat:${this.lat}`
  }
}

const parser = new XMLParser(options)
const index = {}
// on creer la structure finale
passagePoints.points.forEach((passagePoint) => {
  //console.info(passagePoint)
  let txtpassagepoint = `n:${passagePoint.coord[0]}_${passagePoint.coord[1]}`
  //A unifier
  result[txtpassagepoint] = passagePoint
  const coord = new COORDS(passagePoint.coord[0], passagePoint.coord[1])
  result[txtpassagepoint] = { ...result[txtpassagepoint], coord }
  index[txtpassagepoint] = coord
  const gpx = []
  result[txtpassagepoint] = { ...result[txtpassagepoint], gpx }
  //result = { ...result, ...gpx }
})
// fin

// liste les fichiers
const dirpath = path.join(__dirname, '../public/gpx')

const files = fs.readdirSync(dirpath)
files.forEach((nomfichier) => {
  if (path.extname(nomfichier) === '.gpx') {
    const pathFileGpx = path.join(dirpath, nomfichier)
    let currIndex = { ...index }
    // on creer l'index
    // parse le sfichier
    let data = fs.readFileSync(pathFileGpx, { encoding: 'utf8', flag: 'r' })

    let jObj = parser.parse(data)

    //const gpxDom = new JSDOM(data)
    let trkpts = jObj.gpx.trk.trkseg.trkpt
    //console.log(jObj.gpx.trk.trkseg)

    trkpts.forEach((element) => {
      let currPoint = new COORDS(element.lat, element.lon)

      Object.keys(currIndex).forEach((element) => {
        if (currIndex[element] != null) {
          let distance = currIndex[element].distFromPoint(currPoint)
          if (distance <= passagePoints.radius) {
            //console.log(`${element} _ ${nomfichier}`)
            result[element].gpx.push(nomfichier)
            currIndex[element] = null
            //console.info(result)
          }
        }
      })

      //console.info(currPoint.toString())
      //console.info(testpoint.toString())
      //console.info(test.distFromPoint(espinassou))
    })
    // fin parse
  }
})

console.log(result)

const outputpath = path.join(__dirname, '../public/')
const outputfile = path.join(outputpath, 'data.json')

try {
  fs.writeFileSync(outputfile, JSON.stringify(result, null, 0), {
    encoding: 'utf8',
    flag: 'w',
    mode: 0o666
  })
} catch (e) {
  console.log('Cannot write file ', e)
}
