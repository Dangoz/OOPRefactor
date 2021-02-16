import { ISortable } from "./iSoratble";

export class SortUtil {
  colleciton: ISortable;

  constructor(collection: ISortable) {
    this.colleciton = collection;
  }

  // sort collection in ascending order
  sort(): void {
    const { length } = this.colleciton;
    let isSorted = false;
    let lastUnsorted = length - 1;

    while (!isSorted) {
      isSorted = true;

      for (let i = 0; i < lastUnsorted; i++) {
        if (this.colleciton.compare(i, i + 1)) {
          this.colleciton.swap(i, i + 1);
          isSorted = false;
        }
      }
      lastUnsorted--;
    }
  }
}