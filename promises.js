var posts = [
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

function createPost(post){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            if(!error){
                resolve();
            }
            else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
    
}


// Deleting Array
function deletePosts(){
    return new Promise((resolve, reject) => {
        
        if(posts.length>0){
            setTimeout(() => {
                resolve();
            },1000)
        }
        else
            reject("Array is Empty")
    })
}

createPost({title: 'Post Three', body: 'This is post Three'})
.then(getPosts).catch(err => console.log(err));
 

const timerID = setInterval(() => {
    deletePosts()
    .then(() => {
        posts.pop()
        let lastPost=document.querySelector('body').lastChild;
        lastPost.parentNode.removeChild(lastPost);
    })
    .catch(err => {
        console.log(err);
        clearInterval(timerID);
    });
},3000)


// Promise.all
const promise1 = Promise. resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise( (resolve, reject) =>
setTimeout(resolve, 2000, 'Goodbye')
);
Promise.all( [promisel, promise2, promise3]).then(values
=> console.log(values));

  
