import React from 'react'
import { render } from 'react-dom'

import Application from './components/Application'

const rootElement = document.createElement('div')

document.body.appendChild(rootElement)

render(<Application />, rootElement)
