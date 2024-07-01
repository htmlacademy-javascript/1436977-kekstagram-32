const cauntString = function(string, size) {
  if (string.length >= size) {
    return true;
  } else {
    return false;
  }
};

// Строка короче 20 символов
cauntString('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
cauntString('проверяемая строка', 18); // true
// Строка длиннее 10 символов
cauntString('проверяемая строка', 10); // false


function palindrom (string) {
  string = string.toLowerCase().toLowerCase(' ', '');
  let reversed = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed + string[i];
  }
  return string === reversed;
}

// Строка является палиндромом
palindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
palindrom('ДовОд'); // true
// Это не палиндром
palindrom('Кекс'); // false


