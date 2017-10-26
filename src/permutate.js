import U from './internal/U'

/**
 * A function that returns all possible permutations of a given array
 *
 * @func
 * @memberOf func
 * @since v0.0.1
 * @category Function
 * @sig Array -> Array
 * @param {Array} array
 * @return {Array} permutations array
 * @see func.permutate
 * @example
 *
 *      func.permutate([1, 2, 3])   //=>[ [ 1, 2, 3 ],[ 1, 3, 2 ],[ 2, 1, 3 ],[ 2, 3, 1 ],[ 3, 1, 2 ],[ 3, 2, 1 ] ]
 */
const permutate = arr => arr.reduce(U(f => (acc, item, key, arr) =>
    acc.concat(arr.length > 1 && arr.filter((e, i) => i != key)
        .reduce(f(f), [])
        .map(perm => [item].concat(perm)) || item)
), [])

export default permutate