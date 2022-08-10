var dataSet = dataFromWeb();
dataSet.then((data) => {
    console.log('Data from Website');
    console.log(data);
});


async function dataFromWeb() {

    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const jsonData = await data.json();
    return jsonData;
}