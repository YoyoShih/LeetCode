//  Best
var addTwoNumbers = function (l1, l2) {
    if (!l1) return l2
    if (!l2) return l1

    let p1 = l1, p2 = l2
    let carry = 0
    let p3 = new ListNode()
    let p4 = p3
    while(p1 || p2){
        let sum = (p1?.val || 0) + (p2?.val || 0)
        const newNode = new ListNode((sum + carry)%10)
        carry = Math.floor((sum + carry)/10)
        p3.next = newNode
        p3 = newNode
        p1 = p1?.next
        p2 = p2?.next
    }
    if(carry !== 0){
        const newNode = new ListNode(carry)
        p3.next = newNode
    }
    return p4.next
};

//  2021/04/14 My solve
//  speed: 2, memo: 4, clean: 2
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

//  Other people's solve
//  using "?" syntax to avoid using property on null    ***BEST***
//  speed: 5, memo: 3, clean: 4
var addTwoNumbers = function (l1, l2) {
    if (!l1) return l2  //  this two are important
    if (!l2) return l1  //  to avoid extreme condition
    
    let p1 = l1, p2 = l2
    let carry = 0
    let p3 = new ListNode()
    let p4 = p3
    while(p1 || p2){
        let sum = (p1?.val || 0) + (p2?.val || 0)
        const newNode = new ListNode((sum + carry)%10)
        carry = Math.floor((sum + carry)/10)
        p3.next = newNode
        p3 = newNode
        p1 = p1?.next
        p2 = p2?.next
    }
    if(carry !== 0){
        const newNode = new ListNode(carry)
        p3.next = newNode
    }
    return p4.next
};