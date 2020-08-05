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
        test(`${title}Return the smallest subarray with a given sum`, () => {
            expect(functionToTest(7, [2, 1, 5, 2, 3, 2])).toBe(2);
            expect(functionToTest(7, [2, 1, 5, 2, 8])).toBe(1);
            expect(functionToTest(8, [3, 4, 1, 1, 6])).toBe(3);
            expect(functionToTest(10, [1, 1, 1, 1, 10])).toBe(1);
            expect(functionToTest(5, [20, 1, 1, 1, 1])).toBe(1);
        });
    })

    describe('There is no a subarray with the condition ', ()=> {
        test(`${title}Return 0`, () => {
            expect(functionToTest(10, [1,2,1,2])).toEqual(0);
        });
    })
}