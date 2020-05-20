const AppTest = (() => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const reverseString = (string) => {
    return string.split('').reverse().join('');
  }

  return {
    capitalize,
    reverseString
  };

})();

export default AppTest;