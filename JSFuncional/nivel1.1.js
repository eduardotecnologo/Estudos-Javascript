function isPrime(num) {
    //Se for par e não for 2
    if ((num % 2) === 0 && num !== 2)
        return false;

    for (let i = num - 1; i > 1; i--) {
        if (num % i === 0) {
            console.log('\n')
            console.log(num + 'é divisível por: ', i)
            return false;
        }
    }
    return true;
}
console.log('isPrime 10002', isPrime(10002))
console.log('isPrime 10003', isPrime(10003))