/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let n = head, mid = head;
    while( n !== null && n.next !== null  ){
        n = n.next.next;
        mid = mid.next
    }
    return mid;

};
