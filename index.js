var fullName = prompt("enter your name");
var noSpaces = fullName.split(" ").join("");
var names = noSpaces.toLowerCase();
const machaNames = ["mouni","mounish","cheenu","srinivas","dhanesh","sunil"];
const girlNames = ["janani","sushmitha","susi","deepa","vinitha","shakila","vini","sakila"];
const genNames = ["prashanth","prasanth","dilipkumar"];
const mamaNames = ["bharath","barath","ragu","raguraman","sarath","dilli","dillibabu"];
const annaNames = ["sharath", "vinoth","shoban","nandakumar","nandhakumar","nandha","nanda"];
const akkaNames = ["swapna","usha","durga","suganya","revathi","revathy","priya","priyanka","kavitha","kalpana"];
const ofzAnna = ["thirupathi","sangappa","abhishek"];
const ofzJi = ["shivukumar","akhilesh","akilesh","pavan","gopiram","manjunatha r","manjunatha","amruth","prbhakar","prabhakar","balaji"];
const mummy = ["jyothi"]; 
const aunty = ["roopa"];
const sir = ["anilkulkarni","kashi","balachandra","anil"];

const nikhil = ["nikhil"];
const anni = ["sneka","snekha","sneha"];
const sissy = ["praveena","pravena","pravina","nisha","preethi","preethy","shalini","shallni","shalni"]
var emoji = String.fromCodePoint(0x1F61C);

if (machaNames.includes(names)){
    document.querySelector(".message").textContent="Dei Macha " +names+ " soli mudiyapodhu shock aagadha, enake oru ponnu okay paniduchu macha engagement panikapora, ungalukum seekram kedaikum vaitherichal padama vandhu serunga da aana sambhar soru dhan"+emoji;   
}
else if(girlNames.includes(names)){
    document.querySelector(".message").textContent="Hey " +names+ " baby...Enaku engagement aagapodhu happy ah dhan iruku but unna lam miss pana poranu nenacha konjam feeling ah iruku " +String.fromCodePoint(0x1F622)+ " aanalum nee epome en aalu dhan kavala padama mama engagement ku vandhu seru"+String.fromCodePoint(0x1F60D);   
}
else if(mamaNames.includes(names)){
    document.querySelector(".message").textContent="Hi mama...Enaku engagement aagapodhu, indha feel um nalla dha iruku so neengalum andha sandhoshathla kalandhukanum nu en aasai adhanala engagement ku marakama vandhudu mama";   
}
else if(annaNames.includes(names)){
    document.querySelector(".message").textContent="Hey " +names+ " anna...Enaku engagement aagapodhu, indha feel um nalla dha iruku so neengalum andha sandhoshathla kalandhukanum nu enaku oru chinnna aasa adhanala engagement ku marakama vandhudunga";   
}
else if(ofzAnna.includes(names)){
    document.querySelector(".message").textContent="Hey " +names+ " anna...I am overjoyed to share the good news of my engagement with you and I heartily invite you to join us in the celebration and shower your blessings on us";   
}
else if(akkaNames.includes(names)){
    document.querySelector(".message").textContent="Hey " +names+ " akka...Enaku engagement aagapodhu, indha feel um nalla dha iruku so neeyum andha sandhoshathla kalandhukanum nu enaku oru chinnna aasa adhanala engagement ku marakama vandhudu ka.";   
}
else if(ofzJi.includes(names)){
    document.querySelector(".message").textContent="Hi Ji,I am overjoyed to share the good news of my engagement with you ji, I heartfully invite you to join us in the celebration and shower your blessings on us";   
}
else if(mummy.includes(names)){
    document.querySelector(".message").textContent="Hi " +names+ " mummy...I am happy to share the good news of my engagement with you and invite you to join us in the celebration and shower your blessings on us";   
}
else if(aunty.includes(names)){
    document.querySelector(".message").textContent="Hi aunty, I am overjoyed to share the good news of my engagement with you and invite you to join us in the celebration and shower your blessings on us";   
}
else if(nikhil.includes(names)){
    document.querySelector(".message").textContent="Hey boshhh...how r you boshhh? you know what, am getting engaged....just come to the engagement and join us in the celebration man";
}
else if(sir.includes(names)){
    document.querySelector(".message").textContent="Hi " +names+ "sir, Happy to announce that I am getting Engaged and I cordially invite you to join the ceremony and shower your blessings on us";
}
else if(genNames.includes(names)){
    document.querySelector(".message").textContent="Hi " +names+ ",Enaku kalyanam aagapodhu, indha feel um nalla dhan pa iruku so neeyum andha sandhoshathla kalandhukanum nu nan aasa padra adhanala engagement ku marakama vandhudu " +names+"." ;
}
else if(anni.includes(names)){
    document.querySelector(".message").textContent="Anni'nravanga inoru amma maari adhanala engagement ah munadi ninnu nadathi kudunga apdiye andha honeymoon package ah matum annan kita soli book pani kuduka solunga " +emoji+ " plzz anni..."
}
else if(sissy.includes(names)){
    document.querySelector(".message").textContent="Hi papa annan ku marriage fix ayiduchu...adhanala nov 19th engagement paniklam nu unga anniyum nanum decide pani irukom so, kandipa varanum...miss panadhinga apram nan varutha paduven..."
}
else {
document.querySelector(".message").textContent="Hey hi "+names+"! 'Matches are made in heaven!' Happy to announce that we are getting Engaged Let's celebrate the beginning to our new life...We cordially invite you to join the ceremony and shower your blessings on us";
}
