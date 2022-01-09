let postArray = JSON.parse(localStorage.getItem('postArray'));

let commentWrap = document.createElement('div');
commentWrap.classList.add('comment_wrap');
document.body.appendChild(commentWrap);

let commentBox = document.createElement('div');
commentBox.classList.add('comment_box');
document.body.appendChild(commentBox)

for (const post of postArray) {
    let div = document.createElement('div');
    div.classList.add('post_details');
    div.innerText = `${post.userId}, ${post.id}, ${post.title}, ${post.body}`;
    commentWrap.append(div);

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then((comments) => {
            for (const comment of comments) {
                if (post.id === comment.postId) {
                    let commentDiv = document.createElement('div');
                    commentDiv.classList.add('comment');
                    commentDiv.innerText = `${comment.name}, ${comment.id}`;
                    commentBox.appendChild(commentDiv);
                }
            }
        });
}






