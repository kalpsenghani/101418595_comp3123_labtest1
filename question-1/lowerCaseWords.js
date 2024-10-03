function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        try {
            const result = mixedArray
                .filter(item => typeof item === 'string')
                .map(item => item.toLowerCase());
            
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));