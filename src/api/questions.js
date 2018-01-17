import AV from './AV'
const Question = AV.Object.extend('Question')

export function save({objectId, title, content, answer, prize}) {
  const q = objectId ? AV.Object.createWithoutData('Question', objectId) : new Question()
  return q.save({title, content, answer, prize}).then(q => q.toJSON())
}

export function find() {
  const qs = new AV.Query('Question')
  return qs.find().then(qs => qs.map(q => q.toJSON()))
}
