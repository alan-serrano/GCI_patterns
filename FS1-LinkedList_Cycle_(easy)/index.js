// Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.


function hasCycle(head) {
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if(fast == slow) return true;

    }

    return false;
}

function has_cycle_educative(head) {
    let slow = head,
        fast = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (slow === fast) {
            return true; // found the cycle
        }
    }
    return false;
}


export default {
    hasCycle,
    has_cycle_educative
};