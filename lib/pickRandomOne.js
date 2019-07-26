// @flow

/**
 * Return an array element, picked randomly
 */

const pickRandomOne = <T>(arr: Array<T>): T => (
  arr[Math.floor(Math.random() * arr.length)]
)

export default pickRandomOne
