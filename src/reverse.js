import creverse from './creverse'

/**
 * Uncurried version of reverse. A function that returns given reversed given array
 *
 * @func
 * @memberOf func
 * @since v0.0.1
 * @category Function
 * @sig Array -> Array
 * @param {Array} array
 * @return {Array} reversed array
 * @see func.creverse
 * @example
 *
 *      func.reverse([1, 2, 3])   //=>[3,2,1]
 */
const reverse = (arr) => creverse(arr)

export default reverse