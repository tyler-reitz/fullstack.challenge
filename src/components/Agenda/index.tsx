import React, { Component, useMemo } from 'react'
import { DateTime } from 'luxon'
import { computed } from 'mobx'
import { observer, inject } from 'mobx-react'

import greeting from 'lib/greeting'

import Account from 'src/models/Account'
import Calendar from 'src/models/Calendar'
import Event from 'src/models/Event'

import List from './List'
import EventCell from './EventCell'

import style from './style.scss'

/**
 * Agenda component
 * Displays greeting (depending on time of day)
 * and list of calendar events
 */

type AgendaItem = {
  calendar: Calendar,
  event: Event
}

interface Props {
  account: Account
}

const Agenda = ({ account }: Props) => {
  const events: Array<AgendaItem> = useMemo(() => {
    const events = account.calendars
      .flatMap((calendar) => (
        calendar.events.map((event) => (
          { calendar, event }
        ))
      ))

    // Sort events by date-time, ascending
    events.sort((a, b) => (a.event.date.diff(b.event.date).valueOf()))

    return events
  }, [account])

  return (
    <div className={style.outer}>
      <div className={style.container}>

        <div className={style.header}>
          <span className={style.title}>
            {greeting(DateTime.local().hour)}
          </span>
        </div>

        <List>
          {events.map(({ calendar, event }) => (
            <EventCell key={event.id} calendar={calendar} event={event} />
          ))}
        </List>

      </div>
    </div>
  )
}

export default Agenda
