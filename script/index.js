function selectAllBtnHandler () {
	if ( !isSelectAllBtnToggle ) {
		document.querySelector(".select-all-btn").style.backgroundColor = "green";
		isSelectAllBtnToggle = true;
		selectAll();
	} else {
		document.querySelector(".select-all-btn").style.backgroundColor = "#F0F0F0";
		isSelectAllBtnToggle = false;
		deselectAll();
	}
}

function selectPackHandler(){
	iconName = this.getAttribute("src");
	if(iconName.indexOf(iconsPath) === -1){
		iconName = iconName.slice(iconName.lastIndexOf("/")+1);
		this.setAttribute("src", iconsPath+iconName);
	} else {
		iconName = iconName.slice(iconName.lastIndexOf("/")+1);
		this.setAttribute("src", greyIconsPath+iconName);
	}
}

function selectAll(){
	for(var i=0; i<packs.length; i++){
		iconName = packs[i].getAttribute("src");
		iconName = iconName.slice(iconName.lastIndexOf("/")+1);
		packs[i].setAttribute("src", iconsPath+iconName);
	}
}

function deselectAll(){
	for(var i=0; i<packs.length; i++){
		iconName = packs[i].getAttribute("src");
		iconName = iconName.slice(iconName.lastIndexOf("/")+1);
		packs[i].setAttribute("src", greyIconsPath+iconName);
	}
}

function generateRandomPack(){
	var activePacks = [];
	for(var i=0; i<packs.length; i++){
		iconName = packs[i].getAttribute("src");
		if(iconName.indexOf("grey-icons") === -1){
			activePacks.push(packs[i].getAttribute("alt"));
		}
	}
	var randomPackId = Math.floor(Math.random()*activePacks.length);
	if(activePacks.length>0){
		document.querySelector(".result-pack-icon").style.display = "block";
		iconName = activePacks[randomPackId].toLowerCase();
		iconName = iconName.replace(/ /g, "_");
		iconName = iconName+".png";
		document.querySelector(".result-pack-icon").setAttribute("src", iconsPath+iconName);
		document.querySelector(".pack-name").innerHTML = activePacks[randomPackId];
		
	} else{
		document.querySelector(".result-pack-icon").style.display = "none";
		document.querySelector(".pack-name").innerHTML = "No pack selected!";
	}
}
function generateRandomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	document.querySelector(".result-color").style.background = "linear-gradient(rgb("+r+","+g+","+b+"), rgb("+r+","+g+","+b+"))";
}





var isSelectAllBtnToggle = false;
var packs = document.querySelectorAll(".pack-icon");
var iconsPath = "images/icons/";
var greyIconsPath = "images/grey-icons/";
var iconName;
var resultColorGradientStyle = "linear-gradient(rgb(255,0,0), rgb(225,255,0), rgb(0,255,0), rgb(0,255,255), rgb(0,0,255), rgb(255,0,255))"

document.querySelector(".select-all-btn").addEventListener("click", selectAllBtnHandler);
document.querySelector(".generate-btn").addEventListener("click", generateRandomPack);
document.querySelector(".color-generator-btn").addEventListener("click", generateRandomColor);

for(var i=0; i<packs.length; i++){
	iconName = packs[i].getAttribute("src");
	iconName = iconName.slice(iconName.lastIndexOf("/")+1);
	packs[i].setAttribute("src", greyIconsPath+iconName);
	packs[i].addEventListener("click", selectPackHandler);
}