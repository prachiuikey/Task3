const posts = [
    { title: 'Post One', body: 'This is Post One'},
    { title: 'Post Two', body: 'This is Post Two'}
];

let count = 0;

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

function create4thPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 3000);
}

// function getLastEditTime(){

//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}${' Last Edited at- {current timestamp}' } </li>`;
//         });
//         document.body.innerHTML = output;
//     }, 5000);
// }

function lastEditedInSecondsAgo(){
    
    setInterval(() => {
        count += 1;
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}${' Last edited '}${count}${' seconds ago'} </li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}


createPost({ title:'Post Three', body:'This is Post Three'}, getPosts);
create4thPost({ title:'Post Four', body:'This is Post Four'}, createPost);
// getLastEditTime();
lastEditedInSecondsAgo();

