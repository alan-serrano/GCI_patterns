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
    test(`${title}find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words.`, () => {
        expect(functionToTest("catfoxcat", ["cat", "fox"])).toEqual([0, 3]);
        expect(functionToTest("catcatfoxfox", ["cat", "fox"])).toEqual([3]);
        expect(functionToTest("foxfoxcat", ["cat", "cat"])).toEqual([]);
    });
}