import { useState } from 'react'
import { DateTime } from 'luxon'

import useInterval from './useInterval'
import greeting from 'lib/greeting'

const useGreeting = (): string => {
  const [hour, setHour] = useState(DateTime.local().hour)
  const [count, setCount] = useState(0)

  useInterval(() => setHour(DateTime.local().hour), 1000)

  return greeting(hour)
}

export default useGreeting
