import tests from './index';

console.log(tests)
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
    test(`${title}return the maximum number of fruits in both the baskets.`, () => {
        expect(functionToTest(['A', 'B', 'C', 'A', 'C'])).toBe(3);
        expect(functionToTest(['A', 'B', 'C', 'B', 'B', 'C'])).toBe(5);
    });
    
    test(`${title}Return 0 when array is empty`, () => {
        expect(functionToTest([])).toBe(0);
    });
}