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

// Logic to move the NO btn

function isPortrait() {
    return window.innerHeight > window.innerWidth;
}

function moveNoButton() {
    // ❗ działa TYLKO w pionie
    if (!isPortrait()) return;

    const rect = noBtn.getBoundingClientRect();
    const padding = 12;

    const viewportWidth = window.visualViewport
        ? window.visualViewport.width
        : window.innerWidth;

    const viewportHeight = window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;

    const maxX = viewportWidth - rect.width - padding;
    const maxY = viewportHeight - rect.height - padding;

    const x = Math.random() * Math.max(0, maxX);
    const y = Math.random() * Math.max(0, maxY);

    noBtn.style.transition = "left 0.25s ease, top 0.25s ease";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// desktop
noBtn.addEventListener("mouseover", moveNoButton);

// mobile
noBtn.addEventListener("touchstart", moveNoButton);

// reset po obrocie telefonu
window.addEventListener("orientationchange", () => {
    noBtn.style.left = "";
    noBtn.style.top = "";
});

                       
// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";

});






