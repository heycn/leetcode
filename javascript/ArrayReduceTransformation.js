/**
 * @param {number[]} numbers
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = (numbers, fn, init) => {
  let result = init
  for (let i = 0; i < numbers.length; i++) {
    result = fn(result, numbers[i])
  }
  return result
}

/**
 * reduce([1,2,3,4], (accum, curr) => accum + curr, 0) // 10
 * reduce([1,2,3,4], (accum, curr) => accum + curr * curr, 100) // 130
 * reduce([], (accum, curr) => 0, 25) // 25
 */
