/**
 * Return an index, picked randomly
 */

const getRandomIndex = <T>(arr: T[]): number => (
  Math.floor(Math.random() * arr.length)
)

export default getRandomIndex
