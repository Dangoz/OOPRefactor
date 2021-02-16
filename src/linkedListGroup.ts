import { ISortable } from "./iSoratble";

class Node {
  next: Node | null = null;
  data: number;
  constructor(data: number) {
    this.data = data;
  }
}

export class LinkedListGroup implements ISortable {
  head: Node | null = null;
  
  // create Node out of data and attach to end of list
  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  // return number of Nodes in List
  get length(): number {
    if (!this.head) {
      return 0;
    } else {
      
      // start at head, count until the last node
      let count = 0;
      let node: Node | null = this.head;
      while(node) {
        node = node.next;
        count++;
      }
      return count;
    }
  }

  // return the Node at a given index
  at(index: number): Node {
    if (!this.head) {
      throw new Error("Error: Index out of bounds");
    }
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error("Error: Index out of bounds");
  }

  // print Node data
  print() {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }

  // compare leftPos data to rightPos data
  compare(leftPos: number, rightPos: number): boolean {
    return this.at(leftPos).data > this.at(rightPos).data;
  }

  // swap leftPos Node with rightPos Node
  swap(leftPos: number, rightPos: number): void {

    // previous and current Nodes of leftPos and rightPos
    let previousRight = this.at(rightPos - 1);
    let currentRight = this.at(rightPos);
    let currentLeft = this.at(leftPos);

    // if leftPos Node is head, set rightPos Node as head
    if (leftPos == 0) {
      this.head = currentRight;
    } else {

      // otherwise, declare prev Node and swap prev pointers
      let previousLeft = this.at(leftPos - 1);
      previousLeft.next = currentRight;
    }
    
    // swap pointer of prevRight to left
    previousRight.next = currentLeft;

    // check for adjacency, swap pointers of current right and left
    let temp = currentRight.next;
    if (rightPos - leftPos != 1) {
      currentRight.next = currentLeft.next;
    } else {
      currentRight.next = currentLeft;
    }
    currentLeft.next = temp; 
  }
}
