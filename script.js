fetch('http://crossorigin.me/https://www.metaweather.com/api/location/2487956/')
.then(result => {
    console.log(result);
    return result.json();
})
.then(data => {
    console.log(data);
})
.catch(error => console.log(error));