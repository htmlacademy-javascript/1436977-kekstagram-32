function checkStringLenght(string, maxLength) {
  if (string.length >= maxLength) {
    console.log(true)
    return true;
  } else {
    console.log(false)
    return false;
  }
}


// Строка короче 20 символов
checkStringLenght('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkStringLenght('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkStringLenght('проверяемая строка', 10); // false




function palindorm (str) {

  str = str.toLowerCase()
  str = str.replaceAll('', '');

  let reversed = ''

  for (let i = str.length -1; i >= 0 ; i--) {
    reversed = reversed + reversed[i]
  }
  return str === reversed;
}
palindorm ()
