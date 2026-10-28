(() => {
const $=id=>document.getElementById(id);
const isDe=()=>window.mathStudyLanguage==="de";
const t=(en,de)=>isDe()?de:en;
const root=$("extra-lessons-root");
const topics=[
 {id:"area",title:["Perimeter and area","Umfang und Fläche"],subtitle:["Explore how the boundary and the space inside a rectangle are different.","Entdecke den Unterschied zwischen Randlänge und Flächeninhalt eines Rechtecks."]},
 {id:"coordinates",title:["The coordinate plane","Das Koordinatensystem"],subtitle:["Move the point and read its horizontal and vertical position.","Bewege den Punkt und lies seine waagerechte und senkrechte Position ab."]},
 {id:"angles",title:["Angles in action","Winkel in Bewegung"],subtitle:["Change the angle and classify it by its size.","Verändere den Winkel und ordne ihn nach seiner Größe ein."]},
 {id:"data",title:["Data and the mean","Daten und Mittelwert"],subtitle:["Change the values to see how the mean responds.","Verändere die Werte und beobachte, wie sich der Mittelwert verändert."]},
 {id:"probability",title:["Probability lab","Wahrscheinlichkeitslabor"],subtitle:["Change the wheel's odds, then run a random experiment.","Verändere die Chancen des Glücksrads und starte ein Zufallsexperiment."]}
];
function createSections(){
 if(!root)return;
 root.innerHTML=topics.map(x=>'<section class="extra-lesson lesson-panel" id="lesson-'+x.id+'" hidden></section>').join("");
}
function areaMarkup(){return '<div class="lesson-heading"><div><div class="eyebrow">'+t("MEASUREMENT · INTERACTIVE EXPLORER","MESSEN · INTERAKTIVES EXPERIMENT")+'</div><h2>'+t("Perimeter and area","Umfang und Fläche")+'</h2><p>'+t("Change the side lengths. The perimeter measures the boundary; area measures the surface inside.","Verändere die Seitenlängen. Der Umfang misst den Rand; die Fläche misst den Innenbereich.")+'</p></div><span class="lesson-badge">Grades 3–5</span></div><div class="extra-grid"><div class="extra-card"><h3>'+t("Resize the rectangle","Rechteck verändern")+'</h3><p>'+t("Use the sliders to change its whole-number side lengths.","Ändere die ganzzahligen Seitenlängen mit den Schiebereglern.")+'</p><div class="extra-controls"><label class="extra-control"><span>'+t("Length","Länge")+'</span><input id="area-length" type="range" min="2" max="10" value="6"><output id="area-length-out">6</output></label><label class="extra-control"><span>'+t("Width","Breite")+'</span><input id="area-width" type="range" min="2" max="8" value="4"><output id="area-width-out">4</output></label></div><div class="extra-stat-row"><div class="extra-stat"><span>'+t("Perimeter","Umfang")+'</span><strong id="area-perimeter">20</strong></div><div class="extra-stat"><span>'+t("Area","Fläche")+'</span><strong id="area-value">24</strong></div></div><p class="extra-note">'+t("Perimeter = 2 × (length + width). Area = length × width.","Umfang = 2 × (Länge + Breite). Fläche = Länge × Breite.")+'</p></div><div class="extra-card"><h3>'+t("Watch the shape change","Beobachte die Form")+'</h3><p>'+t("Each grid square represents one square unit.","Jedes Kästchen entspricht einer Flächeneinheit.")+'</p><div class="rectangle-stage"><div id="area-rectangle" class="area-rectangle" style="width:132px;height:88px">6 × 4</div></div><p id="area-insight" class="extra-feedback" aria-live="polite"></p></div></div><div class="practice-card"><h3>'+t("Think about it","Denk darüber nach")+'</h3><p>'+t("Can two rectangles have the same area but different perimeters? Try changing the sliders to investigate.","Können zwei Rechtecke dieselbe Fläche, aber unterschiedliche Umfänge haben? Probiere es mit den Schiebereglern aus.")+'</p></div>';}
function coordinatesMarkup(){return '<div class="lesson-heading"><div><div class="eyebrow">'+t("NUMBER & SPACE · INTERACTIVE GRID","ZAHLEN & RAUM · INTERAKTIVES GITTER")+'</div><h2>'+t("The coordinate plane","Das Koordinatensystem")+'</h2><p>'+t("Coordinates are written (x, y): move horizontally first, then vertically.","Koordinaten schreibt man als (x, y): zuerst waagerecht, dann senkrecht gehen.")+'</p></div><span class="lesson-badge">Grades 4–7</span></div><div class="extra-grid"><div class="extra-card"><h3>'+t("Move the point","Punkt bewegen")+'</h3><label class="extra-control"><span>'+t("Horizontal x","Waagerecht x")+'</span><input id="coord-x" type="range" min="-5" max="5" value="2"><output id="coord-x-out">2</output></label><label class="extra-control"><span>'+t("Vertical y","Senkrecht y")+'</span><input id="coord-y" type="range" min="-5" max="5" value="3"><output id="coord-y-out">3</output></label><div class="extra-stat-row"><div class="extra-stat"><span>'+t("Your point","Dein Punkt")+'</span><strong id="coord-pair">(2, 3)</strong></div></div><p id="coord-explain" class="extra-feedback" aria-live="polite"></p></div><div class="extra-card"><h3>'+t("Read the grid","Gitter ablesen")+'</h3><svg id="coordinate-svg" class="coordinate-stage" viewBox="0 0 300 300" role="img" aria-label="'+t("Coordinate grid with a movable point","Koordinatengitter mit beweglichem Punkt")+'"></svg></div></div>';}
function anglesMarkup(){return '<div class="lesson-heading"><div><div class="eyebrow">'+t("GEOMETRY · EXPLORE AN ANGLE","GEOMETRIE · WINKEL ERKUNDEN")+'</div><h2>'+t("Angles in action","Winkel in Bewegung")+'</h2><p>'+t("An angle measures the turn between two rays. The ray lengths do not determine the angle size.","Ein Winkel misst die Drehung zwischen zwei Strahlen. Die Strahllänge bestimmt nicht die Winkelgröße.")+'</p></div><span class="lesson-badge">Grades 3–7</span></div><div class="extra-grid"><div class="extra-card"><h3>'+t("Change the angle","Winkel verändern")+'</h3><label class="extra-control"><span>'+t("Angle","Winkel")+'</span><input id="angle-slider" type="range" min="0" max="359" value="60" step="1"><output id="angle-out">60°</output></label><div><span id="angle-class" class="angle-class">Acute angle</span></div><p class="extra-note">'+t("Acute: less than 90°. Right: exactly 90°. Obtuse: more than 90° and less than 180°. Reflex: more than 180° and less than 360°.","Spitz: kleiner als 90°. Recht: genau 90°. Stumpf: größer als 90° und kleiner als 180°. Überstumpf: größer als 180° und kleiner als 360°.")+'</p></div><div class="extra-card"><h3>'+t("See the opening","Öffnung sehen")+'</h3><svg id="angle-svg" class="angle-stage" viewBox="0 0 320 220" role="img" aria-label="'+t("Adjustable angle diagram","Veränderbares Winkeldiagramm")+'"></svg></div></div>';}
function dataMarkup(){return '<div class="lesson-heading"><div><div class="eyebrow">'+t("STATISTICS · LIVE DATA","STATISTIK · LEBENDE DATEN")+'</div><h2>'+t("Data and the mean","Daten und Mittelwert")+'</h2><p>'+t("The mean is the total of all values divided by the number of values.","Der Mittelwert ist die Summe aller Werte geteilt durch die Anzahl der Werte.")+'</p></div><span class="lesson-badge">Grades 4–7</span></div><div class="extra-grid"><div class="extra-card"><h3>'+t("Adjust each value","Werte anpassen")+'</h3><div id="data-controls" class="extra-controls"></div><div class="extra-stat-row"><div class="extra-stat"><span>'+t("Total","Summe")+'</span><strong id="data-total">20</strong></div><div class="extra-stat"><span>'+t("Mean","Mittelwert")+'</span><strong id="data-mean">5</strong></div></div><p id="data-insight" class="extra-feedback" aria-live="polite"></p></div><div class="extra-card"><h3>'+t("Compare the values","Werte vergleichen")+'</h3><div id="data-bars" class="data-bars" role="img" aria-label="'+t("Bar chart of the current data values","Balkendiagramm der aktuellen Datenwerte")+'"></div><p class="extra-note">'+t("Try increasing one value. The total changes by that amount, while the mean changes by that amount divided by five.","Erhöhe einen Wert. Die Summe steigt um diesen Betrag, der Mittelwert um diesen Betrag geteilt durch fünf.")+'</p></div></div>';}
function probabilityMarkup(){return '<div class="lesson-heading"><div><div class="eyebrow">'+t("CHANCE · RUN AN EXPERIMENT","ZUFALL · EXPERIMENT STARTEN")+'</div><h2>'+t("Probability lab","Wahrscheinlichkeitslabor")+'</h2><p>'+t("A larger sector gives a higher chance, but random results vary from experiment to experiment.","Ein größerer Bereich bedeutet eine höhere Chance. Zufallsergebnisse unterscheiden sich jedoch von Versuch zu Versuch.")+'</p></div><span class="lesson-badge">Grades 4–7</span></div><div class="extra-grid"><div class="extra-card"><h3>'+t("Set the chance","Chance einstellen")+'</h3><div class="probability-wheel" id="probability-wheel" aria-hidden="true"></div><label class="extra-control"><span>'+t("Purple sector","Violetter Bereich")+'</span><input id="probability-slider" type="range" min="10" max="90" value="60" step="10"><output id="probability-out">60%</output></label><p class="extra-note">'+t("The theoretical chance of purple is the sector's percentage.","Die theoretische Chance für Violett entspricht dem prozentualen Anteil des Bereichs.")+'</p><button id="probability-run" class="extra-action">'+t("Run 100 spins","100-mal drehen")+'</button></div><div class="extra-card"><h3>'+t("Expected vs observed","Erwartet und beobachtet")+'</h3><div class="extra-stat-row"><div class="extra-stat"><span>'+t("Expected purple","Erwartet violett")+'</span><strong id="probability-expected">60</strong></div><div class="extra-stat"><span>'+t("Observed purple","Beobachtet violett")+'</span><strong id="probability-observed">—</strong></div></div><p id="probability-feedback" class="extra-feedback" aria-live="polite">'+t("Run the experiment to see a random result.","Starte das Experiment, um ein Zufallsergebnis zu sehen.")+'</p><p class="extra-note">'+t("With more spins, the observed percentage often gets closer to the theoretical chance, but it will not match every time.","Bei mehr Drehungen liegt der beobachtete Prozentsatz oft näher an der theoretischen Chance, stimmt aber nicht immer genau überein.")+'</p></div></div>';}
function render(){
 if(!root)return;
 const markups={area:areaMarkup,coordinates:coordinatesMarkup,angles:anglesMarkup,data:dataMarkup,probability:probabilityMarkup};
 topics.forEach(x=>{const el=$("lesson-"+x.id);if(el)el.innerHTML=markups[x.id]()});
 initArea();initCoordinates();initAngles();initData();initProbability();
 const path=location.pathname;
 const topic=path.endsWith("perimeter-and-area.html")?"area":path.endsWith("coordinate-plane.html")?"coordinates":path.endsWith("angles-and-geometry.html")?"angles":path.endsWith("data-and-mean.html")?"data":path.endsWith("probability-lab.html")?"probability":null;
 if(topic&&window.showMathStudyTopic)window.showMathStudyTopic(topic);
}
function initArea(){
 const l=$("area-length"),w=$("area-width");if(!l||!w)return;
 function update(){const a=+l.value,b=+w.value;$("area-length-out").value=a;$("area-width-out").value=b;$("area-perimeter").textContent=2*(a+b);$("area-value").textContent=a*b;$("area-rectangle").style.width=(a*17)+"px";$("area-rectangle").style.height=(b*17)+"px";$("area-rectangle").textContent=a+" × "+b;$("area-insight").textContent=t("Area: ","Fläche: ")+(a*b)+". "+t("Perimeter: ","Umfang: ")+(2*(a+b))+".";}
 l.addEventListener("input",update);w.addEventListener("input",update);update();
}
function initCoordinates(){
 const x=$("coord-x"),y=$("coord-y"),svg=$("coordinate-svg");if(!x||!y||!svg)return;
 function update(){const a=+x.value,b=+y.value;$("coord-x-out").value=a;$("coord-y-out").value=b;$("coord-pair").textContent="("+a+", "+b+")";$("coord-explain").textContent=t("Start at zero, move ","Beginne bei null, gehe ")+(a<0?t("left ","nach links "):a>0?t("right ","nach rechts "):t("zero steps horizontally ","waagerecht keinen Schritt "))+t("then ","und dann ")+(b<0?t("down ","nach unten "):b>0?t("up ","nach oben "):t("zero steps vertically ","senkrecht keinen Schritt "))+".";let s="";for(let i=-5;i<=5;i++){const px=150+i*24,py=150-i*24;s+='<line x1="'+px+'" y1="20" x2="'+px+'" y2="280" stroke="#e7e9f2"/><line x1="20" y1="'+py+'" x2="280" y2="'+py+'" stroke="#e7e9f2"/>';if(i!==0){s+='<text x="'+px+'" y="166" text-anchor="middle">'+i+'</text><text x="137" y="'+(py+4)+'" text-anchor="end">'+i+'</text>';}}s+='<line x1="20" y1="150" x2="280" y2="150" stroke="#858ba1" stroke-width="2"/><line x1="150" y1="280" x2="150" y2="20" stroke="#858ba1" stroke-width="2"/><path d="M272 144 L280 150 L272 156 M144 28 L150 20 L156 28" fill="none" stroke="#858ba1" stroke-width="2"/><circle cx="'+(150+a*24)+'" cy="'+(150-b*24)+'" r="7" fill="#6657d9" stroke="#fff" stroke-width="3"/><text x="'+(150+a*24+10)+'" y="'+(150-b*24-10)+'" style="font-weight:800;fill:#4d43b4">('+a+', '+b+')</text><text x="282" y="169">x</text><text x="160" y="25">y</text>';svg.innerHTML=s;}
 x.addEventListener("input",update);y.addEventListener("input",update);update();
}
function initAngles(){
 const slider=$("angle-slider"),svg=$("angle-svg");if(!slider||!svg)return;
 function update(){
  const deg=+slider.value,rad=deg*Math.PI/180;
  const cx=150,cy=174,r=118;
  const ex=cx+r*Math.cos(rad),ey=cy-r*Math.sin(rad);
  $("angle-out").value=deg+"°";
  $("angle-class").textContent=deg===0?t("Zero angle","Nullwinkel"):deg<90?t("Acute angle","Spitzer Winkel"):deg===90?t("Right angle","Rechter Winkel"):deg===180?t("Straight angle","Gestreckter Winkel"):deg<180?t("Obtuse angle","Stumpfer Winkel"):t("Reflex angle","Überstumpfer Winkel");
  const arcR=42;
  const bx=cx+arcR*Math.cos(rad),by=cy-arcR*Math.sin(rad);
  const path=deg===0?"":'M '+(cx+arcR)+' '+cy+' A '+arcR+' '+arcR+' 0 '+(deg>180?1:0)+' 0 '+bx+' '+by;
  const mid=rad/2,labelR=arcR+22;
  const labelX=cx+labelR*Math.cos(mid),labelY=cy-labelR*Math.sin(mid);
  let rightAngle="";
  if(deg===90){
   const q=18;
   rightAngle='<path d="M '+(cx+q)+' '+cy+' L '+(cx+q)+' '+(cy-q)+' L '+cx+' '+(cy-q)+'" fill="none" stroke="#e4a34b" stroke-width="3"/>';
  }
  svg.innerHTML=
   '<line x1="22" y1="'+cy+'" x2="298" y2="'+cy+'" stroke="#e5e7f0" stroke-width="1.5"/>'+
   '<line x1="'+cx+'" y1="24" x2="'+cx+'" y2="204" stroke="#e5e7f0" stroke-width="1.5"/>'+
   '<line x1="'+cx+'" y1="'+cy+'" x2="'+(cx+r)+'" y2="'+cy+'" stroke="#6657d9" stroke-width="4" stroke-linecap="round"/>'+
   '<line x1="'+cx+'" y1="'+cy+'" x2="'+ex+'" y2="'+ey+'" stroke="#32b7a2" stroke-width="4" stroke-linecap="round"/>'+
   '<path d="'+path+'" fill="none" stroke="#e4a34b" stroke-width="4"/>'+rightAngle+
   '<circle cx="'+cx+'" cy="'+cy+'" r="5" fill="#3f4560"/>'+
   '<text x="'+Math.min(286,Math.max(28,labelX))+'" y="'+Math.min(202,Math.max(18,labelY))+'" text-anchor="middle" style="font-weight:800;fill:#9a6b1d">'+deg+'°</text>'+
   '<text x="292" y="'+(cy+17)+'" text-anchor="end">0°</text>'+
   '<text x="'+cx+'" y="16" text-anchor="middle">90°</text>'+
   '<text x="27" y="'+(cy+17)+'">180°</text>'+'<text x="'+cx+'" y="218" text-anchor="middle">270°</text>';
 }
 slider.addEventListener("input",update);update();
}
function initData(){
 const host=$("data-controls"),bars=$("data-bars");if(!host||!bars)return;
 const values=[3,5,7,4,6];
 host.innerHTML=values.map((v,i)=>'<label class="extra-control"><span>'+t("Value ","Wert ")+(i+1)+'</span><input data-data-index="'+i+'" type="range" min="1" max="10" value="'+v+'"><output>'+v+'</output></label>').join("");
 function update(){const ins=[...host.querySelectorAll("input")],vals=ins.map(e=>+e.value),sum=vals.reduce((a,b)=>a+b,0),mean=sum/vals.length;$("data-total").textContent=sum;$("data-mean").textContent=Number.isInteger(mean)?mean:mean.toFixed(1);$("data-insight").textContent=t("The mean is ","Der Mittelwert ist ")+$("data-mean").textContent+".";ins.forEach((e,i)=>e.nextElementSibling.value=vals[i]);bars.innerHTML=vals.map((v,i)=>'<div class="data-bar-wrap"><div class="data-bar" style="height:'+(v*13)+'px" title="'+v+'"></div><label>'+(i+1)+": "+v+'</label></div>').join("");}
 host.addEventListener("input",update);update();
}
function initProbability(){
 const slider=$("probability-slider"),wheel=$("probability-wheel"),run=$("probability-run");if(!slider||!wheel||!run)return;
 function update() {const p=+slider.value;wheel.style.background='conic-gradient(#6657d9 0 '+p+'%,#32b7a2 '+p+'% 100%)';$("probability-out").value=p+"%";$("probability-expected").textContent=p;}
 slider.addEventListener("input",update);run.addEventListener("click",()=>{const p=+slider.value,n=100;let hits=0;for(let i=0;i<n;i++)if(Math.random()*100<p)hits++;$("probability-observed").textContent=hits+" ("+hits+"%)";$("probability-feedback").textContent=t("Observed ","观察到 ")+hits+t(" purple results out of 100 spins. Expected: ","次紫色（共100次）。理论预期：")+p+"%.";});update();
}
createSections();window.renderExtraMathLessons=render;render();
window.addEventListener("math-study-language-changed",render);
})();