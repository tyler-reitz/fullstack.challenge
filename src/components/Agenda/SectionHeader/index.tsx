import React, { ReactElement } from 'react'

import style from './style.scss'

/**
 * Agenda section header component
 */

interface Props {
  label: string
}

const SectionHeader = ({ label }: Props): ReactElement => (
  <div className={style.outer}>{label}</div>
)

export default SectionHeader
