const toggleBtn = document.querySelector('.toggle_btn');
const dropDownMenu = document.querySelector('.dropdown-menu');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
toggleBtn.addEventListener('click',function(){
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open')
    console.log(isOpen);
    toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"
})




// 