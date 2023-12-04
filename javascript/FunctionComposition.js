/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = functions =>
  function (input) {
    let result = input
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result)
    }
    return result
  }

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */