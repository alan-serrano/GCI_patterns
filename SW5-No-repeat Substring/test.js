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
    test(`${title}return the length of the longest substring which has no repeating characters.`, () => {
        expect(functionToTest('aabccbb')).toBe(3);
        expect(functionToTest('abbbb')).toBe(2);
        expect(functionToTest('abccde')).toBe(3);
    });
}