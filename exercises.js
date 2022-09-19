// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

//var what = createNewArray('hi',6);
//console.log(what);
//my answer:
// function createNewArray (word,number){
// 	const myNewArray=[];
// 	for(let i = 0; i < number; i++){
// 		myNewArray[i]=word.toString();
// 	}
// 	return myNewArray;
// };
// answer in review:
function myFunction(str, i) {
	const result = [];
	for(let j = 0; j < i; j++) {
		result.push(str);
	}
	return result;
}


// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------


//var what = reverseArray(['hi','how','are','you']);
//console.log(what);
//my answer:
// function reverseArray(inputArray){
// 	var myBackwardsArray = [];
// 	for(i = inputArray.length -1; i >=0; i--){
// 		myBackwardsArray.push(inputArray[i]);
// 	};
// 	return myBackwardsArray;
// };
//review answer: unshift - adds one or more elements to the beginning of an array and returns the new length of the array.
function reverseArray(arr) {
	const result = [];
	for(let i = 0; i < arr.length; i++) {
		result.unshift(arr[i]);
	}
	return result;
}




// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------



//var what = noFalsy([0,'hi', 0n,'how', null,'are', undefined,'you', false,'today', NaN,'FUN'])
//console.log(what);
//my answer:
// function noFalsy(inputArray){
// 	for(let i = 0; i < inputArray.length;i++){
// 		if(!inputArray[i]){
// 			inputArray.splice(i,1);
// 		};
// 	};
// 	return inputArray;
// };
//=======reviewed answer:========

function removeFalsyValues(arr) {
	return arr.filter(function(ele) {
		return Boolean(ele); //could also do: return!!ele;
	});
}



// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------


//var what = noFalsy([0,'hi', 0n,'how', null,'are', undefined,'you', false,'today', NaN,'FUN'])
//console.log(what);

//const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
//var what = returnProperties(myArray);
//console.log(what);
//my answer:
// function returnProperties (inputArray) {
// 	const myArray = [];
// 	for(let i = 0; i < inputArray.length; i++) {
// 		for(let j = 0; j < inputArray[i].length; j++) {
// 			myArray.push(inputArray[i][j] + ': '+ inputArray[i][j+1]);
// 			j+=1;
// 		};
// 	};
// 	return myArray;
// };

//review answer:===============
function answer1(arr) {
	const result = {};
	for(let i = 0; i < arr.length; i++) {
		result[arr[i][0]] = arr[i][1];
	}
	return result;
}

function answer2(arr) {
	const result = {};
	for(const index of arr) {
		result[index[0]] = index[1];
	}
}



// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------


//const testArray = [1,2,3,4,5,4,3];
//var what = removeDupes(testArray);
//console.log(what);

// function removeDupes(inputArray){
// 	const uniqueChars = [];
// 	inputArray.forEach((c) => {
// 		if (!uniqueChars.includes(c)) {
// 			uniqueChars.push(c);
// 		}
// 	})
// 	return uniqueChars;
// }

// reviewed answer ============

function removeDuplicates(arr) {
	const result = [];

	for(let i = 0; i < arr.length; i++) {
		if(!result.includes(arr[i])) {
			result.push(i);
			//element & index will change for each element. the array will not.
		}
	}
}

// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------


/* const a1 =[1,2,3,4];
const a2= [1,2,3,4];
const b1=[1,2,3,4,5];
const b2= [1,2,3,4];
const c1=[1,2,3,4];
const c2= [1,2,3,4,4];
const d1=[1,2,3,4];
const d2=[1,4,3,2];

console.log(compareArrays(a1,a2));
console.log(compareArrays(b1,b2));
console.log(compareArrays(c1,c2));
console.log(compareArrays(d1,d2)); */


function compareArrays(arr1, arr2){
// Iterate through each element in the
// first array and if some of them
// include the elements in the second
// array then return true.
	const count = 0;
	if(arr1.length === arr2.length){ //checks to see 'IF' arr1 and 2 are equal
		for(i=0;i < arr1.length;i++){
			if(arr2.includes(arr1[i])){
				count +=1;
			}
		};
	};
	if (count === arr1.length){
		return true;
	}else {
		return false;
	};
	
};

//=========answer from review:====================

function compareArrays(arr1, arr2) {
	if(arr1.length !== arr2.length){
		return false;
	}
	arr1.sort();
	arr2.sort();


	for(let i = 0; i < arr1.length; i++) {
		if(arr1[i] !== arr2[i]) {
			return false;
		}s
	}
	return true;
}
//there's no reason to loop here if the array is not the same.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// compareFn(a, b) return value						sort order
// 					> 0								sort a after b
//					< 0								sort a before b
//					=== 0 							keep original order of a and b


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------
// function split(arr) {
// 	const result = [];
// 	for(let )
// }









// -----------------------------------------------