import crange from './crange'

/**
 * Uncurried version of crange. A function that builds a range array from given first parameter to second parameter. 
 * Third parameter defines current step.
 *
 * @func
 * @memberOf func
 * @since v0.0.1
 * @category Function
 * @sig Number -> Number -> Number -> Array
 * @param {Number} fromA
 * @param {Number} toB
 * @param {Number} step
 * @return {Array}
 * @see func.crange
 * @example
 *
 *      func.range(-2, 2)   //=> [-2,-1,0,1,2]
 */
const range = (fromA, toB, step) => crange(fromA)(toB)(step)

export default range