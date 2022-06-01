const turnSpan = document.getElementById("turnSpan");
let currentChar = "";
if(Math.round(Math.random() * (2-1) + 1) == 2){
currentChar = "X";
} else {
currentChar = "O";
}

turnSpan.textContent = currentChar;

const size = 3;
let rows;

setUp();
function setUp(){
	let gridSize = "";
	let gridItemElem = document.createElement("div");
	gridItemElem.setAttribute("class", "grid-item");
	for(let i = 0; i < size; i++){
		gridSize += "auto ";
	
	}

	for(let i=0; i < size * size; i++){
document.getElementById("gameGrid").appendChild(gridItemElem.cloneNode(false));
	}
	document.getElementById("gameGrid").style.gridTemplateColumns = gridSize;

	let gridItems = document.querySelectorAll(".grid-item");
	gridItems.forEach((item) => item.onclick = gridClick);

/* SET ROWS */
let rowCounter = 1;
for(let i=0;i<gridItems.length;i++){
gridItems[i].classList.add("row" + rowCounter);
let rowVar = i + 1;
	if (rowVar % size == 0){
	rowCounter++;
	}
}

rows =  new row(size);

}

function gridClick(evt){
	evt.target.classList.add("filled");
	evt.target.textContent = currentChar;
	evt.target.onclick = null;
	if(currentChar == "X") {
	currentChar = "O";
	}else{
	currentChar = "X";
	}

/* Make Checks */
setTimeout(function(){
/* Horizontal Checks */
let xHorizontal = 1;
/* X Checks */
for(let i=1;i<=size; i++){
	let currentRow = rows["row" + i];
	let currentCheck = new Array();
	for(let u = 0; u<size; u++) {
	 if(currentRow[u].textContent == "X") {
		currentCheck.push(true);
	}else{
		currentCheck.push(false);
	}
	
	}
	if(currentCheck.every((element) => element == true)){
	alert("X WINS!");
        restart();
	}

}

let oHorizontal = 1;
/* O Checks */
for(let i=1;i<=size; i++){
	let currentRow = rows["row" + i];
	let currentCheck = new Array();
	for(let u = 0; u<size; u++) {
	 if(currentRow[u].textContent == "O") {
		currentCheck.push(true);
	}else{
		currentCheck.push(false);
	}
	
	}
	if(currentCheck.every((element) => element == true)){
	alert("O WINS!");
        restart();
	}

}

/* Vertical Checks */
/* X Checks */
for(let i=0;i<size; i++){
	
	let currentCheck = new Array();
	for(let u = 1; u<=size; u++) {
	let currentRow = rows["row" + u];

	 if(currentRow[i].textContent == "X") {
		currentCheck.push(true);
	}else{
		currentCheck.push(false);
	}
	
	}
	if(currentCheck.every((element) => element == true)){
	alert("X WINS!");
        restart();
	}
	

}

/* O Checks */
for(let i=0;i<size; i++){
	
	let currentCheck = new Array();
	for(let u = 1; u<=size; u++) {
	let currentRow = rows["row" + u];

	 if(currentRow[i].textContent == "O") {
		currentCheck.push(true);
	}else{
		currentCheck.push(false);
	}
	
	}
	if(currentCheck.every((element) => element == true)){
	alert("O WINS!");
        restart();
	}
	

}

/* Diagonal Checks */
/* X Checks */
let xCurrentUpDiagRow;
let xCurrentUpDiagCheck = new Array();
/* up diagnonal */
for(let i=1;i<=size;i++){
xCurrentUpDiagRow = rows["row" + i];

if(xCurrentUpDiagRow[i-1].textContent == "X") {
		xCurrentUpDiagCheck.push(true);
	}else{
		xCurrentUpDiagCheck.push(false);
	}
}
if(xCurrentUpDiagCheck.every((element) => element == true)){
	alert("X WINS!");
        restart();
	}
let xCurrentDownDiagRow;
let xCurrentDownDiagCheck = new Array();
let downCounter = 0;
/* Down diagnonal */
for(let i=size;i>=1;i--){
xCurrentDownDiagRow = rows["row" + i];

if(xCurrentDownDiagRow[downCounter].textContent == "X") {

		xCurrentDownDiagCheck.push(true);
	}else{
		xCurrentDownDiagCheck.push(false);
	}
downCounter++;
}

if(xCurrentDownDiagCheck.every((element) => element == true)){
	alert("X WINS!");
        restart();
	}

/* O Checks */
let oCurrentUpDiagRow;
let oCurrentUpDiagCheck = new Array();
/* up diagnonal */
for(let i=1;i<=size;i++){
oCurrentUpDiagRow = rows["row" + i];

if(oCurrentUpDiagRow[i-1].textContent == "O") {
		oCurrentUpDiagCheck.push(true);
	}else{
		oCurrentUpDiagCheck.push(false);
	}
}
if(oCurrentUpDiagCheck.every((element) => element == true)){
	alert("O WINS!");
        restart();
	}
let oCurrentDownDiagRow;
let oCurrentDownDiagCheck = new Array();
downCounter = 0;
/* Down diagnonal */
for(let i=size;i>=1;i--){
oCurrentDownDiagRow = rows["row" + i];
if(oCurrentDownDiagRow[downCounter].textContent == "O") {

		oCurrentDownDiagCheck.push(true);
	}else{
		oCurrentDownDiagCheck.push(false);
	}
downCounter++;
}

if(oCurrentDownDiagCheck.every((element) => element == true)){
	alert("O WINS!");
        restart();
	}

turnSpan.textContent = currentChar;
const allFilledGrids = document.querySelectorAll(".filled");
if (allFilledGrids.length >= size * size) {
alert("GAME OVER!");
        restart();
}
},20);



}


/* Restart Function */
function restart(){
const grid = document.getElementById("gameGrid");
const gridLength = grid.children.length;
for(let i = 0; i< gridLength; i++) {
grid.children[0].remove();
}
setUp();
}


/* Row Constructor Function */
function row(size) {

for(let i = 1; i <= size; i++){
var temp = "row" + i;
	this[temp] = document.querySelectorAll(".row" + i);
}
}