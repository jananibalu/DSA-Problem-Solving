import React from 'react'

export default function IsPalindrome() {

    function ISpalindrome(sentence: string) {

        for (let i = 0; i < sentence.length / 2; i++) {
            if (sentence[i] !== sentence[sentence.length - 1 - i]) {
                return false
            }
        }
        return true
    }
    const sentence = "dad";
    // const sentence = "level";
    // const sentence = "world";
   
    const result = ISpalindrome(sentence);

    console.log(result);

    return (
        <div>  IsPalindrome: {result ? "Yes" : "No"}</div>
    )
}
