// promise in js 
// how to create a promises

const newPromise = new Promise(function(resolve, reject){
setTimeout(()=>{
    console.log("im inside the promise ");
    resolve() //here resolve pass the value from this to the lower function
},1000)
})

// now we have to consume the promise that we have created 

newPromise.then(()=>{
    console.log("promise is fullfiled ");
})


// we can also create promise without  the help  of the new variable



const newPromiseThree = new Promise((resolve , reject) =>{
    setTimeout(()=>{
     resolve({userName:"sunnt" , age:12})
    },1000)
})

newPromiseThree.then((userData)=>{
    console.log(userData);
})


const newPromiseFour = new Promise((resolve, reject)=>{
setTimeout(()=>{
let error = !true
if(!error){
    resolve({userName:"sunny" , age:19})
}
else{
    reject('error : something went wrong ')
}
},1000)
})

newPromiseFour.then((user)=>{
return user.userName
}).then((userName)=>{
    console.log(userName);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log(" the promise is resolve  or rejected finally");
})

// async await in promise 

// handling promise using the async and await 

const newPromiseFive = new Promise((resolve , reject)=>{
setTimeout(()=>{
let error = true
if(!error){
    resolve({userName:"suhil pandey " , hobbies:"coding"})
}
else{
    reject('error:ahh  shit not again')
}
}, 1000)
})

// now  lets consume  the  promise using the asyn and await 

async function consumePromiseFive(){
    try {
        const data = await newPromiseFive; 
    console.log(data);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();