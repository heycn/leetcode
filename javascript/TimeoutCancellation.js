/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
const cancellable = (fn, args, t) => {

  const timeoutFn = setTimeout(() => {
    fn.apply(undefined, args)
  }, t)

  return () => {
    clearTimeout(timeoutFn)
  }
}



/**
 * const fn = cancellable((...p) => console.log(...p), [1, 2, 3], 500) // 不输出 1 2 3
 * setTimeout(fn, 300)
 *
 * const fn = cancellable((...p) => console.log(...p), [1, 2, 3], 500) // 输出 1 2 3
 * setTimeout(fn, 1000)
 */
