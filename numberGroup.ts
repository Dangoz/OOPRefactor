import { ISortable } from "./iSoratble";

export class NumberGroup implements ISortable {
  data: number[];

  constructor(data: number[]) {
    this.data = data;
  }
  
  get length(): number {
    return this.data.length;
  }

  // compare two index (number)
  compare(leftPos: number, rightPos: number): boolean {
    return this.data[leftPos] > this.data[rightPos];
  }

  // swap number of two index
  swap(leftPos: number, rightPos: number): void {
    let temp = this.data[rightPos];
    this.data[rightPos] = this.data[leftPos];
    this.data[leftPos] = temp;
  }
}
