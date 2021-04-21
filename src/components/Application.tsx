import React, { useEffect, useState } from 'react'

import getUpdatedAccount from 'lib/getUpdatedAccount'
import createAccount from 'lib/createAccount'
import runEvery from 'lib/runEvery'
import Account from 'src/models/Account'
import AccountContext from 'src/context/accountContext'

import Agenda from './Agenda'

const REAL_TIME_UPDATES_INTERVAL = 1000

const initialAccountValue = createAccount()

const Application = () => {
  const [account, setAccount] = useState<Account>(initialAccountValue)

  // Simulate real-time updates by updating random events properties
  // at pre-defined intervals
  useEffect(() => (
    runEvery(REAL_TIME_UPDATES_INTERVAL, () => {
      try {
        const updatedAccount = getUpdatedAccount(account)
        setAccount(updatedAccount)
      }
      catch (e) {
        console.error(e)
      }
    })
  ), [account])

  return (
    <AccountContext.Provider value={account}>
      <Agenda />
    </AccountContext.Provider>
  )
}

export default Application
