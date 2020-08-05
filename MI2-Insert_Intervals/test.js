import tests, {Interval} from './index';

test(`Interval Class exists`, () => {
    expect(typeof Interval).toBe('function');
});

test(`Interval is created`, () => {
    const interval = new Interval(1,4)
    expect(interval.start).toBe(1);
    expect(interval.end).toBe(4);
});


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
    test(`${title}Intervals are merged`, () => {
        expect(functionToTest(
            [
                new Interval(1, 3),
                new Interval(5, 7), 
                new Interval(8, 12)
            ],
            new Interval(4, 6)
        )).toEqual([
            new Interval(1,3),
            new Interval(4,7),
            new Interval(8, 12)
        ]);
        
        expect(functionToTest(
            [
                new Interval(1, 3),
                new Interval(5, 7), 
                new Interval(8, 12)
            ],
            new Interval(4, 10)
        )).toEqual([
            new Interval(1,3),
            new Interval(4,12),
        ]);
        
        expect(functionToTest(
            [
                new Interval(2, 3),
                new Interval(5, 7), 
            ],
            new Interval(1, 4)
        )).toEqual([
            new Interval(1,4),
            new Interval(5,7),
        ]);
        
        expect(functionToTest(
            [
                new Interval(3, 4),
                new Interval(5, 7), 
            ],
            new Interval(0, 2)
        )).toEqual([
            new Interval(0,2),
            new Interval(3,4),
            new Interval(5,7),
        ]);
        
        expect(functionToTest(
            [
                new Interval(3, 4),
                new Interval(8, 10), 
            ],
            new Interval(5, 7)
        )).toEqual([
            new Interval(3,4),
            new Interval(5,7),
            new Interval(8,10),
        ]);
    });
}