import { DateTime } from 'luxon'

type Event = {
  id: string
  title: string
  department: string | null
  date: DateTime
}

export default Event
