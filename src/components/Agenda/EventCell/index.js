// @flow

import React from 'react'
import { DateTime } from 'luxon'
import Color from 'color'
import { observer } from 'mobx-react'

import type Event from 'src/models/Event'
import type Calendar from 'src/models/Calendar'

import style from './style'

/**
 * Format a date-time to time only string
 */

const formatWhen = (dt: DateTime) => (
  dt.toFormat(dt.minute ? 'h:mm a' : 'h a')
)

/**
 * Event cell component
 * Displays time of event, title and department (if any)
 */

type tProps = {
  calendar: Calendar,
  event: Event,
}

export default observer(({ calendar, event }: tProps) => {
  const cardBgColor = Color(calendar.color).alpha(0.1).string()
  const titleColor = Color(calendar.color).alpha(0.8).mix(Color('#000'), 0.4).string()

  return (
    <div className={style.outer}>
      <div className={style.when}>
        {formatWhen(event.date)}
      </div>
      <div className={style.card} style={{ backgroundColor: cardBgColor }}>
        <div className={style.cardTitle} style={{ color: titleColor }}>
          <span>{event.title}</span>
          {!!event.department && <span>{event.department}</span>}
        </div>
      </div>
    </div>
  )
})
