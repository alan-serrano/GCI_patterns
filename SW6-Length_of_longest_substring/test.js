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
    test(`${title}return the length of the longest substring having the same letters after replacement.`, () => {
        expect(functionToTest('aabccbb', 2)).toBe(5);
        expect(functionToTest('abbcb', 1)).toBe(4);
        expect(functionToTest('abccde', 1)).toBe(3);
        expect(functionToTest('aabcde', 1)).toBe(3);
    });
}