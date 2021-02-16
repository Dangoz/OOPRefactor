import { ISortable } from "./iSoratble";

export class CharacterGroup implements ISortable {
  data: string;

  constructor(data: string) {
    this.data = data;
  }

  get length(): number {
    return this.data.length;
  }

  // convert to lowerCase and compare string value
  compare(leftPos: number, rightPos: number):boolean {
    return this.data[leftPos].toLowerCase() > this.data[rightPos].toLowerCase();
  }

  // swap left and right position of letters in a string
  swap(leftPos: number, rightPos: number): void {
    let letterList = this.data.split('');
    let temp = letterList[rightPos];
    letterList[rightPos] = letterList[leftPos];
    letterList[leftPos] = temp;
    this.data = letterList.join('');
  }
}