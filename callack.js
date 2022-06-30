const posts=[
    {title:'post one', body:'post1 is here'},
    {title:'post two', body:'post2 is here'}
]
function getPosts(){
    setTimeout(()=>{
        let output= '';
        posts.forEach((post,index)=>{
           
            output +=`<li>${post.title}</li>`;
        });
        document.body.innerHTML= output;
            
        
    },1000);
}
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error =false;
            if(!error){
                resolve();

            }else{
                reject('Error');
            }

        },2000)
    });
}
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var error =false;
            l =posts.length;
            if(l>0){
            posts.pop();

            }else{
                error =true;
            }
             
            if(!error){
                resolve();

            }else{
                reject('Array is empty');
            }

        },2000)
    });
}
function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let time =new Date().getTime();
            resolve(time)
        },1000)
    })

}
function userupdatesPost(){
    Promise.all([createPost,updateLastUserActivityTime])
    .then(([createPostresolves,updateLastUserActivityTimeresolves])=>{console.log(updateLastUserActivityTimeresolves)
})
.catch(err=> console.log(err))

}
function deleteAll(){
    return new Promise((resolve,reject)=>
    setTimeout(()=>{
        var error= false;
        userupdatesPost().then(deletePost());
        if(!error){
            resolve();

        }else{
            reject('Error');
        }

    }))
}
createPost({title:'post4',body:'post 4 is displayed'})
.then(getPosts).catch(err=>console.log(err)); 
deletePost()
.then(getPosts).catch(err=>console.log(err));

deleteAll().then(createPost).catch(err=>console.log(err));



const promise1 =Promise.resolve('World');
const promise2 =10;
const promise3 = new Promise((resolve,reject)=>setTimeout(resolve,2000,'Goodye'));
const promise4= fetch('https://jsonplaceceholder.typicode.com/users').then(res=>res.json());
promise.all([promise1,promise2,promise3,promise4]).then(values=>console.log(values));