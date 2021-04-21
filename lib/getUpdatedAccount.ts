import faker from 'faker'
import capitalize from 'lodash/capitalize'

import flipACoin from 'lib/flipACoin'
import getRandomIndex from 'lib/getRandomIndex'

import Account from 'src/models/Account'
import Event from 'src/models/Event'
import Calendar from 'src/models/Calendar'

const getUpdatedEvent = (calendarEvent: Event): Event => {
  if (flipACoin()) {
    calendarEvent.title = capitalize(faker.company.bs())
  }
  else {
    calendarEvent.date = calendarEvent.date.plus({
      hour: flipACoin() ? -1 : 1,
    })
  }

  return calendarEvent
}

const getUpdatedCalendar = (calendar: Calendar): Calendar => {
  const randomEventIndex = getRandomIndex(calendar.events)

  return ({
    ...calendar,
    events: calendar.events.map((calendarEvent, index) =>
      index !== randomEventIndex ? calendarEvent : getUpdatedEvent(calendarEvent)
    )
  })
}

/**
 * Change title or date-time of one random event
 * from a random calendar of the passed account
 */

const getUpdatedAccount = (account: Account): Account => {
  const randomCalendarIndex = getRandomIndex(account.calendars)

  return ({
    calendars: account.calendars.map((calendar, index) => (
      index !== randomCalendarIndex
        ? calendar
        : getUpdatedCalendar(calendar)
    ))
  })
}

export default getUpdatedAccount
