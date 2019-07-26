// @flow

import pickRandomOne from './pickRandomOne'

const pickRandomMinute = (): number => (
  pickRandomOne([0, 15, 30, 42, 45])
)

export default pickRandomMinute
