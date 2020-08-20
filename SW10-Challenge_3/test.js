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
    test(`${title}find the smallest substring in the given string which has all the characters of the given pattern.`, () => {
        expect(functionToTest("aabdec", "abc")).toBe("abdec");
        expect(functionToTest("abdabca", "abc")).toBe("abc");
        expect(functionToTest("abdabca", "abbc")).toBe("bdabc");
        expect(functionToTest("adcad", "abc")).toBe("");
    });
}