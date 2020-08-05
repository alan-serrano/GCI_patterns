import tests from './index'

test(`Function exists`, () => {
    if(typeof tests === 'function') {
        expect(typeof tests).toBe('function');
    } else {
        expect(Object.keys(tests).length > 0).toBe(true);

        if(Object.keys(tests)>0) {
            for (const fn of Object.values(tests)) {
                expect(typeof fn).toBe('function');
            }
        }
    }
});

if(typeof tests === 'function') {
    tester(tests);
}

for (const name in tests) {
    tester(tests[name], `${name}: `)
}


function tester(functionToTest, title='') {
    describe('Array has positive numbers',()=> {
        test(`${title}Return the maximum value of k contiguous values`, () => {
            expect(functionToTest(3, [2, 1, 5, 1, 3, 2])).toBe(9);
            expect(functionToTest(2, [2, 3, 4, 1, 5])).toBe(7);
        });
    })
    
    describe('Array has less values than K ', ()=> {
        test(`${title}Return false when array.length is less than k`, () => {
            expect(functionToTest(10, [1, 3, 2, 6, -1, 4, 1, 8, 2])).toEqual(false);
        });
    })

    describe('Array has negative numbers ', ()=> {
        test(`${title}Return false when array.length is less than k`, () => {
            expect(functionToTest(3, [-1, -3, -2, -6, -1, -4])).toEqual(-6);
        });
    })
}