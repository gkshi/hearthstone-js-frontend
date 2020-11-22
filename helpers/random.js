export function random (array = [], number = 1) {
  const from = [...array]
  const res = []
  for (let i = 0; i < number; i++) {
    const randomIndex = Math.floor(Math.random() * from.length)
    res.push({ ...from[randomIndex] })
    from.splice(randomIndex, 1)
  }
  return number === 1 ? res[0] : res
}

export default random
