import cfactorial from './cfactorial'

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
const factorial = (n) => cfactorial(n)

export default factorial