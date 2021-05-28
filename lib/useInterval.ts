import { useEffect, useRef } from 'react'
import runEvery from 'lib/runEvery'

const useInterval = (cb: Function, delay?: number | null) => {
  const savedCb = useRef<Function>(() => {})

  useEffect(() => {
    savedCb.current = cb
  })

  useEffect(() => {
    if (delay !== null) {
      return runEvery(delay, () => savedCb.current())
    }

    return undefined
  }, [delay])
}

export default useInterval
