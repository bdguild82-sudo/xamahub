const loading = document.getElementById("loadingScreen");
const lock = document.getElementById("lockScreen");
const header = document.getElementById("header");
const site = document.getElementById("site");
const main = document.getElementById("main");

window.onload=()=>{
  setTimeout(()=>{
    loading.classList.add("fadeOut");
    setTimeout(()=>{
      loading.style.display="none";
      lock.style.display="flex";
    },1000);
  },2500);
};

const input=document.getElementById("passwordInput");
const btn=document.getElementById("passwordBtn");
const result=document.getElementById("passwordResult");
const tipsBox=document.getElementById("passwordTips");

const tips=[
 "♖♖Tucker get Off Chess♖♖",
 "🎆Happy New Year Bois🎆",
 "Obama Have Dihhh💔🥀",
 "Your In The Epstien File📁",
 "Indian Pajeet On Fire🔥"
];

let tip=0;
setInterval(()=>{
  tipsBox.textContent=tips[tip++%tips.length];
  tipsBox.style.opacity=1;
  setTimeout(()=>tipsBox.style.opacity=0,2000);
},5000);

btn.onclick=check;
input.onkeydown=e=>e.key==="Enter"&&check();

function check(){
  if(input.value==="XAMAKEYAUTH"){
    result.textContent="Unlocked...";
    lock.style.display="none";
    loading.style.display="flex";
    setTimeout(()=>{
      loading.classList.add("fadeOut");
      header.style.display="flex";
      site.style.display="flex";
      home();
    },2000);
  }else result.textContent="Wrong Password";
}

function setMain(html){
  main.classList.remove("visible");
  setTimeout(()=>{
    main.innerHTML=html;
    main.classList.add("visible");
  },50);
}

function home(){
  setMain(`
    <div class="game-grid">
      <img src="https://img.poki-cdn.com/.../drive-mad.png">
      <img src="https://img.poki-cdn.com/.../hill-climb-racing-lite.png">
      <img src="https://img.poki-cdn.com/.../blacktop-police-chase.png">
    </div>
  `);
}

function about(){
  setMain(`
    <div class="about-box">
      <h2>About</h2>
      <p>Educational Proxy Project</p>
      <p>By Xama</p>
    </div>
  `);
}

function searchPage(){
  setMain(`<iframe src="https://815moniquelane.cfd" style="width:80%;height:90%;border:none"></iframe>`);
}

function openAI(){
  setMain(`<iframe src="https://815moniquelane.cfd/algebra.html" style="width:60%;height:90%;border:none"></iframe>`);
}
