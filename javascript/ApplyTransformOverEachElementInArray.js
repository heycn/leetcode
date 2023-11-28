/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = (arr, fn) => {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = fn(arr[i], i)
  }
  return newArr
}

/**
 * map([1, 2, 3], x => x * 2) // [2, 4, 6]
 * map([1, 2, 3], x => x + 1) // [2, 3, 4]
 * map([1, 2, 3], () => 100) // [100, 100, 100]
 */
