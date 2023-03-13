function blindMice(str) {
  // Split the string into an array of characters
  const chars = str.split('');
  let count = 0;
  let i = 0;

  // Iterate over the characters and count the blind mice
  while (i < chars.length) {
    if (chars[i] === 'M' && chars[i + 1] === '~') {
      count++;
      i += 2; // Skip the blind mouse and its tail
    } else {
      i++; // Move to the next character
    }
  }

  return count;
}

// "MM ~MM~C~MM~M~" à return the number 3
// "~M~M~MC MM" à return the number 1
// "~M CM~~M~M" à return the number 2

console.log(blindMice("MM ~MM~C~MM~M~"))
console.log(blindMice("~M~M~MC MM"))
console.log(blindMice("~M CM~~M~M"))