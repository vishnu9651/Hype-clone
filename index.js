// function findRepeatingSubstrings(inputString) {
//     const n = inputString.length;
//     const repeatingSubstrings = new Set();

//     for (let length = 1; length <= n; length++) {
//         for (let i = 0; i <= n - length; i++) {
//             const substring = inputString.slice(i, i + length);
//             if (inputString.split(substring).length > 2) {
//                 repeatingSubstrings.add(substring);
//             }
//         }
//     }

//     return Array.from(repeatingSubstrings);
// }

// // Test the function
// const inputString = "abcabcabcxyzxyz";
// const repeatingSubstrings = findRepeatingSubstrings(inputString);

// if (repeatingSubstrings.length > 0) {
//     console.log("Original String:", inputString);
//     console.log("Repeating Substrings:", repeatingSubstrings);
// } else {
//     console.log("No repeating substrings found.");
// }



function writeOutput(inputData) {
    // Parse the input data
    const lines = inputData.trim().split("\n");
    const inputString = lines[0];
    const subStringLength = parseInt(lines[1]);
    
    // Step 1: Split the input string into sub-strings of the given length
    const subStrings = [];
    for (let i = 0; i < inputString.length; i += subStringLength) {
        subStrings.push(inputString.slice(i, i + subStringLength));
    }
    
    // Step 2: Calculate the weight of each unique sub-string
    const subStringWeights = {};
    subStrings.forEach(subString => {
        if (!subStringWeights[subString]) {
            subStringWeights[subString] = 0;
        }
        subStringWeights[subString]++;
    });
    
    // Step 3: Sort the unique sub-strings based on weight and character order
    const sortedSubStrings = Object.keys(subStringWeights).sort((a, b) => {
        if (subStringWeights[a] !== subStringWeights[b]) {
            return subStringWeights[b] - subStringWeights[a];
        }
        return a.localeCompare(b);
    });
    
    // Step 4: Concatenate the sorted unique sub-strings to create the hash
    const hashResult = sortedSubStrings.join("");
    return hashResult;
}

writeOutput("-+*++-*++-")