import crange from '../src/crange'

test('should return [-2,-1,0,1,2] when value (-2)(2)(1)',
    () => expect(crange(-2)(2)(1)).toEqual([-2, -1, 0, 1, 2])
)

test('should return [-2,-1,0,1,2] when value (-2)(2)',
    () => expect(crange(-2)(2)()).toEqual([-2, -1, 0, 1, 2])
)

test('should return [-2,-1,0,1,2] when value (-2)(2)(2)',
    () => expect(crange(-2)(2)(2)).toEqual([-2, 0, 2])
)