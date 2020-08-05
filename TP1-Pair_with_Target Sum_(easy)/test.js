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
    test(`${title}Pair of number exists`, () => {
        expect(functionToTest([1, 2, 3, 4, 6], 6).join(',')).toEqual('1,3');
        expect(functionToTest([2, 5, 9, 11], 11).join(',')).toEqual('0,2');
    });
    
    test(`${title}Pair of number does not exist`, () => {
        expect(functionToTest([1, 2, 3, 4, 6], 20).join(',')).toEqual('-1,-1');
        expect(functionToTest([2, 5, 9, 11], 4).join(',')).toEqual('-1,-1');
    });
}