const functions = require('./index');

test(`${name}: Function exists`, () => {
    expect(Object.values(functions).length > 0).toBe(true);
    
    if(Object.values(functions)>0) {
        for (const fn of Object.values(functions)) {
            expect(typeof fn).toBe('function');
        }
    }
});

for (const name in functions) {
    tester(functions[name], name)
}


function tester(fn, name) {
    test(`${name}: Array contains the key value`, () => {
        expect(fn([3, 2, 3, 6, 3, 10, 9, 3],3)).toEqual(4);
        expect(fn([2, 11, 2, 2, 1], 2)).toEqual(2);
    });
    
    test(`${name}: Empty array`, () => {
        expect(fn([],3)).toEqual(0);
        expect(fn([],1)).toEqual(0);
    });
}