import Z from './internal/Z'
import creduce from './creduce'

/**
 * A function that keep all elements of given array that matches given funciton
 *
 * @func
 * @memberOf func
 * @since v0.0.1
 * @category Function
 * @sig Array -> Function -> Array
 * @param {Array} array to filter
 * @param {Function} filter
 * @return {Array}
 * @see func.cfilter
 * @example
 *
 *      func.cfilter([1, 2, 3, 4, 5, 6])(e => e & 1)   //=>[1, 3, 5]
 */
const cfilter = Z(f => xs => g => creduce(xs)((acc, x) => g(x) ? [...acc, x] : acc)([]))

export default cfilter