let userWord = prompt('scrivi una parola e vediamo se è palindroma');
console.log(userWord);


function wordPalindrome(word) {

    let reverse = '';

    for (let index = word.length - 1; index >= 0; index--) {
        reverse += word[index];
    }

    return reverse;
}

let reversedWord = wordPalindrome(userWord); /*word is not defined*/
if (userWord === reversedWord) {
    console.log(userWord + ' è palindroma');
} else {
    console.log(userWord + ' non è palindroma');
}


