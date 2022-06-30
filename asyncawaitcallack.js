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


const prePost = async () => {

    const createPost=(post)=>
         new Promise((resolve,reject)=>{
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
    
        const deletePost=()=>
             new Promise((resolve,reject)=>{
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
        
    
  
    
    
      let [ postcreated, postdeleted] =
      await Promise.all([ createPost, deletePost ]);
  
      console.log(`got ${postcreated}, ${postdeleted}`);
  
    
    
    
  };
  
  prePost().then(getPosts);