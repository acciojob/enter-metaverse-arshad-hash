//your JS code here. If required.
//
let button= document.getElementById("enterBtn");
button.addEventListener("click" , onclick);

function onclick(){
	
let h1=document.createElement("h1");
h1.innerText("Entered the Metaverse");
button.appendChild(h1);
	
}

