/**
 MIT License

 Copyright (c) 04-09-2018 Ryan Wattrus <wattry>

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

/**
 * Insertion sort algorithm function
 * @method insertionSort
 * @param  {array} unsorted an array of characters.
 */
function insertionSort(unsorted) {
  let n = unsorted.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j > 0; j--) {
      //Compares each element to that of the element to the left.
      if (unsorted[j].toLowerCase().charCodeAt() < unsorted[j-1].toLowerCase().charCodeAt()) {
        //If the element greater than the element swap them.
        swap(unsorted, j, j-1);
      } else {
        //If the element is not carry on.
        break;
      }
    }
  }
}

/**
 * Swaps two elements in an array at position j and j-1.
 * @method swap
 * @param  {array} array
 * @param  {integer} j an index for the jth element
 * @param  {integer} index an index for the jth - 1 element.
 */
function swap(array, j, index) {
  let temp = array[j];
  array[j] = array[index];
  array[index] = temp;
}

module.exports = {
  insertionSort: insertionSort
}
