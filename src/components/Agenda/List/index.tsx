import React from 'react'

import style from './style.scss'

/**
 * Generic list container
 */

interface Props { 
  children?: React.ReactNode
}

const List = ({ children }: Props) => (
  <div className={style.outer}>
    {children}
  </div>
)

export default List
