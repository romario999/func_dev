class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function swapPairs(head) {
    if (!head || !head.next) {
      return head;
    }
  
    const secondNode = head.next;
    const rest = secondNode.next;
    secondNode.next = head;
    head.next = swapPairs(rest);
  
    return secondNode;
  }
  
  
  let head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  
  let result = swapPairs(head);
  console.log("Output:", result); 


  // -----хвостова рекурсія --------------------

  class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function swapPairs(head, prev = null) {
    if (!head || !head.next) {
      return head || prev;
    }
  
    const secondNode = head.next;
    const rest = secondNode.next;
    secondNode.next = head;

    if (prev) {
      prev.next = secondNode;
    }

    return swapPairs(rest, head);
  }
  
  let head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  
  let result1 = swapPairs(head);
  console.log("Output:", result1); 