// @flow

import React from 'react'

import style from './style'

/**
 * Agenda section header component
 */

type tProps = {
  label: string,
}

export default ({ label }: tProps) => (
  <div className={style.outer}>
    {label}
  </div>
)
