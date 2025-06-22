
export default function FindLargestWord() {
    
    function findLongestWord(sentence) {
        let longest = "";
        let currentWord = "";

        for (let i = 0; i <= sentence.length; i++) {
            let char = sentence[i];

            if (char === " " || i === sentence.length) {

                if (currentWord.length > longest.length) {
                    longest = currentWord;
                }
                currentWord = "";
            } else {
                currentWord += char;
            }
        }
        return longest;
    }

    let sentence = "I am learning frontend development";
    let result = findLongestWord(sentence);
    console.log("Longest word is:", result);

    return (
        <div>Practice {result}</div>
    )
}
