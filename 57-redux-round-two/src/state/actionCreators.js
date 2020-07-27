import { SAMPLE_ACTION } from './actions'

export function increment(counter) {
  return {
    type: SAMPLE_ACTION,
    counter: counter + 1
  }
}
