// @flow

import React from 'react'

import style from './style'

/**
 * Generic list container
 */

type tProps = {
  children?: ReactNode
}

export default ({ children }: tProps) => (
  <div className={style.outer}>
    {children}
  </div>
)
