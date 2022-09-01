const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("enter the 1st number : ", a => {
    readline.question("enter the 2nd numebr : ", b => {
        var total = (+a) + (+b);
        console.log(`The sum is ${total}`);
        readline.close()
    })
})
