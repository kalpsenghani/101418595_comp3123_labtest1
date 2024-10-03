const delayedSuccess = () => {
    setTimeout(() => {
        let success = { 'message': 'delayed success!' };
        console.log(success);
    }, 500);
}

const delayedException = () => {
    setTimeout(() => {
        let error = { error: 'delayed exception!' };
        console.error(error);
    }, 500);
}

const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!' });
        }, 500);
    });
}

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject({ error: 'delayed exception!' });
        }, 500);
    });
}

delayedSuccess();
delayedException();
