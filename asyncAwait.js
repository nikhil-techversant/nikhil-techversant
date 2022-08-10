console.log("started")
var n = prompt('Enter a Positive number : ')

let isPrime = true;

primeOrNot()
result()
async function primeOrNot() {
    try {
        if (n === 1) {
            console.log("1 is not prime or composite number");
        } else if (n > 1) {
            for (let i = 2; i < n; i++) {
                if (n % i == 0) {
                    return isPrime = false;

                }
            }
        }

    } catch (e) {
        console.log("Error Occured")
    }
}

function result() {
    if (isPrime) {
        console.log("The given number ", n, " is  a prime number")

    } else {
        console.log("The given number ", n, " is not a prime number")

    }

}
