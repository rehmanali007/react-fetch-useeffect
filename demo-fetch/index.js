let url = 'https://jsonplaceholder.typicode.com/posts'


// // Fetch data from API using get method...
// let fetchPomise = fetch(url)
// fetchPomise.then((response) => {
//     return response.json();
// }).then((jsonResp) => {
//     console.log('Loggig response...')
//     console.log(jsonResp)
// }).catch((err) => {
//     console.log(err)
// })



// Post data to API using post method...

let postUrl = 'https://jsonplaceholder.typicode.com/posts'
let to_send = {
    // TO post data method must be 'POST'
    method: 'POST',
    // Data to be send must be in the string format...
    body: JSON.stringify({
        title: 'A secure data to send',
        body: 'This is a very secure data to be sent to API..',
        userId: 123
    }),
    // Content type must be application/json
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
}

let fetchPromise = fetch(postUrl, to_send)
fetchPromise.then((res) => {
    return res.json();
}).then((jsonRes) => {
    console.log(jsonRes)
})