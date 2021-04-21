import { DateTime } from 'luxon'
import faker from 'faker'
import shuffle from 'lodash/fp/shuffle'
import capitalize from 'lodash/capitalize'

import Event from 'src/models/Event'
import Account from 'src/models/Account'
import Calendar from 'src/models/Calendar'

import pickRandomMinute from './pickRandomMinute'
import flipACoin from './flipACoin'

const EVENTS_PER_CALENDAR = 6
const CALENDARS_PER_ACCOUNT = 3
const CALENDAR_COLORS = [
  '#419BDF',
  '#C4281B',
  '#E35C33',
  '#EEBF4B',
  '#5DB27E',
  '#397D49',
  '#4154AF',
  '#C4281B',
  '#7B88C6',
]

/**
 * Create an Event.
 * Title and department are set to random values.
 * Date has a random minuteand an hour based on the passed offset from current time.
 */

const generateEvent = (hourOffset: number): Event => {
  const event = new Event()

  event.title = capitalize(faker.company.bs())

  // Don't assign a department to all events
  event.department = flipACoin(0.8) ? faker.commerce.department() : undefined

  event.date = DateTime.local()
    .plus({ hour: hourOffset })
    .set({ minute: pickRandomMinute() })

  return event
}

/**
 * Create a Calendar with a few Events.
 * Events are spread over time with an offset from the current time.
 */

const generateCalendar = (color: string): Calendar => {
  const calendar = new Calendar()

  calendar.color = color

  for (let i = 0; i < EVENTS_PER_CALENDAR; i++) {
    calendar.events.push(generateEvent(Math.round(i - 5)))
  }

  return calendar
}

/**
 * Create an Account with a few Calendars.
 * Calendars are assigned a random color.
 */

const createAccount = (): Account => {
  const colorPool = shuffle(CALENDAR_COLORS)

  const calendars = []
  for (let i = 0; i < CALENDARS_PER_ACCOUNT; i++) {
    calendars.push(generateCalendar(colorPool.pop()))
  }

  return { calendars }
}

export default createAccount
