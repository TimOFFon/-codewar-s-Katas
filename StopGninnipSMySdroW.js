function spinWords(string) {
    //TODO Have fun :)
    let splitArr = string.split(' ');
    let reverseWords = [];
    for (let i = 0; i < splitArr.length; i++) {
        if (splitArr[i].length > 5) {
            reverseWords = splitArr[i].split('').reverse();
            reverseWords = reverseWords.join('');
            splitArr[i] = reverseWords;
        }
    }
    return splitArr.toString().replace(/,/g, ' ');
}
