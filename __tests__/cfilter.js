import cfilter from '../src/cfilter'

test('should return [1, 3, 5] when value ([1, 2, 3, 4, 5, 6])(e => e & 1)',
    () => expect(cfilter([1, 2, 3, 4, 5, 6])(e => e & 1)).toEqual([1, 3, 5])
)
