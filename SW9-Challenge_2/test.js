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
    test(`${title}return a list of starting indices of the anagrams of the pattern in the given string.`, () => {
        expect(functionToTest("ppqp", "pq")).toEqual([1, 2]);
        expect(functionToTest("abbcabc", "abc")).toEqual([2, 3, 4]);
    });
}