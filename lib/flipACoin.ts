/**
 * Return true or false randomly.
 */

const flipACoin = (probabilityOfTrue = 0.5): boolean =>
  Math.random() < probabilityOfTrue

export default flipACoin
