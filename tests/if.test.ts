describe('if statement', () => {
    it('should return true if the number is greater than 10', () => {
        function returnValue(value: number) {
            if (value > 10) {
                return true
            } else {
                return false
            }
        }

        returnValue(1)
        returnValue(15)

        expect(returnValue(1)).toBe(false)
        expect(returnValue(15)).toBe(true)
    })

    it('exam score decision', () => {
        function grade(score: number) {
            if (score >= 90) {
                return 'A'
            } else if (score >= 80) {
                return 'B'
            } else if (score >= 70) {
                return 'C'
            } else if (score >= 60) {
                return 'D'
            } else {
                return 'F'
            }
        }

        grade(95)
        grade(85)
        grade(75)
        grade(65)

        expect(grade(95)).toBe('A')
        expect(grade(85)).toBe('B')
        expect(grade(75)).toBe('C')
        expect(grade(65)).toBe('D')
        expect(grade(55)).toBe('F')
    })

    it('shoud support ternary operators', () => {
        function grade(score: number) {
            return score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F'
        }

        grade(95)
        grade(85)
        grade(75)
        grade(65)

        expect(grade(95)).toBe('A')
        expect(grade(85)).toBe('B')
        expect(grade(75)).toBe('C')
        expect(grade(65)).toBe('D')
        expect(grade(55)).toBe('F')

        function isEven(number: number) {
            return number % 2 === 0 ? true : false
        }

        isEven(10)
        isEven(9)
        expect(isEven(10)).toBe(true)
        expect(isEven(9)).toBe(false)
        expect(isEven(11)).toBe(false)
        expect(isEven(0)).toBe(true)

        function passedScoreOrNotPassedScore(score: number) {
            // const score = 75
            return score >= 70 ? `You passed with score ${score}` : `You failed with score ${score}`
        }

        passedScoreOrNotPassedScore(75)
        passedScoreOrNotPassedScore(65)

        expect(passedScoreOrNotPassedScore(75)).toBe('You passed with score 75')
        expect(passedScoreOrNotPassedScore(65)).toBe('You failed with score 65')
    })

    it('should support switch statement', () => {
        function grade(score: number) {
            switch (Math.floor(score / 10)) {
                case 10:
                case 9:
                    return 'A'
                case 8:
                    return 'B'
                case 7:
                    return 'C'
                case 6:
                    return 'D'
                default:
                    return 'F'
            }
        }

        grade(95)
        grade(85)
        grade(75)
        grade(65)

        expect(grade(95)).toBe('A')
        expect(grade(85)).toBe('B')
        expect(grade(75)).toBe('C')
        expect(grade(65)).toBe('D')
        expect(grade(55)).toBe('F')

        function isEven(number: number) {
            switch (number % 2) {
                case 0:
                    return true
                default:
                    return false
            }
        }

        isEven(10)
        isEven(9)
        expect(isEven(10)).toBe(true)
        expect(isEven(9)).toBe(false)
        expect(isEven(11)).toBe(false)
        expect(isEven(0)).toBe(true)
    })


    
})