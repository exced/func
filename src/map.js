import cmap from './cmap'

/**
 * curried version of cmap. Applied a function to each element of array and returns the array
 *
 * @func
 * @memberOf func
 * @since v0.0.1
 * @category Function
 * @sig Array -> Function -> Array
 * @param {Array} array to reduce
 * @param {Function} reducer
 * @return {Array}
 * @see func.map
 * @example
 *
 *      func.cmap([1, 2, 3], e => e + 1)   //=>[2,3,4]
 */
const map = (arr, f) => cmap(arr)(f)

export default map