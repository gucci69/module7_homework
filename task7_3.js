const noProto = () => {
  return Object.create(null)
}

console.log(noProto())