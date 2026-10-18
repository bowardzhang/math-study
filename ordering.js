(() => {
const $=id=>document.getElementById(id);
const pool=[{v:.125,t:"1/8 L",f:1},{v:.25,t:"1/4 L",f:1},{v:.375,t:"3/8 L",f:1},{v:.5,t:"1/2 L",f:1},{v:.625,t:"5/8 L",f:1},{v:.75,t:"3/4 L",f:1},{v:.875,t:"7/8 L",f:1}];
let items=[],chosen=[],round=1,checked=false,lang="en";
try{lang=localStorage.getItem("math-study-language")==="de"?"de":"en"}catch(e){}
const shuffle=a=>a.sort(()=>Math.random()-.5);
const text=(en,de)=>lang==="de"?de:en;
function display(x){if(x.kind==="fraction")return x.label.replace("L",lang==="de"?"l":"L");if(x.kind==="ml")return Math.round(x.v*1000)+" "+(lang==="de"?"ml":"ml");return x.v.toFixed(3).replace(".",lang==="de"?",":".")+" "+(lang==="de"?"l":"L")}
function make(){
 const a=shuffle(pool.slice()).slice(0,3).map(x=>({v:x.v,label:x.t,kind:"fraction"}));
 while(a.length<6){const v=Math.floor(Math.random()*1000)/1000;if(!a.some(x=>x.v===v))a.push({v,label:v.toFixed(3)+" L",kind:"litre"})}
 items=shuffle(a).map((x,i)=>({...x,id:i}));chosen=[];checked=false;round++;
 $("ordering-round").textContent=text("Round ","Runde ")+round;
 $("ordering-feedback").textContent="";$("ordering-feedback").className="practice-feedback";delete $("ordering-feedback").dataset.state;
 render();
}
function render(){
 const bank=$("number-bank"),out=$("selected-order");if(!bank||!out)return;bank.innerHTML="";out.innerHTML="";
 items.forEach(x=>{const b=document.createElement("button");b.className="number-tile";b.textContent=display(x);b.disabled=checked||chosen.some(y=>y.id===x.id);if(b.disabled&&!checked)b.classList.add("used");b.onclick=()=>{if(!checked){chosen.push(x);render()}};bank.appendChild(b)});
 if(!chosen.length){const e=document.createElement("span");e.className="order-empty";e.textContent=text("Tap numbers above to place them here.","Tippe oben auf Zahlen, um sie hier einzufügen.");out.appendChild(e)}
 chosen.forEach((x,i)=>{const b=document.createElement("button");b.className="ordered-tile";b.textContent=(i+1)+". "+display(x);b.disabled=checked;b.onclick=()=>{chosen=chosen.filter(y=>y.id!==x.id);render()};out.appendChild(b)});
 $("check-order").disabled=checked;
}
function feedback(state){
 const el=$("ordering-feedback");el.dataset.state=state;el.className="practice-feedback "+(state==="correct"?"good":state==="incorrect"?"bad":"");
 if(state==="incomplete"){el.textContent=text("Select all six numbers before checking.","Wähle alle sechs Zahlen aus.");return}
 if(state==="correct"){el.textContent=text("Correct! Well done!","Richtig! Gut gemacht!");return}
 el.textContent=text("Not quite. The correct order is:","Noch nicht ganz. Die richtige Reihenfolge ist: ");
 const list=document.createElement("div");list.className="correct-order-list";
 items.slice().sort((a,b)=>a.v-b.v).forEach(x=>{const s=document.createElement("span");s.textContent=display(x);list.appendChild(s)});el.appendChild(list);
}
$("check-order").addEventListener("click",()=>{if(chosen.length!==6){feedback("incomplete");return}const sorted=items.slice().sort((a,b)=>a.v-b.v);checked=true;feedback(chosen.every((x,i)=>x.id===sorted[i].id)?"correct":"incorrect");render()});
$("new-order").addEventListener("click",make);
window.addEventListener("storage",e=>{if(e.key==="math-study-language"){lang=e.newValue==="de"?"de":"en";render();make()}});
$("language-select").addEventListener("change",e=>{lang=e.target.value;render();make()});
make();
})();