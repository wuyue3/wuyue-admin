function drawImage(width, height, color) {
  const R = Math.random() * 255
  const G = Math.random() * 255
  const B = Math.random() * 255
  const randomColor = `${R},${G},${B}`
  color = color | randomColor
  width = width | 320
  height = height | 240
  console.log(width, height, color)
}

export default drawImage
