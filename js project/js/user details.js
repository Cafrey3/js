let userDetails = JSON.parse(localStorage.getItem('userDetails'));
for (const user of userDetails) {
    let div = document.createElement('div');
    div.innerHTML = `${user.id}, ${user.name}, ${user.username}, ${user.email}, ${user.address.street}, ${user.address.suite},
    ${user.address.city},${user.address.zipcode}, ${user.address.geo.lat},${user.address.geo.lng}, ${user.phone}, ${user.website},
    ${user.company.name},${user.company.catchPhrase}, ${user.company.bs}`;
    let button = document.createElement('button');
    button.innerText = 'post of current user';

    button.onclick = function () {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((posts) => {
                for (const post of posts) {
                    if (user.id === post.userId) {
                        let postDiv = document.createElement('div');
                        postDiv.innerText = `title of user ${user.id} - ${post.title}`;
                        document.body.appendChild(postDiv);

                        let btnPost = document.createElement('button');
                        btnPost.innerText = 'More info';
                        postDiv.appendChild(btnPost);

                        btnPost.onclick = function () {
                            window.location.href = 'post details.html'
                            let postArray = JSON.parse(localStorage.getItem('postArray')) || [];
                            postArray.push(post);
                            localStorage.setItem('postArray', JSON.stringify(postArray));
                        };
                    }
                }
            });
    };

    div.appendChild(button);
    document.body.appendChild(div);
}