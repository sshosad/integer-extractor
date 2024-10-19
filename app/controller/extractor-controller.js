const extractorrepository = require('../repository/extractor-repository')

// Function to descrtucure the request body and call the add function to proceed with addition
// Error are handled
async function extractIntegerAndAdd(req, res) {
    try {
        const { string } = req.body

        // If any falsy value found for input string, return 0
        if(!string) {
            return 0
        }

        // Calling Add function
        const sum = await extractorrepository.add(string)

        // returning response in the form of { sum: 5656 }
        res.send({sum})
    } catch(err) {
        // If any error found in the above operation, sending response with status 'Failed
        const response = {
            status: 'Failed',
            message: err.message || 'Something went wrong!'
        }

        // res.error(response)
        res.send(response)
    }
}

module.exports = {
    extractIntegerAndAdd
}