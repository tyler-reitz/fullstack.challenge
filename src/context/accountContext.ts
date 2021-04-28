import { createContext } from 'react'

import Account from 'src/models/Account'

const AccountContext = createContext<Account | null>(null)

export default AccountContext
