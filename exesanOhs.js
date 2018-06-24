// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.

var string = 'xxxxm';

function XO(str) {
  console.log(str.toLowerCase().split('x'))
  console.log(str.toLowerCase().split('o'))
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

XO(string);