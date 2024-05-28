function solution(s, skip, index) {
    // Helper function to check if a character is in the skip list
    function shouldSkip(char, skipArr) {
        return skipArr.includes(char);
    }

    // Convert skip string to an array for easy checking
    const skipArr = skip.split("");
    let answer = "";

    // Iterate over each character in the input string
    for (let char of s) {
        let newChar = char;

        // Shift the character index times, skipping the characters in the skip list
        for (let i = 0; i < index; i++) {
            do {
                newChar = String.fromCharCode(newChar.charCodeAt(0) + 1);

                // Wrap around if past 'z'
                if (newChar > 'z') {
                    newChar = 'a';
                }
            } while (shouldSkip(newChar, skipArr)); // Skip the characters in skip list
        }

        // Append the new character to the result string
        answer += newChar;
    }

    return answer;
}

console.log(solution("aukks", "wbqd", 5)); // Expected output
