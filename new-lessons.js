(() => {
const $ = id => document.getElementById(id);
const lang = () => window.mathStudyLanguage === "de" ? "de" : "en";
const text = (en,de) => lang()==="de"?de:en;
function initSolids(){
 const net=$("cube-net"); if(!net)return;
 const faces={top:".cube-top",front:".cube-left",right:".cube-right"};
 const faceLabels={top:["Top","Oben"],front:["Front","Vorne"],left:["Left","Links"],right:["Right","Rechts"],back:["Back","Hinten"],bottom:["Bottom","Unten"]};
 const faceNames={top:["Top face selected.","Oberseite ausgewählt."],front:["Front face selected.","Vorderseite ausgewählt."],left:["The left face is hidden in this 3D view.","Die linke Fläche ist in dieser 3D-Ansicht verdeckt."],right:["Right face selected.","Rechte Seite ausgewählt."],back:["The back face is hidden in this 3D view.","Die Rückseite ist in dieser 3D-Ansicht verdeckt."],bottom:["The bottom face is hidden in this 3D view.","Die Unterseite ist in dieser 3D-Ansicht verdeckt."]};
 function selectFace(name){
  net.querySelectorAll(".net-face").forEach(b=>b.classList.toggle("selected",b.dataset.face===name));
  document.querySelectorAll(".cube-face").forEach(el=>el.classList.remove("highlight"));
  const selector=faces[name];const el=selector?document.querySelector(selector):null;if(el)el.classList.add("highlight");
  net.querySelectorAll(".net-face").forEach(b=>{b.textContent=faceLabels[b.dataset.face][lang()==="de"?1:0];});
  const svgLabels=document.querySelectorAll(".cube-diagram .cube-label");if(svgLabels.length===3){svgLabels[0].textContent=text("Top","Oben");svgLabels[1].textContent=text("Front","Vorne");svgLabels[2].textContent=text("Side","Seite");}
  $("net-feedback").textContent=faceNames[name][lang()==="de"?1:0];
 }
 net.querySelectorAll(".net-face").forEach(b=>b.addEventListener("click",()=>selectFace(b.dataset.face)));
 const viewText={front:["Front view: a square.","Vorderansicht: ein Quadrat."],side:["Side view: a square.","Seitenansicht: ein Quadrat."],top:["Top view: a square.","Draufsicht: ein Quadrat."]};
 document.querySelectorAll(".view-button").forEach(b=>b.addEventListener("click",()=>{
  document.querySelectorAll(".view-button").forEach(x=>x.classList.toggle("active",x===b));
  const shape=$("view-demo").querySelector(".view-shape");shape.className="view-shape "+(b.dataset.view==="side"?"side-shape":b.dataset.view==="top"?"top-shape":"front-shape");
  $("view-caption").textContent=viewText[b.dataset.view][lang()==="de"?1:0];
 }));
 let q=0;
 function solidsQuestion(){
  q++;$("solids-feedback").textContent="";$("solids-feedback").className="practice-feedback";$("solids-next").hidden=true;
  const questions=lang()==="de"?[
   {q:"Wie viele Flächen hat ein Würfel?",opts:["4","6","8","12"],a:"6",why:"Ein Würfel hat sechs quadratische Flächen."},
   {q:"Welche Form haben die Flächen eines Würfels?",opts:["Dreiecke","Kreise","Quadrate","Rechtecke unterschiedlicher Größe"],a:"Quadrate",why:"Alle sechs Flächen eines Würfels sind gleich große Quadrate."},
   {q:"Wie viele Ecken hat ein Würfel?",opts:["6","8","10","12"],a:"8",why:"Ein Würfel hat acht Ecken."}
  ]:[
   {q:"How many faces does a cube have?",opts:["4","6","8","12"],a:"6",why:"A cube has six square faces."},
   {q:"What shape are a cube's faces?",opts:["Triangles","Circles","Squares","Different-sized rectangles"],a:"Squares",why:"All six faces of a cube are equal squares."},
   {q:"How many vertices does a cube have?",opts:["6","8","10","12"],a:"8",why:"A cube has eight vertices."}
  ];
  const item=questions[(q-1)%questions.length];$("solidsPracticePrompt").textContent=item.q;
  const host=$("solids-options");host.innerHTML="";
  item.opts.forEach(opt=>{const b=document.createElement("button");b.className="answer-option";b.textContent=opt;b.addEventListener("click",()=>{if(host.dataset.locked==="1")return;host.dataset.locked="1";[...host.children].forEach(x=>{x.disabled=true;if(x.textContent===item.a)x.classList.add("correct")});const good=opt===item.a;$("solids-feedback").textContent=good?text("Correct! ","Richtig! ")+item.why:text("Not quite. ","Noch nicht ganz. ")+item.why;$("solids-feedback").className="practice-feedback "+(good?"good":"bad");$("solids-next").hidden=false});host.appendChild(b)});
  host.dataset.locked="0";
 }
 $("solids-next").addEventListener("click",solidsQuestion);
 window.addEventListener("math-study-language-changed",()=>{selectFace(net.querySelector(".net-face.selected")?.dataset.face||"front");solidsQuestion();});
 selectFace("front");solidsQuestion();
}
function initNegative(){
 const slider=$("number-slider");if(!slider)return;
 const ticks=$("numberline-ticks");
 for(let n=-10;n<=10;n++){const tick=document.createElement("div");tick.className="number-tick"+(n===0?" zero":"");tick.style.left=((n+10)/20*100)+"%";const label=document.createElement("span");label.textContent=n;tick.appendChild(label);ticks.appendChild(tick);}
 function update(){const n=Number(slider.value);$("numberline-value").textContent=n<0?"−"+Math.abs(n):String(n);$("numberline-point").style.left=((n+10)/20*100)+"%";$("numberline").setAttribute("aria-label",text("Number line, selected value ","Zahlenstrahl, ausgewählter Wert ")+n);}
 slider.addEventListener("input",update);update();
 let q=0,locked=false,answer=0;
 function next(){
  q++;locked=false;$("negative-feedback").textContent="";$("negative-feedback").className="practice-feedback";$("negative-next").hidden=true;
  let a,b;do{a=Math.floor(Math.random()*19)-9;b=Math.floor(Math.random()*19)-9}while(a===b||a===0||b===0);
  answer=Math.max(a,b);const fmt=n=>n<0?"−"+Math.abs(n):String(n);
  $("negative-question").textContent=fmt(a)+"  or  "+fmt(b)+" ?";
  $("negative-count").textContent=text("Question ","Aufgabe ")+q;
  const host=$("negative-options");host.innerHTML="";
  [a,b].sort(()=>Math.random()-.5).forEach(n=>{const btn=document.createElement("button");btn.className="answer-option";btn.textContent=fmt(n);btn.addEventListener("click",()=>{if(locked)return;locked=true;[...host.children].forEach(x=>{x.disabled=true;if(x.textContent===fmt(answer))x.classList.add("correct")});const good=n===answer;$("negative-feedback").textContent=good?text("Correct! The number farther to the right is greater.","Richtig! Die weiter rechts liegende Zahl ist größer."):text("Not quite. ","Noch nicht ganz. ")+fmt(answer)+text(" is greater because it lies farther to the right."," ist größer, weil sie weiter rechts liegt.");$("negative-feedback").className="practice-feedback "+(good?"good":"bad");$("negative-next").hidden=false});host.appendChild(btn)});
 }
 $("negative-next").addEventListener("click",next);window.addEventListener("math-study-language-changed",next);next();
}
document.addEventListener("DOMContentLoaded",()=>{initSolids();initNegative();});

function initLearningAnimations(){
 const fold=document.getElementById("fold-cube"),net=document.getElementById("cube-net"),cube=document.querySelector(".cube-diagram");
 if(fold&&net&&cube)fold.addEventListener("click",()=>{
  net.classList.remove("folding");cube.classList.remove("spinning");void net.offsetWidth;
  net.classList.add("folding");cube.classList.add("spinning");
  fold.disabled=true;
  window.setTimeout(()=>{net.classList.remove("folding");cube.classList.remove("spinning");fold.disabled=false;},1350);
 });
 const animate=document.getElementById("animate-fractions"),panel=document.querySelector(".strip-panel");
 if(animate&&panel)animate.addEventListener("click",()=>{
  panel.classList.remove("animating");void panel.offsetWidth;panel.classList.add("animating");animate.disabled=true;
  window.setTimeout(()=>{panel.classList.remove("animating");animate.disabled=false;},1600);
 });
}
document.addEventListener("DOMContentLoaded",initLearningAnimations);

})();