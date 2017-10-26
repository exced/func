import Z from './internal/Z'

/**
 * Curried version of reduce. A fold right function
 *
 * @func
 * @memberOf func
 * @since v0.0.1
 * @category Function
 * @sig Array -> Function -> (*, *)-> * -> *
 * @param {Array} array to reduce
 * @param {Function} reducer
 * @param {*} empty tail recursion value
 * @return {*}
 * @see func.reduce
 * @example
 *
 *      func.creduce([1, 2, 3])((acc, curr) => acc + curr)(0)   //=>6
 */
const creduce = Z(g => a => cb => i => !a.length ? i : g(a.slice(1))(cb)(cb(i, a[0])))

export default creduce