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
        test(`${title}Return the smallest subarray with a given sum`, () => {
            expect(fn(7, [2, 1, 5, 2, 3, 2])).toBe(2);
            expect(fn(7, [2, 1, 5, 2, 8])).toBe(1);
            expect(fn(8, [3, 4, 1, 1, 6])).toBe(3);
            expect(fn(10, [1, 1, 1, 1, 10])).toBe(1);
            expect(fn(5, [20, 1, 1, 1, 1])).toBe(1);
        });
    })

    describe('There is no a subarray with the condition ', ()=> {
        test(`${title}Return 0`, () => {
            expect(fn(10, [1,2,1,2])).toEqual(0);
        });
    })
}