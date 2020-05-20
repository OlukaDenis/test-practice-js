const AppTest = (() => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const reverseString = (string) => {
    return string.split('').reverse().join('');
  }

  const caesarCypher = (string, key) => {
    let newString = '';
    for(let i = 0; i < string.length; i++){
      if(string[i] == string[i].toUpperCase()){
        let newCharUp = (string.charCodeAt(i) + key - 65) % 26 + 65;
        newString += String.fromCharCode(newCharUp);
      }else if (string[i] == string[i].toLowerCase()){
        let newCharDown = (string.charCodeAt(i) + key - 97) % 26 + 97
        newString += String.fromCharCode(newCharDown);
      }
    }
    return newString;
  }

  return {
    capitalize,
    reverseString,
    caesarCypher
  };

})();

export default AppTest;