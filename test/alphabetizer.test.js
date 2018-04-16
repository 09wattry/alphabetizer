/**
 MIT License

 Copyright (c) 04-07-2018 Ryan Wattrus <wattry>

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/

const alphabetizer = require('../alphabetizer');
const quickSort = require('../src/quickSort').quickSort;
const insertionSort = require('../src/insertionSort').insertionSort;

describe('series of tests to test isValid()', () => {

  test('it should return true', () => {
    expect(alphabetizer.isValid("a")).toBe(true);
  });

  test('it should return true', () => {
    expect(alphabetizer.isValid("A")).toBe(true);
  });

  test('it should return true', () => {
    expect(alphabetizer.isValid("z")).toBe(true);
  });

  test('it should return true', () => {
    expect(alphabetizer.isValid("Z")).toBe(true);
  });

  test('it should return true', () => {
    expect(alphabetizer.isValid("V")).toBe(true);
  });

  test('it should return true', () => {
    expect(alphabetizer.isValid("v")).toBe(true);
  });

  test('it should return true', () => {
    expect(alphabetizer.isValid("L")).toBe(true);
  });

  test('it should return true', () => {
    expect(alphabetizer.isValid("l")).toBe(true);
  });

  test('it should return false', () => {
    expect(alphabetizer.isValid("$")).toBe(false);
  });

  test('it should return false', () => {
    expect(alphabetizer.isValid(" ")).toBe(false);
  });

  test('it should return false', () => {
    expect(alphabetizer.isValid("_")).toBe(false);
  });

  test('it should return false', () => {
    expect(alphabetizer.isValid("-")).toBe(false);
  });
});

describe('series of tests for filter()', () => {
  let VT = "Virginia Tech";
  let threeBM = "3 Blind Mice";

  test('it should filter out all special characters and spaces', () => {
    expect(alphabetizer.filter("  A@B#c$d%E0F^g6h*  ")).toEqual(['A', 'B', 'c', 'd', 'E', 'F', 'g', 'h']);
  });

  test('it should filter out all special characters and spaces in VT', () => {
    expect(alphabetizer.filter(VT)).toEqual(['V', 'i', 'r', 'g', 'i', 'n', 'i', 'a', 'T', 'e', 'c', 'h']);
  });

  test('it should filter out all special characters and spaces in threeBM', () => {
    expect(alphabetizer.filter(threeBM)).toEqual(['B', 'l', 'i', 'n', 'd', 'M', 'i', 'c', 'e']);
  });
});

describe('series of tests for insertionSort()', () => {
  let VT = ['V', 'i', 'r', 'g', 'i', 'n', 'i', 'a', 'T', 'e', 'c', 'h'];
  let threeBM = ['B', 'l', 'i', 'n', 'd', 'M', 'i', 'c', 'e'];

  test('it should insertion sort VT', () => {
    insertionSort(VT);
    expect(VT).toEqual(["a", "c", "e", "g", "h", "i", "i", "i", "n", "r", "T", "V"]);
  });

  test('it should quick sort threeBM', () => {
    insertionSort(threeBM);
    expect(threeBM).toEqual(["B", "c", "d", "e", "i", "i", "l", "M", "n"]);
  });

});

describe('series of tests for quickSort()', () => {
  let VT = ['V', 'i', 'r', 'g', 'i', 'n', 'i', 'a', 'T', 'e', 'c', 'h'];
  let threeBM = ['B', 'l', 'i', 'n', 'd', 'M', 'i', 'c', 'e'];

  test('it should quick sort VT', () => {
    quickSort(VT);
    expect(VT).toEqual(["a", "c", "e", "g", "h", "i", "i", "i", "n", "r", "T", "V"]);
  });

  test('it should quick sort threeBM', () => {
    quickSort(threeBM);
    expect(threeBM).toEqual(["B", "c", "d", "e", "i", "i", "l", "M", "n"]);
  });

});

describe('series of tests for sort()', () => {
  let VT = "Virginia Tech";
  let threeBM = "3 Blind Mice";

  test('it should return a sorted string  of VT using quick sort', () => {
    expect(alphabetizer.sort(VT)).toEqual("aceghiiinrTV");
  });

  test('it should return a sorted string of threeBM sorted using insertion sort', () => {
    expect(alphabetizer.sort(threeBM)).toEqual("BcdeiilMn");
  });
});

describe('series of tests for V8 array.sort()', () => {
  let VT = "Virginia Tech";
  let threeBM = "3 Blind Mice";

  test('it should return a sorted string  of VT using V8 sort()', () => {
    expect(alphabetizer.filter(VT).sort().join().replace(/,/g, "")).toEqual("TVaceghiiinr");
  });

  test('it should return a sorted string of threeBM sorted using  V8 sort()', () => {
    expect(alphabetizer.filter(threeBM).sort().join().replace(/,/g, "")).toEqual("BMcdeiiln");
  });
});
