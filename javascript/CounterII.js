/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = init => {
  let innerCount = init
  return {
    increment: () => innerCount += 1,
    decrement: () => innerCount -= 1,
    reset: () => innerCount = init
  }
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */