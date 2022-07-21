// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// const longestPalindrome = s => {
//   const countLetters = [...s].reduce((acc, cur) => {
//     return { ...acc, [cur]: (acc[cur] + 1 || 1) }
//   }, {})
  
//   const letters = Object.keys(countLetters);
//   if (letters.length === 1) return countLetters[letters[0]];
//   const oddNumLetterArr = Object.values(countLetters).filter(value => value % 2 !== 0);
//   const initialNum = (letters.length === 3 && oddNumLetterArr.length > 0) || oddNumLetterArr.length > 0 ? 1 : 0;
//   return Object.values(countLetters).reduce((acc, cur) => {
//     return cur % 2 === 0 ? acc + cur : acc + cur - 1;
//   }, initialNum)
// }

//Refactor
const longestPalindrome = s => {
  let longest = 0;
  let keys = {};

    for (const char of s) {
        // Keep track of character count in the keys object
        keys[char] = (keys[char] || 0) + 1;
        // If add 2 to the longest variable everytime we hit an even number count
        if (keys[char] % 2 == 0) longest += 2;
    }
    // If s.length is greater than longest then we know that we can add a unique char in the middle of the palindromegit
    return s.length > longest ? longest + 1 : longest;
};

// Example 1:
console.log(longestPalindrome("abccccdd"));
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:
console.log(longestPalindrome("a"));

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

// Example 3:
console.log(longestPalindrome("bb"));
//2

// Example 4:
console.log(longestPalindrome("ccc"));
//3

// Example 5:
console.log(longestPalindrome("bananas"));
//5

//example 6;
const s = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
// const s = "civilwartestingwhetherthatna"
console.log(longestPalindrome(s));
//983

console.log(longestPalindrome("tattarrattat"));
//12

console.log(longestPalindrome("adam"));
//3

console.log(longestPalindrome("abcba"));
//5
console.log(longestPalindrome("ABCDBCDA"));
//8

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.