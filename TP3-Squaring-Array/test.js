const functions = require('./index');

test(`${name}: Function exists`, () => {
    expect(Object.keys(functions).length > 0).toBe(true);
    
    if(Object.keys(functions)>0) {
        for (const fn of Object.values(functions)) {
            expect(typeof fn).toBe('function');
        }
    }
});

for (const name in functions) {
    tester(functions[name], name)
}


function tester(fn, name) {
    
    test(`${name}: Array has negative and positive numbers`, () => {
        expect(fn([-2, -1, 0, 2, 3])).toEqual([0, 1, 4, 4, 9]);
        expect(fn([-3, -1, 0, 1, 2])).toEqual([0, 1, 1, 4, 9]);
    });
    
    test(`${name}: Array with only positive numbers`, () => {
        expect(fn([0, 3, 5, 6])).toEqual([0, 9, 25, 36]);
    });
    
    test(`${name}: Empty array`, () => {
        expect(fn([0, 3, 5, 6])).toEqual([0, 9, 25, 36]);
    });
    
}