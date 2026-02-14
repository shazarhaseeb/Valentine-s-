const pages=document.querySelectorAll(".page");

const music=document.getElementById("music");

const noBtn=document.getElementById("noBtn");

const letter=document.getElementById("letter");

function showPage(id){

  pages.forEach(p=>p.classList.remove("active"));

  document.getElementById(id).classList.add("active");

}

function startExperience(){

  showPage("page2");

}

function yesClick(){

  showPage("page3");

}

function openRing(){

  document.querySelector(".lid").style.transform="rotateX(120deg)";

  document.getElementById("ring").style.opacity="1";

  music.volume = 0;

  music.play();

  let vol = 0;

  const fade = setInterval(() => {

    if (vol < 1) {

      vol += 0.1;

      music.volume = vol;

    } else {

      clearInterval(fade);

    }

  }, 200);

  setTimeout(()=>showPage("page4"),4000);

}

function goToLetter(){

  showPage("page5");

  typeLetter();

}

function goToFinal(){

  showPage("page6");

}

if(noBtn){

  noBtn.addEventListener("mouseenter",moveButton);

  noBtn.addEventListener("touchstart",moveButton);

}

function moveButton(){

  const x=Math.random()*200;

  const y=Math.random()*200;

  noBtn.style.left=x+"px";

  noBtn.style.top=y+"px";

}

function typeLetter(){

  letter.innerHTML="";

  const text=`Jaan 💖,

1 year with you feels magical ✨.

Your childish behaviour makes my heart smile every day 🥺💕.

Shona, you are my happiness, my peace, my forever 💞.

Bacha, when I found you… I found my home 🏡❤️.

I love you endlessly 💖`;

  let i=0;

  const typing=setInterval(()=>{

    letter.innerHTML+=text.charAt(i);

    i++;

    if(i>=text.length) clearInterval(typing);

  },35);

}