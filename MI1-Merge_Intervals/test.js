const {tests: functions, Interval} = require('./index');

test(`Interval Class exists`, () => {
    expect(typeof Interval).toBe('function');
});

test(`Interval is created`, () => {
    const interval = new Interval(1,4)
    expect(interval.start).toBe(1);
    expect(interval.end).toBe(4);
});


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
    test(`${title}Intervals are merged`, () => {
        expect(fn([
            new Interval(1, 4),
            new Interval(2, 5), 
            new Interval(7, 9)
        ])).toEqual([
            new Interval(1,5),
            new Interval(7, 9)
        ]);

        expect(fn([
            new Interval(6, 7),
            new Interval(2, 4),
            new Interval(5, 9)
        ])).toEqual([
            new Interval(2, 4),
            new Interval(5, 9)
        ]);

        expect(fn([
            new Interval(1, 4),
            new Interval(2, 6),
            new Interval(3, 5)
        ])).toEqual([
            new Interval(1, 6)
        ]);

        expect(fn([
            new Interval(1, 4),
            new Interval(4, 6),
            new Interval(8, 10)
        ])).toEqual([
            new Interval(1, 6),
            new Interval(8,10)
        ]);
    });
}