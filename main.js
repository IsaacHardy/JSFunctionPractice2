// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x, y){
    if (x > y) {
      return x;
    } else {
      return y;
    }
};

max(1,2);
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z){
    if (x >= y && z) {
      return x;
    } else if (y >= x && z) {
      return y;
    } else if (z >= x && y) {
      return z;
    }
};

maxOfThree(1, 2, 4);
// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    var string = char[0];
    if (string === 'a') {
      return true;
    } else if (string === 'e') {
      return true;
    } else if (string === 'i') {
      return true;
    } else if (string === 'o') {
      return true;
    } else if (string === 'u') {
      return true;
    } else if (string === 'A') {
      return true;
    } else if (string === 'E') {
      return true;
    } else if (string === 'I') {
      return true;
    } else if (string === 'O') {
      return true;
    } else if (string === 'U') {
      return true;
    } else {
      return false;
    }
};

isVowel('Apple');
isVowel('apple');
isVowel('Flapple');

// function isVowel( char ) {
//   if ('aeiou'.indexOf(char) !== -1) {
//     return true;
//   } else {
//     return false;
//   }
// }  

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function translate(text) {

};

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
  return string.split('').reverse().join('');

};

reverse('hello test');
// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
var longestWord = '';

['hello', 'hi', 'yo', 'shalome'].forEach(function (word){
  
  if (word.length > longestWord.length) {
    longestWord = word;
  }

});



// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------
var longWords = [{name: 'isaac'}, {name: 'hello'},{name:  'bigwords'},{name:  'verylittlewords'}];
var i = 6;

longWords.filter(function (longWords){ 
  return longWords.name.length > i;
});

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}