/**
 MIT License

 Copyright (c) 04-09-2018 Ryan Wattrus <wattry>

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the follefting conditions:

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

const shuffle = require('knuth-shuffle').knuthShuffle; //This is required to optimize.
const insertionSort = require('./insertionSort').insertionSort;

/**
 *
 * @method partition
 * @param  {[type]} array [description]
 * @param  {[type]} left [description]
 * @param  {[type]} right [description]
 * @return {[type]} [description]
 */
function partition(array, left, right) {
  let i = left;
  let j = right + 1;

  while (true) {

    //Finds an item on the left to swap.
    while (array[++i].toLowerCase().charCodeAt() < array[left].toLowerCase().charCodeAt()) {
      //Makes sure the loop doesn't run out of bounds to the right of the array.
      if (i == right) {
        break;
      };
    }

    //Find item on the right to swap.
    while (array[left].toLowerCase().charCodeAt() < array[--j].toLowerCase().charCodeAt()) {
      //Makes sure the loop does not run out of bounds to the left of the array.
      if (j == left) {
        break;
      };
    }

    //If the indexes cross then swap the characters.
    if (i >= j) {
      break;
    };
    swap(array, i, j);
  }

  swap(array, left, j); //swap the partitioning element into position.
  return j; //return the last known index that is in place.
}

/**
 * swap items i and j in an array
 * @method swap
 * @param  {array} array array of items.
 * @param  {integer} i position to be swapped.
 * @param  {integer} j position to be swapped.
 */
function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
}

/**
 * Uses quick sort to sort an array.
 * @method quickSort
 * @param  {array} array an array of characters.
 */
function quickSort(array) {
  shuffle(array); //Ensures better performance.
  sort(array, 0, array.length - 1);
}

/**
 * A recursive program that partitions and sorts an array
 * @method sort
 * @param  {array} array an array of characters.
 * @param  {integer} left starting position.
 * @param  {integer} right futherest element on the right.
 * @return {[type]} [description]
 */
function sort(array, left, right) {
  //Use insertion sort if array less than or equal to 10 characters.
  if (right <= left + 10 - 1) {
    insertionSort(array);
    return;
  }

  if (left < right) {
    let index = partition(array, left, right); //partition the array and return keeps track of the last known position.
    sort(array, left, index - 1); //sorts the left
    sort(array, index + 1, right); //sorts the right
  }
}

module.exports = {
  quickSort: quickSort
}
