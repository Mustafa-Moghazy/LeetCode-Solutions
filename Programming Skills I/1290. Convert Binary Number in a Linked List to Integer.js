/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let ans = "", n = head;
    while( n !== null ){
        ans += n.val;
        n = n.next;
    }
    return parseInt(ans, 2);
};
