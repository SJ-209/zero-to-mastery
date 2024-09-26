//Create a funtion that puts a list  of numbers in order//

const array1 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function ArrayFromAbove(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }

  //Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]//
  