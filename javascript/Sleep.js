/**
 * @param {number} millis
 * @return {Promise}
 */
const sleep = async millis => {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve()
  //   }, millis)
  // })
  return new Promise(resolve => setTimeout(resolve, millis))
}


/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */