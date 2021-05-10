const wait = async (delay: number) =>
  new Promise((res) => {
    let timeout = setTimeout(() => {
      clearTimeout(timeout)
      res(null)
    }, delay)
  })

export default wait
