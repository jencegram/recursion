/** product: calculate the product of an array of numbers. */

function product(nums, index = 0) {
  if (index === nums.length) return 1;
  return nums[index] * product(nums, index + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, index = 0, maxLength = 0) {
  if (index === words.length) return maxLength;
  maxLength = Math.max(words[index].length, maxLength);
  return longest(words, index + 1, maxLength);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0) {
  if (index >= str.length) return "";
  return (index % 2 === 0 ? str.charAt(index) : "") + everyOther(str, index + 1);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, left = 0) {
  const right = str.length - 1 - left;
  if (left >= right) return true;
  if (str[left] !== str[right]) return false;
  return isPalindrome(str, left + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if (index === arr.length) return -1;
  if (arr[index] === val) return index;
  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, index = null) {
  if (index === null) index = str.length - 1;
  if (index < 0) return "";
  return str[index] + revString(str, index - 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringsArray = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      stringsArray.push(obj[key]);
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      stringsArray = stringsArray.concat(gatherStrings(obj[key]));
    }
  }
  return stringsArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === val) return mid;
  if (arr[mid] < val) return binarySearch(arr, val, mid + 1, right);
  else return binarySearch(arr, val, left, mid - 1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
