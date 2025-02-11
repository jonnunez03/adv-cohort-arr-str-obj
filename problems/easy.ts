/*
 * Problem: Two Sum
 *
 * Given an array of numbers and a target sum, return indices of two numbers that add up to the target.
 * Assume exactly one solution exists, and the same element cannot be used twice.
 *
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]  // Because nums[0] + nums[1] = 2 + 7 = 9
 *
 */
const twoSum = (numArr: number[], targetSum: number) => {
  const numMap: Map<number, number> = new Map();
  for(let i = 0; i < numArr.length; i++) {
    const targetSubtracted = targetSum - numArr[i];
    if(numMap.has(targetSubtracted)) {
      return [numMap.get(targetSubtracted), i]
    }
    numMap.set(numArr[i], i);
  } 
}
// twoSum([2, 7, 11, 15], 9)
/*
 * Problem: Reverse Words in a String
 *
 * Given a string, reverse the order of words.
 *
 * Example:
 * Input: "the sky is blue"
 * Output: "blue is sky the"
 *
 */
const reverseWord = (str: string) => {
  return str.split(' ').reverse().join(' ');
}
/*
 * Problem: Most Common Character
 *
 * Given a string, find the most frequently occurring character.
 *
 * Example:
 * Input: "banana"
 * Output: "a"
 *
 */
const mostCommonChar = (str: string) => {
  let count: { [key: string]: number } = {};
  let charWithMost = '';
  let highestCount = 0;
  for(const char of str) {
    count[char] = (count[char] || 0) + 1;
    if(count[char] > highestCount) {
      charWithMost = char;
      highestCount =count[char];
    }
  }
  return charWithMost;
}
/*
 * Problem: Find Duplicates
 *
 * Given an array, return all the duplicate elements.
 *
 * Example:
 * Input: [4,3,2,7,8,2,3,1]
 * Output: [2,3]
 *
 */
const findDuplicates = (arr: any[]): any[] => {
  const multiple = new Set<any>();
  const result: any[] = [];
  for(const value of arr) {
    if(multiple.has(value)) {
      result.push(value);
    } else {
      multiple.add(value);
    }
  }
  return result;
}
/*
 * Problem: First Unique Character
 *
 * Given a string, return the index of the first unique character.
 *
 * Example:
 * Input: "leetcode"
 * Output: 0
 *
 */
const findUnique = (str: string): string => {
  const notUnique = new Set<string>();
  for(const char of str) {
    if(notUnique.has(char)) {
      notUnique.delete(char);
    } else {
      notUnique.add(char);
    }
  } 
  return [notUnique].join('');
}
/*
 * Problem: Find All Duplicates in an Array
 *
 * Given an array, return all duplicate elements.
 *
 * Example:
 * Input: [4,3,2,7,8,2,3,1]
 * Output: [2,3]
 *
 */