# Alphabetizer Node.js Application

## Installation
1. This is a [node.js](https://www.nodejs.com) application, please ensure the latest stable version is installed.
2. Use git to clone application.
3. ```cd alphabetizer``` run ```npm install```

## How to use Alphabetizer
- The application help menu: ```node alphabetizer -h``` or ```node alphabetizer --help```
- A single string use: ```node alphabetizer -s "Virginia Tech"``` or ```node alphabetizer --sort "3 Blind Mice"```
- Multiple strings use: ```node alphabetizer -s "Virginia Tech" "3 Blind Mice" "Alphabetizer"```
- Use Insertion Sort algorithm ```node alphabetizer -i "Virginia Tech"```
- Use Quick Sort algorithm ```node alphabetizer -q "Virginia Tech" "3 Blind Mice"```

## Problem Area
The application required must use an efficient algorithm to sort an unknown number of strings. An efficient algorithm should consider time and space complexity.

Analyzing the algorithms used in popular contemporary browsers I have noted that Firefox and Safari use the Merge sort algorithm. Node.js version 9 runs on Google's V8 engine which implements insertion sort for <= 10 items and quick sort for > 10 items.

Insertion sort is sufficiently time efficient on smaller datasets but is as n grows, performance suffers. This sort uses near constance space. Quick sort is space and time efficient because it sorts in place, there are issues with worst case performance but we negate this by performing a shuffle. This algorithm is classified as unstable due to issues that occur with duplicate keys. Merge sort is a time efficient algorithm but requires more space. It is measurably slower because it does not perform an in place sort. Taking these properties into account this applications implements Google's discussed strategy of the aforementioned insertion and quick sort algorithms.

### Time and Space complexity

|Name          |Best Case  |Worst Case |Ave Case  |Space      |
|--------------|-----------|:---------:|:--------:|----------:|
|Quick sort    |Ω(n log(n))|Θ(n log(n))|O(n^2)    |O(log(n))  |
|Merge sort    |Ω(n log(n))|Θ(n log(n))|O(nlog(n))|O(n)       |
|Insertion sort|Ω(n) 	     |Θ(n^2) 	   |O(n^2) 	  |O(1)       |

## Specifications
1. Read in a series of strings (n) using console (minimum requirement)
2. Output the strings with the characters in alphabetical order.
3. Case insensitive, but characters should be output in the same form that they were input.
4. Non-alphabetic characters should be ignored and not included in the output string.

## Examples:
- “Virginia Tech” => “aceghiiinrTV”
- “3 Blind Mice” => “BcdeiilMn"

## Testing
This application uses Facebook's Jest framework to test various functions and execution times.

### Dot Env
To run tests the functions must be exported out of the alphabetizer module. This requires an environment variable. To add environment variables a .env file must be added to the project root and ```NODE_ENV=development``` must be added to the file. When the tests are run the private modules will then be exported.

### Reference Implementation tests
![alphabetizer-tests.png](/docs/images/alphabetizer-tests.png "Tests showing time performance of various methods.")
