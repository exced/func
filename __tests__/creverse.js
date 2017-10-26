import creverse from '../src/creverse'

test('should return [3,2,1] when value [1, 2, 3]',
    () => expect(creverse([1, 2, 3])).toEqual([3, 2, 1])
)
