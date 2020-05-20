const AppTest = (() => {
  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  const reverseString = (string) => string.split('').reverse().join('');

  const caesarCypher = (string, key) => {
    let newString = '';
    for (let i = 0; i < string.length; i += 1) {
      if (string[i] === string[i].toUpperCase()) {
        const newCharUp = ((string.charCodeAt(i) + key - 65) % 26) + 65;
        newString += String.fromCharCode(newCharUp);
      } else if (string[i] === string[i].toLowerCase()) {
        const newCharDown = ((string.charCodeAt(i) + key - 97) % 26) + 97;
        newString += String.fromCharCode(newCharDown);
      }
    }
    return newString;
  };

  const analyze = (array) => ({
    average: array.reduce((sum, acc) => sum + acc) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  });

  return {
    capitalize,
    reverseString,
    caesarCypher,
    analyze,
  };
})();

export default AppTest;