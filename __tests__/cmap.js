import cmap from '../src/cmap'

test('should return 6 when value ([1, 2, 3])(e => e + 1)',
    () => expect(cmap([1, 2, 3])(e => e + 1)).toEqual([2, 3, 4])
)
