/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

// 解法1:
const addTwoPromises = async (promise1, promise2) => await promise1 + await promise2

// 解法2:
// const addTwoPromises = async (promise1, promise2) => Promise.all([promise1, promise2]).then(([a, b]) => a + b)

// 解法3:
// const addTwoPromises = async (promise1, promise2) => {
//   const [a, b] = await Promise.all([promise1, promise2])
//   return a + b
// }

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log) // 4
 */
