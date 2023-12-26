const colors = document.querySelectorAll(".colors");
console.log(colors);
const body = document.querySelector("body");
colors.forEach( function (box) {
    box.addEventListener('click', function (element) {
        console.log(element);
        console.log(element.target);
        if(element.target.id === "blue"){
            body.style.backgroundColor = element.target.id
            
        }
        if(element.target.id === "red"){
            body.style.backgroundColor = element.target.id
        }
        if(element.target.id === "green"){
            body.style.backgroundColor = element.target.id
        }
        if(element.target.id === "purple"){
            body.style.backgroundColor = element.target.id
        }
        if(element.target.id === "pink"){
            body.style.backgroundColor = element.target.id
        }
        if(element.target.id === "orange"){
            body.style.backgroundColor = element.target.id
        }
        if(element.target.id === "skyblue"){
            body.style.backgroundColor = element.target.id
        }
    })
} );