// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

/* 
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
 */


//var hi=["a", "b", "c"];
//console.log(myFunction(hi));

function myFunction(array){
	var returnArray =[];
	var num = '';
	var str = '';
	for(var i=0; i<array.length;i++){
		num = (i+1).toString();
		str = [num, ': ', array[i]].join('');
		returnArray[i]=str;
	};
  return returnArray;
}


// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

/* We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value. */

//const arr = N => [ /* the numbers 0 to N-1 */ ];
//console.log(myList(5));
function arr(n){
	var newArray=[];
	
	for (var i=0;i<n;i++){
        // keeps going as long as i is less than the input (n)
		newArray[i] = i;
	};
	return newArray;
};



// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript

/* The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

In this kata we will recreate that stunt... sort of.

You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

Return the resulting lamps string. See example tests for more clarity. */

//flyBy('xxxxxx', '====T'), 'ooooox')
var lamps = 'xxxxxx';
var drone = '====T';

//var hi = flyBy(lamps,drone);

//console.log(hi);

function flyBy(lamps, drone){
  
    var myLamps=[];
      for(let i in lamps){
          myLamps.push(lamps[i]);
      }
      //console.log(myLamps, 'lamparray');
    
    if(lamps.length >= drone.length){
          for(let i in drone){
              myLamps.splice(i,1,'o');
          };
    }else{
        for(let i in lamps){
          myLamps.splice(i,1,'o');
        };
    };
  
      lamps=myLamps.join('');
      return lamps;
  
  }


// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

/* It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty. */

var testArray = [1,2,3,4,5,];

//console.log(getAverage(testArray));

function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  var average = 0;
  var total = marks.length;
  var sum = 0;
  
  for (i=0;i<marks.length;i++){
	  sum += marks[i];
  };
  //average = sum/total;
  average = Math.floor(sum/total);
  
  return average;
}



// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043

/* No time for stories. Reverse an array, return the result. Do whatever you want with the original array. Don't use Array.prototype.reverse.

You have 30 bytes to spare.

Example: [1, 2, 3] → [3, 2, 1] */


reverse=a=>[...a].map(a.pop,a)