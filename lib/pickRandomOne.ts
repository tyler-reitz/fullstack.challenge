import getRandomIndex from "./getRandomIndex"

/**
 * Return an array element, picked randomly
 */

const pickRandomOne = <T>(arr: T[]): T => (
  arr[getRandomIndex(arr)]
)

export default pickRandomOne
