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
    test(`${title}Return the Longest Substring with K Distinct Characters`, () => {
        expect(functionToTest("araaci", 2)).toBe(4);
        expect(functionToTest("araaci", 1)).toBe(2);
        expect(functionToTest("cbbebi", 3)).toBe(5);
    });
    
    test(`${title}Return 0 when string has less than K distinct Characters`, () => {
        expect(functionToTest("cbbbbb", 3)).toBe(0);
        expect(functionToTest("", 3)).toBe(0);
    });
}