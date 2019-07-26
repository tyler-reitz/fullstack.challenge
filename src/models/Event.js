// @flow

import { DateTime } from 'luxon'
import uuid from 'uuid/v4'
import { observable } from 'mobx'

class Event {
  id: string = uuid()

  @observable
  title: string

  @observable
  department: string | void

  @observable
  date: DateTime
}

export default Event
