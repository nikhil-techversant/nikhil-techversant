function votingAge(age) {
    return new Promise((resolve, reject) => {

        if (age >= 18) {
            resolve()
        }
        else {
            reject()
        }


    })
};

var age = prompt("Enter the Age here: ");

const p = votingAge(age);
p.then(() => {
    console.log(' The given age ', age ,' is eligible for voting ');
}, p.catch(() => {
    console.log(' The given age ', age, ' is eligible for voting ');
}));
