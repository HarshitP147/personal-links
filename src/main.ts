import anime from "animejs";

const mouse = document.getElementById("mouse")!;
const nameBox = document.getElementById("name-box")!;
const modal = document.getElementById("modal-root")!;
const closeBtn = document.getElementById("close-btn")!;
const redTheme = document.getElementById("red-theme")!;
const blueTheme = document.getElementById("blue-theme")!;

blueTheme.style.opacity = '1';
redTheme.style.opacity = '0';

let isBluetheme = true;

window.addEventListener("click",() => {
    isBluetheme = !isBluetheme;
    if(isBluetheme){
        blueTheme.style.opacity = '1';
        redTheme.style.opacity = '0'
    }
    else{
        blueTheme.style.opacity = '0'
        redTheme.style.opacity = '1'
    }
});

nameBox.addEventListener("click",()=>{
    modal.style.animation = "background-in 0.5s";
    modal.classList.remove("hidden");
});

closeBtn.addEventListener("click",() =>{
    modal.style.animation = "background-out 0.5s";
    setTimeout(()=>{
        modal.classList.add("hidden");
    },490)
})


// window.addEventListener("mousemove",e => {
//     anime({
//         targets:mouse,
//         translateX:e.clientX || e.pageX,
//         translateY:e.clientY || e.pageY ,
//         elasticity:10,
//         duration:650
//     })
// })
