/**
 * @param {string} val
 * @return {Object}
 */
const expect = val => ({
  toBe: _val => {
    if (_val !== val) throw new Error("Not Equal")
    return true
  },
  notToBe: _val => {
    if (_val === val) throw new Error("Equal")
    return true
  }
})

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */