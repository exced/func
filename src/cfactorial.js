import Z from './internal/Z'

/**
 * A function that returns factorial of given input
 *
 * @func
 * @memberOf func
 * @since v0.0.1
 * @category Function
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} factorial
 * @see func.factorial
 * @example
 *
 *      func.factorial(5) //=>120
 */
const cfactorial = Z(f => x => x == 0 ? 1 : x * f(x - 1))

export default cfactorial