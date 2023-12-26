const isStatus = document.querySelector('h5');
// const remove = document.getElementById('remove');
const add = document.getElementById('add');

// remove.addEventListener('click',function(){
//     isStatus.innerHTML = "strainger"
//     isStatus.style.color = "red"
// })
let check = 0;
add.addEventListener('click',function(){
    if(check == 0){
        isStatus.innerHTML = "friends";
        isStatus.style.color = "green";
        add.innerHTML = "remove";
        check = 1;
        // console.log(check);
    }else{
        isStatus.innerHTML = "stranger";
        isStatus.style.color = "red";
        add.innerHTML = "Add Friend";
        check = 0;
        // console.log(check);
    }
})