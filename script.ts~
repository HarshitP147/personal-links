const nameBox = document.getElementById("name-box")! as HTMLDivElement;
const toggleBtn = document.getElementById("toggle-btn")! as HTMLButtonElement;
const modal = document.getElementById("modal-root")! as HTMLDivElement;
const closeBtn = document.getElementById("close-btn")! as HTMLButtonElement;
const body = document.body!;

let isBlueTheme = true;

toggleBtn.addEventListener("click", () => {
    isBlueTheme = !isBlueTheme;
    if (isBlueTheme) {
        toggleBtn.textContent = "Toggle gradient to red";
        document.body.className = "blue-theme";
    } else {
        toggleBtn.textContent = "Toggle gradient to blue";
        document.body.className = "red-theme";
    }
});

nameBox.addEventListener("click", () => {
    modal.style.animation = "background-in 0.5s ";
    modal.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
    modal.style.animation = "background-out 0.5s";
    setTimeout(() => {
        modal.classList.add("hidden");
    }, 490);
});
