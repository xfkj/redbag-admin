import AV from './AV'

const Area = AV.Object.extend('Area')

export function save({id, name, latitude, longitude, radius, active = false}) {
  const area = id ? AV.Object.createWithoutData('Area', id) : new Area()
  return area.save({name, center: new AV.GeoPoint(latitude, longitude), radius, active}).then(a => toJson(a))
}

export function find() {
  const areas = new AV.Query('Area')
  return areas.find().then(areas => areas.map(a => toJson(a)))
}

function toJson(a) {
  return {
    id: a.id,
    name: a.get('name'),
    latitude: a.get('center').latitude,
    longitude: a.get('center').longitude,
    radius: a.get('radius'),
    active: a.get('active')
  }
}
