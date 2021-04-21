import { DateTime } from 'luxon'
import { v4 as uuid } from 'uuid'
// import { observable } from 'mobx'

class Event {
  id: string = uuid()

  // @observable
  title: string

  // @observable
  department: string | void

  // @observable
  date: DateTime
}

export default Event
