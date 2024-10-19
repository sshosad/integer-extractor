/**
 * Function to extract all integers from a string and add extracted integers
 * 
 * INPUT -
 *      inputSting - string
 * 
 * OUTPUT -
 *      Sum of all extracted integers
 * 
 * ALGORITH -
 *      1. Extract numbers from string using regex
 *      2. Loop through all extracted numbers and add
 *      3. Return sum
 */

function extractIntegersFromStringAdAdd(inputString) {
    if(!inputString) {
        return 0
    }

    // Regex is used with match function to extract integer values
    const extractedIntegers = inputString.match(/\d+/g) || []
    
    let sum = 0
    
    // Looping and adding numbers
    extractedIntegers.forEach(int => {
        sum += parseInt(int)
    })

    console.log(sum)

    // Returning result
    return sum
}

extractIntegersFromStringAdAdd('fy89765euyf76r5rtiut6r58igyu87t6rvy6r5')
