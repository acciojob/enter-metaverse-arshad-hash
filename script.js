//your JS code here. If required.
//
let button= document.getElementById("enterBtn");
let change = document.getElementById("status");
button.addEventListener("click" , onclick);

function onclick(){
	
let h1=document.createElement("h1");
	change.innerText="";
h1.innerText="Entered Metaverse";
change.appendChild(h1);
	
}

