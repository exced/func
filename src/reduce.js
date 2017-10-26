import creduce from './creduce'

/**
 * Uncurried version of creduce. A array reduce function
 *
 * @func
 * @memberOf func
 * @since v0.0.1
 * @category Function
 * @sig Array -> Function -> (*, *)-> * -> *
 * @param {Array} arr array to reduce
 * @param {Function} reducer
 * @param {*} empty tail recursion value
 * @return {Array}
 * @see func.creduce
 * @example
 *
 *      func.reduce([1, 2, 3], (acc, curr) => acc + curr, 0)   //=>6
 */
const reduce = (arr, reducer, empty) => creduce(arr)(reducer)(empty)

export default reduce