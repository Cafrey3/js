let userDetails = JSON.parse(localStorage.getItem('userDetails'));
for (const user of userDetails) {
    let div = document.createElement('div');
    div.innerHTML = `${user.username}, ${user.email}, ${user.address.street}, ${user.address.suite}, ${user.address.city},
    ${user.address.zipcode}, ${user.address.geo.lat},${user.address.geo.lng}, ${user.phone}, ${user.website},${user.company.name},${user.company.catchPhrase}, ${user.company.bs}`

    document.body.appendChild(div)
}


// username": "Bret",
// "email": "Sincere@april.biz",
//     "address": {
//     "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//         "lat": "-37.3159",
//             "lng": "81.1496"
//     }
// },
// "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//     "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness re