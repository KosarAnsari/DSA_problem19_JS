var longestSubstring = function(s){
   
    if(!s){
        return 0;
    }
     let end = 0;
    let start = 0;
    let maxlength = 0;

    const uniqueChar = new Set();
    while(end < s.length){
        if(!uniqueChar.has(s[end])){
            uniqueChar.add(s[end]);
             end++;
            maxlength = Math.max(maxlength,uniqueChar.size);
           
        }else{
            uniqueChar.delete(s[start]);
            start++;
        }
    }
    return maxlength;

}

const res = longestSubstring('abcabcbb');
console.log(res);