import Z from './internal/Z'

/**
 * Uncurried version of map. Applied a function to each element of array and returns the array
 *
 * @func
 * @memberOf func
 * @since v0.0.1
 * @category Function
 * @sig Array -> Function -> Array
 * @param {Array} array to reduce
 * @param {Function} reducer
 * @return {Array}
 * @see func.cmap
 * @example
 *
 *      func.cmap([1, 2, 3])(e => e + 1)   //=>[2,3,4]
 */
const cmap = Z(f => ([x, ...xs]) => g => ((x === undefined && xs.length === 0) ? [] : [g(x), ...f(xs)(g)]))

export default cmap