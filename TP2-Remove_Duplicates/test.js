import tests from './index';

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

function tester(functionToTest, title) {
    
    test(`${title}There are duplicates`, () => {
        expect(functionToTest([2, 3, 3, 3, 6, 9, 9])).toEqual([2,3,6,9]);
        expect(functionToTest([2, 2, 2, 11])).toEqual([2,11]);
    });
    
    test(`${title}Empty Array`, () => {
        expect(functionToTest([])).toEqual([]);
    });
}