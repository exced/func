import map from '../src/map'

test('should return [2,3,4] when value ([1, 2, 3], e => e + 1)',
    () => expect(map([1, 2, 3], e => e + 1)).toEqual([2, 3, 4])
)
