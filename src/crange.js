import Z from './internal/Z'

/**
 * A function that builds a range array from given first parameter to second parameter. 
 * Third parameter defines current step.
 *
 * @func
 * @memberOf func
 * @since v0.0.1
 * @category Function
 * @sig Number -> Number -> Number -> Array
 * @param {Number} from
 * @param {Number} to
 * @param {Number} step
 * @return {Array}
 * @see func.range
 * @example
 *
 *      func.crange(-2, 2)   //=> [-2,-1,0,1,2]
 */
const crange = Z(f => acc => min => max => step => min > max ? acc : f([...acc, min])(min + step)(max)(step))([])

export default crange