//1. https://leetcode.com/problems/reverse-string/

 function reverser(word){
    let change = word.split('');
    let newRever = change.reverse();
    return newRever;
}

console.log(reverser('hello world'));



//2. https://leetcode.com/problems/shuffle-string/

function restoreString(s,indices){
    let n = s.length;
    let shuffled = new Array(n);
    
    indices.forEach(function( word,i){
        shuffled[word] = s[i]
    })
    return shuffled.join('');
}

console.log(restoreString('codelet',[4,5,6,7,0,1,2,3]));

//3. https://leetcode.com/problems/largest-odd-number-in-string/

function largestValue (num){
    
    let splitted = num.split('');
    if(splitted % 2 !== 0){
    return `these are odd ${num}`
}
else{
    return `There is no odd number ${num}`
}
}

console.log(largestValue(2345))

//4.https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/

function isPrefixString(s, words){
    let prefix = '';
    let isPrefix = false
    words.forEach(function(word){
        prefix += word;
        if (prefix === s){
            isPrefix = true;
        }
        else{
            return isPrefix;
        }
        
    })
}

console.log(isPrefixString('iloveleetcode','apple'));

//5. 