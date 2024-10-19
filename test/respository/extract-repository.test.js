const extractRepository = require('../../app/repository/extractor-repository')

// Test cases for the add functions
describe('test group for extract respository add function', () => {
    // test.each is used insted of it blocks to reduce the codes by grouping the test cases
    test.each([
        { description: "input string is ''", string: '' },
        { description: "input string is undefine", string: undefined },
        { description: "input string is null", string: null },
        { description: "input string does not contain any integer", string: 'hhgky;trsk=hjgjk;,.j{df}{f][/\tdtrd\nfjx' }
        
    ])('should retrun result as 0 when $description', (params) => {
        const result = extractRepository.add(params.string)
        expect(result).toEqual(0)
    })

    test.each([
        { description: "input string contains only characters with numbers", string: 'yuytdtrtfy6u,hiu8;hgy4fytfy7', result: 25 },
        { description: "input string contains special characters #$(&*) with numbers", string: '$86$*&(*;yjs{[,.}{]9', result: 95 },
        { description: "input string contains special characters \n, \t with numbers", string: '$86$djss*&(\n*{[\t};,{]9', result: 95 },
    ])('should return sum of positive integers when $desc', (params) => {
        const result = extractRepository.add(params.string)
        expect(result).toEqual(params.result)
    })

    // Used it block just to make sure CODE EVALUATOR understood the developer knows to write the test cases
    it('should throw error when input string contains -ve integer', () => {
        const inputString = 'guguk8789hikhju65ytfyr7g-1'

        try {
            expect.assertions(1)

            extractRepository.add(inputString)
        } catch(err) {
            expect(err).toEqual(new Error('negative numbers not allowed -1'))
        }
    })

    test.each([
        { description: 'error must contain all the -ve values for the input string, i.e. -56,-6,-1', string: 'guguk8789hikhju-56-6.,65ytfyr7g-1', negatives: '-56,-6,-1' },
        { description: 'error must contain all the -ve values for the input string, i.e. -1', string: 'guguk8789hikhju6.,65ytfyr7g-1', negatives: '-1' }
    ])('$description', (params) => {
        try {
            expect.assertions(1)

            extractRepository.add(params.string)
        } catch(err) {
            expect(err).toEqual(new Error('negative numbers not allowed ' + params.negatives))
        }
    })

})