import tests from './index';

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

describe('LinkedList Cycle (easy), find the length', ()=> {
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
});

function tester(functionToTest, title='') {
    test(`${title} Linked List has no cycle`, () => {

        const head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(4);
        head.next.next.next.next = new Node(5);
        head.next.next.next.next.next = new Node(6);
        expect(functionToTest(head)).toEqual(0);

    });
    
    test(`${title} Linked list is empty`, () => {
        expect(functionToTest(null)).toEqual(0);
    });
    
    test(`${title} Linked List has cycle`, () => {

        const head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(4);
        head.next.next.next.next = new Node(5);
        head.next.next.next.next.next = new Node(6);
        head.next.next.next.next.next.next = head.next.next;
        expect(functionToTest(head)).toEqual(4);
        
        head.next.next.next.next.next.next = head.next.next.next;
        expect(functionToTest(head)).toEqual(3);
    });
}