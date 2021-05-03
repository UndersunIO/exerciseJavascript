let word = process.argv[2];
word = word.split("");

word.forEach((selectword, index) => {
    if (index%2) {
        word[index] = selectword.toUpperCase();
    } else {
        word[index] = selectword.toLowerCase();
           }
});

console.log(word.join(""))