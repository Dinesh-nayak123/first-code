// const promiesOne = new Promise(function(){
//     //do an async task
//     //DB calls, cryptography, network
//     setInterval(function(){
//         console.log('Aysnc task is complete');
//         resolve()
//     },1000);
    
// });
// promiesOne.then(function(){
//     console.log("promise consumed");
// })

// new Promise(function(){
//     setInterval(function(resolve, reject){
//         console.log("kunal");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("kunal bhai");
// })

const promiesthree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "kunal" , email:"k@gmail.com"});
    },1000)
});
promiesthree.then(function(user){
    console.log(user);
});

const promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"kunal", password:"123"})
        }else{
            reject('ERROR: something went worng')
        }
    },1000)
})
promisefour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() =>{
    console.log("finally done");
})

// const promisefive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if(!error){
//             resolve({username:"javascript", password:"123456"})
//         }else{
//             reject('ERROR: something went worng')
//         }
//     },1000);
// });
// async function consumePromiseFive(){
//     try{
//         const response = await promisefive
//         console.log(response);
//     } catch(error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         console.log(data);
//     }catch{
//         console.log("E: ",error);
//     }
// }
// getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})