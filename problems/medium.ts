/*
 * Problem: Merge Intervals
 *
 * Given an array of intervals, merge overlapping intervals.
 *
 * Example:
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 *
 */
const mergeIntervals = (intervals: number[]): number[] => {
  intervals.sort((a, b) => a[0] - b[0]);
  for(let i = 0; i < intervals.length - 1; i++) {
    const curVal = intervals[i];
    const nextVal = intervals[i + 1];
    if(curVal[1] >= nextVal[0]) {
      curVal[1] = Math.max(curVal[1], nextVal[1]);
      intervals.splice(i + 1, 1)
      i--
    }
  }
  return intervals;
}
/*
 * Problem: Group Anagrams
 *
 * Given an array of words, group anagrams together.
 *
 * Example:
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
 *
 */
const groupAnagrams = (anagrams: string[]): string[][] => {
  const anaMap = new Map<string, string[]>();
  for(const word of anagrams) {
    const sortedWord =  word.split('').sort().join('');
    if(!anaMap.has(sortedWord)) {
      anaMap.set(sortedWord, []);
    }
    anaMap.get(sortedWord)?.push(word);
  }
  const result: string[][] = Array.from(anaMap.values());
  return result;
}
/*
 * Problem: Longest Palindromic Substring
 *
 * Find the longest palindromic substring in a given string.
 *
 * Example:
 * Input: "babad"
 * Output: "bab" (or "aba")
 *
 */
const longestPalindrome = (str: string) => {
  const result: string[] = [];
  const strArr = str.split('');
  for(let i = 0; i < strArr.length; i++) {
    if(strArr[i].toLowerCase() === strArr[strArr.length - i - 1].toLowerCase()) {
      result.push(strArr[i])
    }
  }
  console.log(str)
  return result.length
}
// this one really had me stumped.
/*
 * Problem: Flatten Nested Object
 *
 * Convert a deeply nested object into a flat key-value map.
 *
 * Example:
 * Input: { a: { b: { c: 1 } }, d: 2 }
 * Output: { "a.b.c": 1, d: 2 }
 *
 * Hint: Use recursion + a helper function.
 */
const deepFlatten = (obj: Record<string, any>): Map<string, any> => {
  const map = new Map<string, number>()
  const flattenObj = (nestedObj: Record<string, any>, prefix = '') => {
      for (const [key, val] of Object.entries(nestedObj)) {
          const newKey = prefix ? `${prefix}.${key}` : key;
          if (typeof val === 'object') {
              flattenObj(val, newKey);
          } else if (typeof val === 'number') {
              map.set(newKey, val);
          }
      }
  };
  flattenObj(obj);

  for (const [key, val] of map.entries()) {
      console.log(key, val);
  }
  return map; 
};
/*
 * Problem: Deep Object Comparison
 *
 * Write a function to deeply compare two objects.
 *
 * Example:
 * Input: obj1 = { a: { b: 1 } }, obj2 = { a: { b: 1 } }
 * Output: true
 *
 * Hint: Use recursion and check nested properties.
 */
const deepFlattenCompare = (obj1: Record<string, any>, obj2: Record<string, any>): boolean => {
  const map1 = new Map<string, number>();
  const map2 = new Map<string, number>();

  const flattenObj = (nestedObj: Record<string, any>, map: Map<string, number>, prefix = '') => {
      for (const [key, val] of Object.entries(nestedObj)) {
          const newKey = prefix ? `${prefix}.${key}` : key;
          if (typeof val === 'object') {
              flattenObj(val, map, newKey);
          } else if (typeof val === 'number') {
              map.set(newKey, val);
          }
      }
  };

  flattenObj(obj1, map1);
  flattenObj(obj2, map2);

  const allKeys = new Set([...map1.keys(), ...map2.keys()]);

  for (const key of allKeys) {
      const val1 = map1.get(key);
      const val2 = map2.get(key);

      if (val1 !== val2) {
          console.log(`these objects are not equal`);
          return false;
      }
  }
  console.log(`these objects are equal`);
  return true;
};
/*
 * Problem: Maximum Subarray Sum
 *
 * Find the contiguous subarray with the largest sum.
 *
 * Example:
 * Input: [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6  // Subarray: [4,-1,2,1]
 *
 */
const maxSubArrSum = (nums: number[]): number => {
  let max = nums[0];
  let curVal = nums[0];
for(let i = 0; i < nums.length; i++) {
   curVal = Math.max(nums[i], curVal + nums[i]);
      max = Math.max(max, curVal);
}
return max;
}