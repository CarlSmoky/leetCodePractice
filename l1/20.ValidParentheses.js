// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 
const isValid = s => {
  const arr = [];
  for(let letter of s) {

    if(letter === ")" && arr[arr.length - 1] === "(") {
      arr.pop();
    } else if(letter === "]" && arr[arr.length - 1] === "[") {
      arr.pop();
    } else if(letter === "}" && arr[arr.length - 1] === "{") {
      arr.pop();
    } else {
      arr.push(letter);
    }
  }
  return arr.length === 0;
}


// Example 1:
console.log(isValid("()"));
// Input: s = "()"
// Output: true

// Example 2:
// console.log(isValid("()[]{}"));
// Input: s = "()[]{}"
// Output: true

// Example 3:
// console.log(isValid("(]"));
// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.