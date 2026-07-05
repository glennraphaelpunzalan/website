// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const catImg = document.getElementById("letter-dog");
const photoFrame = document.querySelector(".photo-frame");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const activityContainer = document.getElementById("activity-container");
const dateContainer = document.getElementById("date-container");
const timeContainer = document.getElementById("time-container");
const dateInput = document.getElementById("date-input");
const timeInput = document.getElementById("time-input");
const dateNext = document.getElementById("date-next");
const timeNext = document.getElementById("time-next");

let chosenActivity = "";
let chosenDate = "";
let chosenTime = "";

// Click Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// NO button moves away
noBtn.addEventListener("mouseover", () => {
    const distance = 200;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES clicked -> hide dog, show activity step
yesBtn.addEventListener("click", () => {
    document.querySelector("h1").textContent = "Yayyy!!!";

    buttons.style.display = "none";
    photoFrame.classList.remove("visible");
    activityContainer.style.display = "flex";
});

// Activity chosen -> show date step
document.querySelectorAll(".option-btn[data-choice]").forEach((btn) => {
    btn.addEventListener("click", () => {
        chosenActivity = btn.dataset.choice;
        activityContainer.style.display = "none";
        dateContainer.style.display = "flex";
    });
});

// Date chosen -> show time step
dateNext.addEventListener("click", () => {
    if (!dateInput.value) return;
    chosenDate = dateInput.value;
    dateContainer.style.display = "none";
    timeContainer.style.display = "flex";
});

// Time chosen -> show final message with dancing dog
timeNext.addEventListener("click", () => {
    if (!timeInput.value) return;
    chosenTime = timeInput.value;
    timeContainer.style.display = "none";

    catImg.src = "dog_dancing.gif";
    photoFrame.classList.add("visible");

    document.querySelector(".letter-window").classList.add("final");

    finalText.innerHTML = `<strong>Yay! ${chosenActivity} on ${chosenDate} at ${chosenTime} 💕</strong>`;
    finalText.style.display = "block";
});