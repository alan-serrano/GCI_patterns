const {tests: functions, Interval} = require('./index');

test(`Function exists`, () => {
    if(typeof functions === 'function') {
        expect(typeof functions).toBe('function');
    } else {
        expect(Object.keys(functions).length > 0).toBe(true);

        if(Object.keys(functions)>0) {
            for (const fn of Object.values(functions)) {
                expect(typeof fn).toBe('function');
            }
        }
    }
});

if(typeof functions === 'function') {
    tester(functions);
}

for (const name in functions) {
    tester(functions[name], `${name}: `)
}


function tester(fn, title='') {
    test(`${title}Return an array with averages of k contiguous values `, () => {
        expect(fn(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])).toEqual([2.2, 2.8, 2.4, 3.6, 2.8]);
    });
    
    test(`${title}Return an empty array when array.length is less than k`, () => {
        expect(fn(10, [1, 3, 2, 6, -1, 4, 1, 8, 2])).toEqual([]);
    });
}