// function solution(arr, target) {
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let y = i + 1; y < arr.length; y++) {
// 			if (arr[i] + arr[y] == target) {
// 				return [arr[i], arr[y]];
// 			}
// 		}
// 	}
// }

// console.log(solution([2, 4, 3, 5], 10));

function isPalindrome(x) {
	// const value = x.toString().split("").reverse().join("");
	// if (parseInt(value) * Math.sign(x) === x) {
	// 	return "true";
	// }

	// return "false";

	if (x < 0) {
		return false;
	}

	let number = x;
	let reverse = 0;
	while (number > 0) {
		reverse = reverse * 10 + (number % 10);
		number = parseInt(number / 10);
	}

	return x === reverse;
}

console.log(isPalindrome(121));
