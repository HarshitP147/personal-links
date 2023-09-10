const mouse = document.getElementById("mouse")!;
const nameBox = document.getElementById("name-box")!;
const modal = document.getElementById("modal-root")!;
const closeBtn = document.getElementById("close-btn")!;
const redTheme = document.getElementById("red-theme")!;
const blueTheme = document.getElementById("blue-theme")!;

blueTheme.style.opacity = '1';
redTheme.style.opacity = '0';

let isBluetheme = true;

window.addEventListener("click", () => {
    isBluetheme = !isBluetheme;
    if (isBluetheme) {
        blueTheme.style.opacity = '1';
        redTheme.style.opacity = '0'
    }
    else {
        blueTheme.style.opacity = '0'
        redTheme.style.opacity = '1'
    }
});

nameBox.addEventListener("click", () => {
    modal.style.animation = "background-in 0.5s";
    modal.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
    modal.style.animation = "background-out 0.5s";
    setTimeout(() => {
        modal.classList.add("hidden");
    }, 490)
})

document.addEventListener('mousemove', e => {
    mouse.style.transform = `transform3d(calc(${e.clientX}px-50%),calc(${e.clientY}px-50%))`
})

document.addEventListener('mousemove', function (e) {
    mouse.style.left = e.clientX + 'px';
    mouse.style.top = e.clientY + 'px';
});


document.querySelectorAll('.links').forEach(item => {
    item.addEventListener('mouseover', () => {
        mouse.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        mouse.classList.remove('hover');
    });
})