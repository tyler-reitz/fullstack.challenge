import React, { ReactElement, useEffect } from 'react'

import runEvery from 'lib/runEvery'
import useAccount from 'lib/useAccount'
import AccountContext from 'src/context/accountContext'

import Agenda from './Agenda'

const REAL_TIME_UPDATES_INTERVAL = 10000

const Application = (): ReactElement => {
  const [account, refreshAccount] = useAccount()

  const tryRefreshAccount = async () => {
    try {
      await refreshAccount()
    } catch (e) {
      alert(e)
    }
  }

  useEffect(
    () => runEvery(REAL_TIME_UPDATES_INTERVAL, tryRefreshAccount),
    [refreshAccount],
  )

  return (
    <AccountContext.Provider value={account}>
      <Agenda />
    </AccountContext.Provider>
  )
}

export default Application
