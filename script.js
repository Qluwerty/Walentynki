// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Funkcja sprawdzająca orientację
function isPortrait() {
    return window.innerHeight > window.innerWidth;
}

// przycisk YES
let yesScale = 1;
yesBtn.style.position = "fixed";
yesBtn.style.top = "50%";
yesBtn.style.left = "50%";
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";
yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;

// przycisk NO
noBtn.style.position = "fixed";
noBtn.style.transition = "left 0.25s ease, top 0.25s ease";

// Funkcja ruchu NO btn (portrait)
function moveNoButton() {
    const rect = noBtn.getBoundingClientRect();
    const padding = 12;

    const maxX = window.innerWidth - rect.width - padding;
    const maxY = window.innerHeight - rect.height - padding;

    const x = Math.random() * Math.max(0, maxX);
    const y = Math.random() * Math.max(0, maxY);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Reset pozycji NO (landscape)
function resetNoButton() {
    noBtn.style.left = "";
    noBtn.style.top = "";
}

// Event YES btn
yesBtn.addEventListener("click", () => {
    if (!isPortrait()) return; // działa tylko w portrait
    yesScale += 2;
    yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
});

// Event NO btn
noBtn.addEventListener("mouseover", () => {
    if (!isPortrait()) {
        // Landscape: nie ucieka poza ekran, można zrobić lekki ruch
        resetNoButton();
    } else {
        // Portrait: ucieka losowo
        moveNoButton();
    }
});
noBtn.addEventListener("touchstart", () => {
    if (isPortrait()) moveNoButton();
});

// Obsługa zmiany orientacji
window.addEventListener("resize", () => {
    if (!isPortrait()) resetNoButton();
});
window.addEventListener("orientationchange", () => {
    if (!isPortrait()) resetNoButton();
});



// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "oj gingerku ty mój love";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";

});








