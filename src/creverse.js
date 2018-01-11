import Z from './internal/Z'

/**
 * A function that returns given reversed given array
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
 *      func.creverse([1, 2, 3])   //=>[3,2,1]
 */
const creverse = Z(f => ([x, ...xs]) => xs.length === 0 ? [x] : [...f(xs), x])

export default creverse