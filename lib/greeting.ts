/**
 * Greeting string depending on the time of day.
 */

const greeting = (hour: number): string => {
  if (hour < 6) {
    return 'Good night'
  }
  else if (hour < 12) {
    return 'Good morning'
  }
  else if (hour < 18) {
    return 'Good afternoon'
  }
  else if (hour < 22) {
    return 'Good evening'
  }
  else {
    return 'Good night'
  }
}

export default greeting
