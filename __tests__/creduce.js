import creduce from '../src/creduce'

test('should return 6 when value [1, 2, 3])((acc, curr) => acc + curr)(0)',
    () => expect(creduce([1, 2, 3])((acc, curr) => acc + curr)(0)).toBe(6)
)
