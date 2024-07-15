const _ = require('lodash');

// generate an array of numbers
const array = _.range(1, 10000000);

const binarySearch = (arr, hit) => {
    let right = arr.length - 1; // set the right pointer
    let left = 0; // set the left pointer
    let moves = 0; // set moves counter

    while (left <= right) {
        let mid = Math.floor((right + left) / 2); // calculate the mid index
        moves++; //calculate number of moves
        if (arr[mid] === hit) {
        console.log("Hit! "+ arr[mid]+" NumberOfMoves: "+moves);
        return mid; // found the target
        } 
        if (arr[mid] < hit) {
            left = mid + 1; // move the left pointer to the middle
            console.log("Searching rightside: left=" + left + ", right=" + right);
        } else {
            right = mid - 1; // move the right pointer to the middle
            console.log("Searching leftside: left=" + left + ", right=" + right);
        }
    }
}

binarySearch(array, 50000);

//  node binary-search.js