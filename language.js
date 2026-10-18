(() => {
const de = {
"languageLabel":"Sprache",
"learningPath":"LERNPFAD","numbers":"Zahlen","moreTopics":"Weitere Themen","topicOrdering":"Zahlen vergleichen","topicFractions":"Brüche addieren","topicMultiply":"Multiplikation & Division","topicPercentages":"Prozentrechnung","topicGeometry":"Geometrie","topicEquations":"Gleichungen","comingNote":"Weitere Lektionen folgen nach und nach.","sidebarFooter":"Für neugierige Lernende","maths":"Mathematik","audience":"GRUND- & WEITERFÜHRENDE SCHULE",
"orderingEyebrow":"ZAHLENVERSTÄNDNIS · INTERAKTIVES SPIEL","orderingTitle":"Vergleiche die Zahlen","orderingSubtitle":"Ordne die sechs Werte vom kleinsten zum größten.","practiceBadge":"Übung","sameValueTitle":"Andere Schreibweise, gleicher Wert","sameValueText":"Zahlen können als Dezimalzahlen, Brüche oder metrische Maße angegeben werden. Wandle sie in dieselbe Einheit um und vergleiche ihre Werte.",
"orderInstructionTitle":"Bringe die Zahlen in die richtige Reihenfolge","orderInstructionText":"Tippe die Werte vom kleinsten zum größten an. Tippe einen ausgewählten Wert erneut an, um ihn zu entfernen.","yourOrder":"Deine Reihenfolge","smallestToLargest":"Kleinster → größter","checkAnswer":"Antwort prüfen","newQuestion":"↻ Neue Aufgabe","orderingTip":"Tipp: 1 Liter = 1.000 Milliliter. Vergleiche die Werte, nicht ihre Schreibweise.",
"fractionsTitle":"Brüche mit unterschiedlichen Nennern addieren","fractionsSubtitle":"Mache die Teile gleich groß, bevor du sie addierst.","keyIdea":"Die Grundidee","keyIdeaText":"Der Nenner gibt an, in wie viele gleich große Teile ein Ganzes geteilt wird. Finde das kleinste gemeinsame Vielfache (kgV) und erweitere beide Brüche auf denselben Nenner.",
"tryAnother":"↻ Andere Brüche","fractionInputError":"Verwende ganze Zahlen, Zähler von 1 bis Nenner − 1 und Nenner von 2 bis 10.","step1":"SCHRITT 1","originalFractions":"Die ursprünglichen Brüche","originalFractionsText":"Jeder Kreis stellt ein Ganzes dar und ist in gleich große Teile geteilt.","step2":"SCHRITT 2","equalPieces":"Gleich große Teile bilden","equalPiecesText":"Erweitere beide Brüche auf denselben Nenner (das kgV).","fractionA":"Bruch A","fractionB":"Bruch B","equivalentA":"Erweiterter Bruch A","equivalentB":"Erweiterter Bruch B","step3":"SCHRITT 3 · ZÄHLER ADDIEREN","yourSum":"DEINE SUMME",
"checkUnderstanding":"PRÜFE DEIN VERSTÄNDNIS","quickPractice":"Kurze Übung","practicePrompt":"Berechne die Summe und wähle dann die richtige Antwort.","nextQuestion":"Nächste Aufgabe →","footerMessage":"Kleine Schritte schaffen ein starkes Fundament."
};
const en = {
"languageLabel":"Language",
"learningPath":"LEARNING PATH","numbers":"Numbers","moreTopics":"More topics","topicOrdering":"Comparing numbers","topicFractions":"Adding fractions","topicMultiply":"Multiplication & division","topicPercentages":"Percentages","topicGeometry":"Geometry","topicEquations":"Equations","comingNote":"More lessons will be added over time.","sidebarFooter":"Made for curious learners","maths":"Maths","audience":"PRIMARY & SECONDARY",
"orderingEyebrow":"NUMBER SENSE · INTERACTIVE GAME","orderingTitle":"Compare the numbers","orderingSubtitle":"Choose the six values from smallest to largest.","practiceBadge":"Practice","sameValueTitle":"Different forms, same value","sameValueText":"Numbers can be written as decimals, fractions or metric measurements. Convert them to the same unit and compare their values.",
"orderInstructionTitle":"Build the correct order","orderInstructionText":"Tap the values from smallest to largest. Tap a selected value again to remove it.","yourOrder":"Your order","smallestToLargest":"Smallest → largest","checkAnswer":"Check answer","newQuestion":"↻ New question","orderingTip":"Tip: 1 litre = 1,000 millilitres. Compare the values, not how they look.",
"fractionsTitle":"Adding fractions with different denominators","fractionsSubtitle":"Make the pieces the same size before you add them.","keyIdea":"The key idea","keyIdeaText":"The denominator tells you how many equal pieces make one whole. Find the least common multiple (LCM), then make equivalent fractions with the same denominator.",
"tryAnother":"↻ Try another","fractionInputError":"Use whole numbers, numerators from 1 to denominator − 1, and denominators from 2 to 10.","step1":"STEP 1","originalFractions":"See the original fractions","originalFractionsText":"Each circle is one whole, split into equal parts.","step2":"STEP 2","equalPieces":"Make equal-sized pieces","equalPiecesText":"Convert both fractions to the same denominator (the LCM).","fractionA":"Fraction A","fractionB":"Fraction B","equivalentA":"A equivalent fraction","equivalentB":"B equivalent fraction","step3":"STEP 3 · ADD THE NUMERATORS","yourSum":"YOUR SUM",
"checkUnderstanding":"CHECK YOUR UNDERSTANDING","quickPractice":"Quick practice","practicePrompt":"Calculate the sum, then choose the correct answer.","nextQuestion":"Next question →","footerMessage":"Small steps make strong foundations."
};
function apply(lang) {
 window.mathStudyLanguage=lang;
 const dict=lang==="de"?de:en;
 document.documentElement.lang=lang;
 document.title=lang==="de"?"Math Study — Mathematik verstehen":"Math Study — Understand Maths";
 document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(dict[k])el.textContent=dict[k]});
 const sel=document.getElementById("language-select");if(sel)sel.value=lang;
 const topic=location.pathname.endsWith("/adding-fractions.html")?"fractions":"ordering";
 const crumb=document.getElementById("breadcrumb-topic");
 if(crumb)crumb.textContent=topic==="fractions"?(lang==="de"?"Brüche addieren":"Adding fractions"):(lang==="de"?"Zahlen vergleichen":"Comparing numbers");
 const title=document.getElementById("page-title"),intro=document.getElementById("page-intro");
 if(title)title.innerHTML=topic==="fractions"?(lang==="de"?"Brüche verstehen<br><span>und addieren.</span>":"Make fractions make<br><span>sense.</span>"):(lang==="de"?"Zahlen verstehen.<br><span>Sicherer werden.</span>":"Understand numbers.<br><span>Build confidence.</span>");
 if(intro)intro.textContent=topic==="fractions"?(lang==="de"?"Verstehe gemeinsame Nenner und übe anschließend selbst das Addieren von Brüchen.":"See why common denominators work, then practise adding fractions yourself."):(lang==="de"?"Kurze Erklärungen, klare Bilder und interaktive Übungen machen wichtige Mathe-Ideen verständlich.":"Short explanations, clear visuals and hands-on practice to make important maths ideas click.");
 const footer=document.getElementById("footer-edition");if(footer)footer.textContent=lang==="de"?"Math Study · deutsche Ausgabe":"Math Study · English edition";
 const count=document.getElementById("practice-count");if(count)count.textContent=(lang==="de"?"Aufgabe ":"Question ")+(count.textContent.match(/\d+/)||["1"])[0];
 const lcm=document.getElementById("lcm-note");if(lcm)lcm.textContent=lcm.textContent.replace(/^LCM/,"kgV");
 if(typeof updateFractions==="function")updateFractions();
}
let lang="en";try{lang=localStorage.getItem("math-study-language")==="de"?"de":"en"}catch(e){}
const sel=document.getElementById("language-select");
if(sel)sel.addEventListener("change",()=>{lang=sel.value;try{localStorage.setItem("math-study-language",lang)}catch(e){}apply(lang)});
window.addEventListener("storage",e=>{if(e.key==="math-study-language"){lang=e.newValue==="de"?"de":"en";apply(lang)}});
apply(lang);
})();