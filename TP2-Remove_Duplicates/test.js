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
    
    test(`${name}: There are duplicates`, () => {
        expect(fn([2, 3, 3, 3, 6, 9, 9])).toEqual([2,3,6,9]);
        expect(fn([2, 2, 2, 11])).toEqual([2,11]);
    });
    
    test(`${name}: Empty Array`, () => {
        expect(fn([])).toEqual([]);
    });
    
}