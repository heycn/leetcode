/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = (arr, fn) => {
  const newArr = []
  for (let i = 0; i < arr.length; i++)
    fn(arr[i], i) && newArr.push(arr[i])
  return newArr
}

/**
 * filter([0,10,20,30], n => n > 10) // [20,30]
 * filter([1,2,3], (n, i) => i === 0) // [1]
 * filter([-2,-1,0,1,2], n => n + 1) // [-2,0,1,2]
 */
