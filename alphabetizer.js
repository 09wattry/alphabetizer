#!/usr/bin/node

/**
 MIT License

 Copyright (c) 04-06-2018 Ryan Wattrus <wattry>

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

'use strict';

const program = require('commander');
const quickSort = require('./src/quickSort').quickSort;
const insertionSort = require('./src/insertionSort').insertionSort;

require('dotenv').config();

//Builds up the command line options and help menu.
program
  .version('1.0.0', '-v, --version')
  .usage('[options] "string"')
  .option('-s, --sort', 'Sort')
  .option('-i, --insertion', 'Use Insertion Sort algorithm')
  .option('-m, --merge', 'Use Merge Sort algorithm')
  .option('-q, --quick', 'Use Quick Sort algorithm')
  .parse(process.argv);

/*
 * Check which option was called and use the sort option.
 */

if (program.sort) {
  program.args.forEach((value, index) => {
    console.log(sort(value));
  });
}

if (program.insertion) {
  program.args.forEach((value, index) => {
    let unsorted = filter(value);
    insertionSort(unsorted)
    console.log(merge(unsorted));
  });
}

if (program.quick) {
  program.args.forEach((value, index) => {
    let unsorted = filter(value);
    quickSort(unsorted)
    console.log(merge(unsorted));
  });
}

/**
 * Removes any characters that are not alphabetical and creates an array of the string.
 * @return {Array} returns an array of array's containing the characters of the input strings
 */
function filter(unfiltered) {
  let filtered = [];
  //We have to filter out all the spaces and special characters.
  for (let char of unfiltered) {
    if (isValid(char)) {
      filtered.push(char);
    }
  }
  return filtered;
}

/**
 * Sorts a string in ascending order and outputs a sorted string regardless of case.
 * @method sort
 * @param  {string} string a word, sentence or phrase.
 * @return {string} a string of the sorted input string.
 */
function sort(string) {
  let unsorted = filter(string);

  if (unsorted.length <= 10) {
    insertionSort(unsorted);
  } else {
    quickSort(unsorted);
  }
  return merge(unsorted);
}

/**
 * Converts an array of characters to a string and removes all commas.
 * @method merge
 * @param  {array} string an array of characters.
 * @return {string} a string of the provided array.
 */
function merge(array) {
  return array.join().replace(/,/g, "");
}

/**
 * Checks a character and returns if in the range a-z or A-Z.
 * @param  {string} char a character
 * @return {Boolean}  the result of the test to check if the character is in the range a-z or A-Z.
 */
function isValid(char) {
  return /[a-zA-Z]/.test(char);
}

/*If we are in a development environment export the modules for our tests.
 * Otherwise this should be a private module.
 **/
if (process.env.NODE_ENV == "development") {
  module.exports = {
    filter: filter,
    sort: sort,
    isValid: isValid
  }

}