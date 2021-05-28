import React, { ReactElement, useContext, useMemo, useState } from 'react'
import { DateTime } from 'luxon'
import _sortBy from 'lodash/sortBy'
import _groupBy from 'lodash/groupBy'

import greeting from 'lib/greeting'
import useGreeting from 'lib/useGreeting'

import Calendar from 'src/models/Calendar'
import Event from 'src/models/Event'
import AccountContext from 'src/context/accountContext'

import List from './List'
import EventCell from './EventCell'

import style from './style.scss'

type AgendaItem = {
  calendar: Calendar
  event: Event
}

const compareByDateTime = (a: AgendaItem, b: AgendaItem) =>
  a.event.date.diff(b.event.date).valueOf()

/**
 * Agenda component
 * Displays greeting (depending on time of day)
 * and list of calendar events
 */

const ALL = ''

const Agenda = (): ReactElement => {
  const account = useContext(AccountContext)
  const [id, setId] = useState(ALL)
  const [group, setGroup] = useState(false)

  const ids: string[] = useMemo(
    () => [ALL, ...account.calendars.map(({ id }) => id)],
    [account],
  )

  const filteredCalendars: Calendar[] = useMemo(
    () =>
      account.calendars.filter((calendar) =>
        id ? calendar.id === id : calendar,
      ),
    [account, id],
  )

  const events: AgendaItem[] = useMemo(
    () =>
      filteredCalendars
        .flatMap((calendar) =>
          calendar.events.map((event) => ({ calendar, event })),
        )
        .sort(compareByDateTime),
    [filteredCalendars],
  )

  const groupedEvents: { [key: string]: AgendaItem[] } = useMemo(
    () => _groupBy(events, group && 'event.department'),
    [events, group],
  )

  const title = useGreeting()

  return (
    <div className={style.outer}>
      <div className={style.container}>
        <div className={style.header}>
          <span className={style.title}>{title}</span>
        </div>

        <label htmlFor="ids">calendars</label>
        <select
          name="ids"
          id="ids"
          value={id}
          onChange={(e) => setId(e.target.value)}
        >
          {ids.map((id) => (
            <option key={id} value={id}>
              {id || 'All'}
            </option>
          ))}
        </select>

        <button onClick={() => setGroup(!group)}>
          {group ? 'Ungroup' : 'Group'}
        </button>

        <List>
          {Object.entries(groupedEvents).map(([heading, events]) => (
            <div key={heading}>
              {heading !== 'undefined' && <h2>{heading}</h2>}
              <hr />
              {events.map(({ calendar, event }) => (
                <EventCell key={event.id} calendar={calendar} event={event} />
              ))}
            </div>
          ))}
        </List>
      </div>
    </div>
  )
}

export default Agenda
