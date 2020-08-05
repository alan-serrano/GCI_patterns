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
    
    test(`${title}Array has negative and positive numbers`, () => {
        expect(functionToTest([-2, -1, 0, 2, 3])).toEqual([0, 1, 4, 4, 9]);
        expect(functionToTest([-3, -1, 0, 1, 2])).toEqual([0, 1, 1, 4, 9]);
    });
    
    test(`${title}Array with only positive numbers`, () => {
        expect(functionToTest([0, 3, 5, 6])).toEqual([0, 9, 25, 36]);
    });
    
    test(`${title}Empty array`, () => {
        expect(functionToTest([0, 3, 5, 6])).toEqual([0, 9, 25, 36]);
    });
}