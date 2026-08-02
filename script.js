// =========================
// Wedding Date & Countdown
// =========================
const weddingDate = new Date("August 27, 2026 23:37:00").getTime();

const timer = document.getElementById("timer");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {
        timer.innerHTML = "<h2>🎉 It's Wedding Time! 🎉</h2>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = `
        <div>${days}<br><small>Days</small></div>
        <div>${hours}<br><small>Hours</small></div>
        <div>${mins}<br><small>Minutes</small></div>
        <div>${secs}<br><small>Seconds</small></div>
    `;
}

setInterval(updateCountdown, 1000);
updateCountdown();


// =========================
// Open Invitation
// =========================

const openBtn = document.getElementById("openBtn");
const loader = document.getElementById("loader");
const main = document.getElementById("main");
const music = document.getElementById("music");

openBtn.addEventListener("click", () => {

    loader.style.display = "none";
    main.style.display = "block";

    music.play().catch(() => {});

    launchConfetti();

});


// =========================
// Confetti
// =========================

function launchConfetti(){

confetti({
particleCount:180,
spread:120,
origin:{y:0.6}
});

}


// =========================
// Floating Flower Petals
// =========================

setInterval(createPetal,500);

function createPetal(){

const petal=document.createElement("div");

petal.innerHTML="🌸";

petal.style.position="fixed";
petal.style.left=Math.random()*100+"vw";
petal.style.top="-30px";
petal.style.fontSize=(18+Math.random()*18)+"px";
petal.style.opacity=Math.random();

petal.style.animation="fall 8s linear";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},8000);

}


// =========================
// Falling Animation
// =========================

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{

transform:translateY(-10vh) rotate(0deg);

}

100%{

transform:translateY(110vh) rotate(360deg);

}

}

`;

document.head.appendChild(style);


// =========================
// RSVP (Demo)
// =========================

const rsvpButton=document.querySelector(".rsvp button");

rsvpButton.addEventListener("click",()=>{

const inputs=document.querySelectorAll(".rsvp input");

const textarea=document.querySelector(".rsvp textarea");

if(inputs[0].value===""){

alert("Please enter your name.");

return;

}

alert(
"Thank you, "+inputs[0].value+"!\n\nYour RSVP has been received ❤️"
);

inputs.forEach(i=>i.value="");

textarea.value="";

});


// =========================
// Smooth Fade on Scroll
// =========================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;
entry.target.style.transform="translateY(0)";

}

});

});

document