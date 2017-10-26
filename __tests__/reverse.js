import reverse from '../src/reverse'

test('should return [3,2,1] when value [1, 2, 3]',
    () => expect(reverse([1, 2, 3])).toEqual([3, 2, 1])
)
