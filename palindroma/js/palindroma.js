let userWord = prompt('scrivi una parola e vediamo se è palindroma');
console.log(userWord);


function wordPalindrome(word) {
    const string = word.toString();
    let reverse = '';

    for (let index = string.length - 1; index >= 0; index--) {
        reverse += string[index];
    }

    return reverse;
}