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

    // Regex is used with match function to extract integer values with '-' sign if exists
    const extractedIntegers = inputString.match(/-?\d+/g) || []
    
    let sum = 0
    
    // Looping and adding numbers
    extractedIntegers.forEach(int => {
        const num = parseInt(int)
        
        // Throing error if any -ve number is found
        if(num < 0) {
            throw new Error(`negative numbers not allowed ${num}`)
        }

        // adding number
        sum +=num
    })

    console.log(sum)

    // Returning result
    return sum
}

extractIntegersFromStringAdAdd('fy89765euyf76r5rtiut6-56r58igyu87t6rvy6r5')
