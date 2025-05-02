function getRandomNumbers(min, max, amount) {
    const randomNumbers = []
    while (randomNumbers.length < amount) {
        const randomNumber = getRandomNumber(min, max)
        
        var i = 0;
        var includes = 0
        while (randomNumbers[i] != null) {
            if (randomNumbers[i] == randomNumber) {
                includes = 1;
            }
            i = i + 1
        }

        if (!includes) {
            randomNumbers[randomNumbers.length] = randomNumber
        }
    }

    return randomNumbers;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min
}

export default getRandomNumbers