const wait = async (delay: number): Promise<void> =>
  new Promise((res) => {
    const timeout = setTimeout(() => {
      clearTimeout(timeout)
      res(null)
    }, delay)
  })

export default wait
