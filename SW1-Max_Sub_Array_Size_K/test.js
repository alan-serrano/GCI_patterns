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
    describe('Array has positive numbers',()=> {
        test(`${title}Return the maximum value of k contiguous values`, () => {
            expect(fn(3, [2, 1, 5, 1, 3, 2])).toBe(9);
            expect(fn(2, [2, 3, 4, 1, 5])).toBe(7);
        });
    })
    
    describe('Array has less values than K ', ()=> {
        test(`${title}Return false when array.length is less than k`, () => {
            expect(fn(10, [1, 3, 2, 6, -1, 4, 1, 8, 2])).toEqual(false);
        });
    })

    describe('Array has negative numbers ', ()=> {
        test(`${title}Return false when array.length is less than k`, () => {
            expect(fn(3, [-1, -3, -2, -6, -1, -4])).toEqual(-6);
        });
    })
}