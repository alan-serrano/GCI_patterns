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
    test(`${title}: Array contains the key value`, () => {
        expect(functionToTest([3, 2, 3, 6, 3, 10, 9, 3],3)).toEqual(4);
        expect(functionToTest([2, 11, 2, 2, 1], 2)).toEqual(2);
    });
    
    test(`${title}: Empty array`, () => {
        expect(functionToTest([],3)).toEqual(0);
        expect(functionToTest([],1)).toEqual(0);
    });
}