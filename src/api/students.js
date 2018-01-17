import AV from './AV'
const Student = AV.Object.extend('Student')

export function find() {
  const sts = new AV.Query('Student')
  return sts.exists('mobile').find().then(sts => sts.map(s => s.toJSON()))
}

export function count() {
  const sts = new AV.Query('Student')
  return sts.exists('mobile').count()
}
