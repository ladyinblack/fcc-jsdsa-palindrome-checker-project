// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Palindrome Checker</h1>`;

/** TODO
 * Return true if the given string is a palindrome. Otherwise return false.
 * A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case,a nd spacing.
 * NOTE: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
 * We'll pass strings with varying formats, such as racecar, RaceCard, and race CAR among others.
 * We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
 */

function palindrome(str) {
  const strRegex = /[a-zA-Z0-9]+/g;
  // const strArr = str.split('');
  const strArr = str.match(strRegex).join('').toLowerCase();
  // console.log(strArr);
  // console.log(strRegex.test(str));
  let strRev = '';
  for (let i = strArr.length - 1; i >= 0; i--) {
    strRev += strArr[i];
  }
  // console.log(strRev);
  // console.log(strArr == strRev);

  /*
  for (let i = 0; i < strArr.length; i++) {
    let first = strArr[i];
    let last = strArr[strArr.length - 1 - i];
    // console.log(first, last, first == last);
    return first == last;
  }
  */
  // return strArr == strArr.split('').reverse().join('');
  return strArr == strRev;
}

console.log('hippo =>', palindrome('hippo'));
console.log('eye =>', palindrome('eye')); // true
console.log('_eye =>', palindrome('_eye')); // true
console.log('race car =>', palindrome('race car')); // true
console.log('not a palindrome =>', palindrome('not a palindrome')); // false
console.log(
  'A man, a plan, a canal, Panama =>',
  palindrome('A man, a plan, a canal. Panama')
); // true
console.log('never odd or even =>', palindrome('never odd or even')); //true
console.log('nope =>', palindrome('nope')); // false
console.log('almostomla =>', palindrome('almostomla')); // false
console.log(
  'My age is 0, 0 si ega ym. =>',
  palindrome('My age is 0, 0 si ega ym.')
); // true
console.log('1 eye for of 1 eye. =>', palindrome('1 eye for of 1 eye.')); // false
console.log('0_0 (: /-\\ :) 0_0 =>', palindrome('0_0 (: /- :) 0_0')); // true
console.log('five|\\_/|four =>', palindrome('five|\\_/|four')); // false
