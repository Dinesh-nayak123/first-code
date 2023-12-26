flag = 0;
const menubtn = document.getElementById('menu-icon');
const menu = document.getElementById('menu');
menubtn.addEventListener('click',function(){
    if(flag == 0){
        menu.style.display = "block";
        flag = 1;
    }else{
        menu.style.display = "none";
        flag = 0;
    }
})