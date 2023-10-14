var fullName = prompt("enter your name");
var names = fullName.toLowerCase();
const machaNames = ["mouni","mounish","cheenu","srinivas","dhanesh","sunil","dilip kumar"];
const girlNames = ["janani","sushmitha","susi","deepa","vinitha","vini","sakila","shakila"];
const genNames = ["prashanth","prasanth"];
const mamaNames = ["bharath","barath","ragu","raguraman","sarath"];
const annaNames = ["sharath", "vinoth","shoban"];
const akkaNames = ["swapna","usha","durga"];
const ofzAnna = ["thirupathi","sangappa","abhishek"];
const ofzJi = ["shivukumar","pavan","gopiram","manjunatha r","manjunatha","amruth","prbhakar","prabhakar","balaji"];
const mummy = ["jyothi"]; 
const aunty = ["Roopa"];
const sir = ["anil kulkarni","kashi","balachandra"];
const nikhil = ["nikhil"];


if (machaNames.includes(names)){
    document.querySelector(".message").textContent="Dei Macha " +names+ " Enakum kalyanam aagapodhu bow bow, happy ah iruka macha so neeyum andha sandhoshathla kalandhukanum nu en aasai machan adhanala engagement ku vandhuru da marakama";   
}
else if(girlNames.includes(names)){
    document.querySelector(".message").textContent="Hey " +names+ " baby...Enaku kalyanam aagapodhu happy ah iruka bow bow, so neeyum andha sandhoshathla kalandhukanum nu enaku oru chinnna aasa adhanala engagement ku marakama vandhudu baby.";   
}
else if(mamaNames.includes(names)){
    document.querySelector(".message").textContent="Hi mama...Enakum kalyanam aagapodhu happy ah iruka, so neengalum andha sandhoshathla kalandhukanum nu en aasai adhanala engagement ku marakama vandhudunga mama";   
}
else if(annaNames.includes(names)){
    document.querySelector(".message").textContent="Hey " +names+ " anna...Enakum kalyanam aagapodhu happy ah iruka, so neengalum andha sandhoshathla kalandhukanum nu enaku oru chinnna aasa adhanala engagement ku marakama vandhudunga";   
}
else if(ofzAnna.includes(names)){
    document.querySelector(".message").textContent="Hey " +names+ " anna...I am overjoyed to share the good news of my engagement with you and invite you to join us in the celebration and shower your blessings on us";   
}
else if(akkaNames.includes(names)){
    document.querySelector(".message").textContent="Hey " +names+ " akka...Enakum kalyanam aagapodhu jolllly bow bow, so neeyum andha sandhoshathla kalandhukanum nu enaku oru chinnna aasa adhanala engagement ku marakama vandhudu ka.";   
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
    document.querySelector(".message").textContent="Hey boshhh...how r you man? you know what, am getting engaged (smiley) bow bow...just come to the engagement and join us in the celebration man";
}
else if(sir.includes(names)){
    document.querySelector(".message").textContent="Hi " +names+ "sir, Happy to announce that I am getting Engaged and I cordially invite you to join the ceremony and shower your blessings on us";
}
else if(genNames.includes(names)){
    document.querySelector(".message").textContent="Hi " +names+ ",Enakum kalyanam aagapodhu jolllllly, so neeyum andha sandhoshathla kalandhukanum nu nan aasa padra adhanala engagement ku marakama vandhudu " +names+"." ;
}
else {
document.querySelector(".message").textContent="Hey hi" +names+ "! 'Matches are made in heaven!' Happy to announce that we are getting Engaged Let's celebrate the beginning to our new life...We cordially invite you to join the ceremony and shower your blessings on us";
}