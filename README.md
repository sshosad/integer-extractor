# integer-extractor

# This project will be used to extract and the numbers from a string
# If the string includes any -ve numbers, error will be thrown
# Throwed error will included all -ve numbers extracyed from string

# Technology used - node.js

# READ COMMENTS WRITTEN IN THE CODE FOR BETTER UNDERSTANDING OF THE FUNCTIONALITY AND PROCEDURE

# To use/test this functionality, there are two ways
    1. By running only respository.js file
    2. By setting-up and run the server, use above functinality as API

# By running only respository.js file
    Steps to be follwed:
    a. Clone the repository - git clone https://github.com/sshosad/integer-extractor.git
    b. Navigate to integer-extractor folder - cd integer-extractor
    c. Checkout to development branch - git checkout development
    d. Open extractor-repository.js file and scroll to bottom
    e. Read the comments properly and uncomment the lines mentioned in the comment
    f. Enter the value for STRING of your choice to test
    g. Run node app/repoitory/extractor-repository.js to get the result in console
    h. Change STRING value to test various inpu strings and run the above command to test the functionality

# By setting-up and run the server, use above functinality as API
    Steps to be followed:
    a. Clone the repository - git clone https://github.com/sshosad/integer-extractor.git
    b. Navigate to integer-extractor folder - cd integer-extractor
    c. Checkout to development branch - git checkout development
    d. Install all dependencies - npm i
    e. Create .env file in root level of the project and add the PORT_NUMBER = <port_number> in the same file
    f. Run the project - node server
    g. Once console display the mesage as "App is running on port <port_number>", application is ready to use
    h. Now the functionality can be used as API with api route with POST method - http://localhost:<port_number>/api/extract/add
    g. Example API request body - { "string": "kjhi89r987867f87r67f" }
    e. Example API response - { sum : 988110 }


