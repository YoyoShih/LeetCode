
//  2021/04/14 My solve
//  speed: 2, memo: 4
var addTwoNumbers = function (l1, l2) {
    let p1 = l1, p2 = l2
    let num1 = p1.val
    let num2 = p2.val
    const newNode = new ListNode((num1 + num2)%10)
    let carry = Math.floor((num1 + num2)/10)
    let p3 = newNode, p4 = p3
    p1 = p1.next
    p2 = p2.next
    while(p1 !== null || p2 !== null){
        num1 = p1 == null ? 0 : p1.val
        num2 = p2 == null ? 0 : p2.val
        const newNode = new ListNode((num1 + num2 + carry)%10)
        carry = Math.floor((num1 + num2 + carry)/10)
        p3.next = newNode
        p3 = newNode
        p1 = p1 == null ? null : p1.next
        p2 = p2 == null ? null : p2.next
    }
    if(carry !== 0){
        const newNode = new ListNode(carry)
        p3.next = newNode
    }
    return p4
};