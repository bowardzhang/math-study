const $ = (id) => document.getElementById(id);
const navButtons = [...document.querySelectorAll(".topic-link")];
function showTopic(topic) {
  navButtons.forEach(button => button.classList.toggle("active", button.dataset.topic === topic));
  $("lesson-ordering").hidden = topic !== "ordering";
  $("lesson-fractions").hidden = topic !== "fractions";
  const title = topic === "fractions" ? "Adding fractions" : "Comparing decimals";
  $("breadcrumb-topic").textContent = title;
  $("page-title").innerHTML = topic === "fractions" ? 'Make fractions make<br><span>sense.</span>' : 'Understand numbers.<br><span>Build confidence.</span>';
  $("page-intro").textContent = topic === "fractions" ? "See why common denominators work, then practise adding fractions yourself." : "Short explanations, clear visuals and hands-on practice to make important maths ideas click.";
  $("welcome").style.background = topic === "fractions" ? "linear-gradient(115deg,#eff0ff 0%,#f7f4ff 57%,#e9f8f3 100%)" : "";
  $("sidebar").classList.remove("open");
}
navButtons.forEach(button => button.addEventListener("click", () => showTopic(button.dataset.topic)));
$("menu-toggle").addEventListener("click", () => $("sidebar").classList.toggle("open"));

const gcd = (a,b) => b ? gcd(b,a%b) : Math.abs(a);
const lcm = (a,b) => Math.abs(a*b)/gcd(a,b);
const simplify = (n,d) => { const g=gcd(n,d)||1; return [n/g,d/g]; };
const fractionText = (n,d) => { const [a,b]=simplify(n,d); return b===1 ? String(a) : a+"/"+b; };
function drawCircle(id,n,d) {
  const el=$(id); const size=160, center=80, radius=76;
  if(d<1 || d>60){el.innerHTML="";return;}
  const colors=["#7668e8","#33b7a4"];
  let paths="";
  for(let i=0;i<d;i++){
    const start=-Math.PI/2+i*2*Math.PI/d, end=-Math.PI/2+(i+1)*2*Math.PI/d;
    const x1=center+radius*Math.cos(start), y1=center+radius*Math.sin(start);
    const x2=center+radius*Math.cos(end), y2=center+radius*Math.sin(end);
    const large=end-start>Math.PI?1:0;
    const fill=i<n?colors[0]:"#f0eff8";
    const stroke=i<n?"#fff":"#dcd9ee";
    if(d===1){paths+=`<circle cx="80" cy="80" r="76" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>`;}
    else {paths+=`<path d="M ${center} ${center} L ${x1.toFixed(3)} ${y1.toFixed(3)} A ${radius} ${radius} 0 ${large} 1 ${x2.toFixed(3)} ${y2.toFixed(3)} Z" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>`;}
  }
  el.innerHTML=`<svg viewBox="0 0 160 160" role="img" aria-label="${n} of ${d} equal parts shaded">${paths}</svg>`;
}
function updateFractions(){
  const na=Number($("num-a").value), da=Number($("den-a").value), nb=Number($("num-b").value), db=Number($("den-b").value);
  const valid=[na,da,nb,db].every(Number.isInteger)&&na>=0&&na<da&&nb>=0&&nb<db&&da>=2&&da<=12&&db>=2&&db<=12;
  $("fraction-error").hidden=valid;
  if(!valid)return;
  const common=lcm(da,db), ma=common/da, mb=common/db, an=na*ma, bn=nb*mb, total=an+bn;
  $("label-a").textContent=fractionText(na,da); $("label-b").textContent=fractionText(nb,db);
  $("label-a-scaled").textContent=fractionText(an,common); $("label-b-scaled").textContent=fractionText(bn,common);
  drawCircle("circle-a",Math.min(na,da),da); drawCircle("circle-b",Math.min(nb,db),db);
  drawCircle("circle-a-scaled",Math.min(an,common),common); drawCircle("circle-b-scaled",Math.min(bn,common),common);
  $("lcm-note").textContent=`LCM(${da}, ${db}) = ${common} · A × ${ma} · B × ${mb}`;
  $("equation").textContent=`${an}/${common} + ${bn}/${common} = ${fractionText(total,common)}`;
  $("calculation-explainer").textContent=`Multiply the numerator and denominator of A by ${ma}, and those of B by ${mb}. Now both fractions have denominator ${common}, so add ${an} + ${bn} and keep the denominator. Simplify the result if possible.`;
  $("sum-result").textContent=fractionText(total,common);
}
["num-a","den-a","num-b","den-b"].forEach(id=>$(id).addEventListener("input",updateFractions));
$("random-fractions").addEventListener("click",()=>{
  const d1=2+Math.floor(Math.random()*7),d2=2+Math.floor(Math.random()*7);
  $("den-a").value=d1;$("den-b").value=d2;
  $("num-a").value=Math.floor(Math.random()*d1);$("num-b").value=1+Math.floor(Math.random()*(d2-1));
  updateFractions();
});
updateFractions();

let questionNumber=1, currentAnswer="", questionLocked=false;
function newQuestion(){
  questionLocked=false;
  const d1=[2,3,4,5,6,8][Math.floor(Math.random()*6)], d2=[2,3,4,5,6,8][Math.floor(Math.random()*6)];
  const n1=1+Math.floor(Math.random()*(d1-1)), n2=1+Math.floor(Math.random()*(d2-1));
  const common=lcm(d1,d2), total=n1*(common/d1)+n2*(common/d2);
  currentAnswer=fractionText(total,common);
  $("practice-question").textContent=`${fractionText(n1,d1)} + ${fractionText(n2,d2)} = ?`;
  const correct=[total,common];
  const opts=new Set([currentAnswer]);
  while(opts.size<4){
    const d=[common,d1,d2,common][Math.floor(Math.random()*4)];
    const n=Math.max(1,total+Math.floor(Math.random()*7)-3);
    opts.add(fractionText(n,d));
  }
  const arr=[...opts].sort(()=>Math.random()-.5);
  $("answer-options").innerHTML="";
  arr.forEach(answer=>{
    const button=document.createElement("button");button.className="answer-option";button.textContent=answer;
    button.addEventListener("click",()=>{
      if(questionLocked)return;questionLocked=true;
      [...$("answer-options").children].forEach(b=>{b.disabled=true;if(b.textContent===currentAnswer)b.classList.add("correct");});
      if(answer===currentAnswer){$("practice-feedback").textContent="Correct! Great work — you found a common denominator."; $("practice-feedback").className="practice-feedback good";}
      else{$("practice-feedback").textContent=`Not quite. The correct answer is ${currentAnswer}. Find the LCM, convert both fractions, then add the numerators.`; $("practice-feedback").className="practice-feedback bad";button.classList.add("incorrect");}
      $("next-question").hidden=false;
    });
    $("answer-options").appendChild(button);
  });
  $("practice-feedback").textContent="";$("practice-feedback").className="practice-feedback";$("next-question").hidden=true;
  $("practice-count").textContent=`Question ${questionNumber}`;
}
$("next-question").addEventListener("click",()=>{questionNumber++;newQuestion();});
newQuestion();