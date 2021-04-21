import { v4 as uuid } from 'uuid'
// import { observable } from 'mobx'

import Event from './Event'

class Calendar {
  id: string = uuid()

  // @observable
  color: string = '#f9f9fa'

  // @observable
  events: Array<Event> = []
}

export default Calendar
