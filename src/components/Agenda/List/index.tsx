import React, { ReactElement } from 'react'

import style from './style.scss'

/**
 * Generic list container
 */

interface Props {
  children?: React.ReactNode
}

const List = ({ children }: Props): ReactElement => (
  <div className={style.outer}>{children}</div>
)

export default List
