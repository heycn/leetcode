/**
 * @param {Function} fn
 * @return {Function}
 */
const memoize = fn => {
  const map = new Map()
  return (...args) => {
    const key = JSON.stringify(args)
    return map.has(key)
      ? map.get(key)
      : map.set(key, fn(...args)) && map.get(key)
  }
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */