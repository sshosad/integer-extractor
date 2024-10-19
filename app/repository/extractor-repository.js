/**
 * Function to extract all integers from a string and add those integers
 * If string includes -ve numbers, function should throw error
 * 
 * INPUT -
 *      inputSting - string
 * 
 * OUTPUT -
 *      Sum of all extracted positive integers - number
 * 
 * ALGORITH -
 *      1. Check string present, if not return 0
 *      2. Extracts only negative numbers
 *              a. If found, thows errors by appening all negative numbers to error mesage
 *      2. Extract numbers (positive) from string using regex
 *      3. Adding all numbers
 *      4. Return sum
 * 
 * EFFICIENCY -
 *      1. O(n) - n repreents number of positive integers found
 *      2. If we haven't used negative check regex in initial place, n represents numebrs of integers found in string (including both -ve and +ve numebrs)
 *      3. With negative value check, efficiency of the function is improved
 */

function add(inputString) {

    // If sting is empty(''), or passed inputSting is falsy value, return 0
    if(!inputString) {
        return 0
    }

    /**
     * Extracting only -ve numbers, 
     * So that initial stage itself we can throw error insted of looping throgh all +ve and -ve numbers
     * With this strategy we can improve function efficiency
     */
    const extractedNegativeInteger = inputString.match(/-\d+/g)

    // If any negative value found, throwing error
    if(extractedNegativeInteger) {
        throw new Error('negative numbers not allowed ' + extractedNegativeInteger.join(','))
    }

    // If negative check passed means, all numbers present in the system is positive numbers and those will be extracted
    const extractedIntegers = inputString.match(/\d+/g)
    
    // If no numbers found, return 0
    if(!extractedIntegers) {
        return 0
    } 

    // Summing up all found integers
    const sum = extractedIntegers.reduce((prev, curr) => prev + parseInt(curr), 0)
    
    console.log(sum)
    
    // returning result
    return sum
}

/**
 * TESTING PURPOUSE
 * Un-comment line number 67 and 68
 * Here you can changes the input string to execute all test cases
 * To execute add function with passed STRING, run node app/repository/extractor-repository.js in terminal
 */
// const INPUT = 'yy33d,d\tdk\nd}{bd7,gjdjd5'
// add(INPUT)

module.exports = {
    add
}