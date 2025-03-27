// 27 March 2025

// Replace With Alphabet Position

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
  return (text.toLowerCase().match(/[a-z]/g) || []) // Pastikan tidak null
    .map((char) => char.charCodeAt(0) - 96) // Konversi ke posisi alfabet
    .join(" "); // Gabungkan hasilnya dengan spasi
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
