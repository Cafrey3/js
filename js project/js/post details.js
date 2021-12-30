let postArray = JSON.parse(localStorage.getItem('postArray'));
for (const post of postArray) {
    let div = document.createElement('div');
    div.innerText = `${post.userId}, ${post.id}, ${post.title}, ${post.body}`;
    document.body.append(div);

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then((comments) => {
            for (const comment of comments) {
                if (post.id === comment.postId) {
                    let commentDiv = document.createElement('div');
                    commentDiv.classList.add('comment');
                    commentDiv.innerText = `${comment.name}, ${comment.id}`;
                    document.body.appendChild(commentDiv);
                }
            }
        });
}






