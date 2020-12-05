// Problem Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.


/**
 * Space Complexity O(1)
 * Time Complexity O(n)
 */
function findCycleLength(head) {
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if(slow === fast) {
            return calculateLength(slow);
        }
    }

    return 0;
}


function calculateLength(node) {
    let p1 = node;
    let length = 0;

    while(true) {
        length++;
        p1 = p1.next;

        if(p1 === node) {
            return length;
        }
    }
}

function find_cycle_length_educative(head) {
    let slow = head,
        fast = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (slow === fast) { // found the cycle
            return calculate_cycle_length_educative(slow);
        }
    }
    return 0;
}


function calculate_cycle_length_educative(slow) {
    let current = slow,
        cycle_length = 0;
    while (true) {
        current = current.next;
        cycle_length += 1;
        if (current === slow) {
            break;
        }
    }
    return cycle_length;
}

export default {
    findCycleLength,
    find_cycle_length_educative
};