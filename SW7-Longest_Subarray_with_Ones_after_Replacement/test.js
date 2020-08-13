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


function tester(functionToTest, title='') {
    test(`${title}return the length of the longest contiguous subarray having all 1s..`, () => {
        expect(functionToTest([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)).toBe(6);
        expect(functionToTest([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)).toBe(9);
    });
}