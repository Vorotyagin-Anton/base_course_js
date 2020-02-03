'use strict'

const fields = [["raw","A","B","C","D","E","F","G","H","raw"],["column",1,2,3,4,5,6,7,8,"column"]];
const piecesLetters = ["p","r","kn","b","q","ki"];
const piecesIcons = ['<i class="fas fa-chess-pawn"></i>',
'<i class="fas fa-chess-rook"></i>',
'<i class="fas fa-chess-knight"></i>',
'<i class="fas fa-chess-bishop"></i>',
'<i class="fas fa-chess-queen"></i>',
'<i class="fas fa-chess-king"></i>'];

let piecesType = piecesIcons;

function createBoard(array){

	let board = document.querySelector(".board");
	
	function createCell(rawElement, index){

		for(let i = 0; i < array[0].length; i++){

			let cell = document.createElement("div");
			
			cell.className = array[0][index] + "-" + array[1][i];
			cell.classList.add("cell"); 
			
			board.appendChild(cell);

			if((i % 2 == 0) && (index % 2 !== 0)) {cell.classList.add("cell_cellColor2");};
			if((i % 2 !== 0) && (index % 2 == 0)) {cell.classList.add("cell_cellColor2");};

			if(cell.className.indexOf("raw-") == 0) {cell.classList.add("cell_noneColor"); cell.innerHTML = array[1][i];};
			if(cell.className.indexOf("-column") == 1) {cell.classList.add("cell_noneColor"); cell.innerHTML = array[0][index];};
			if(cell.className.indexOf("raw-column") == 0) {cell.classList.add("cell_noneColor"); cell.innerHTML = "";};

			if(cell.className.indexOf("-2") == 1) {cell.classList.add("cell_pieceWhite"); cell.innerHTML = piecesType[0]};
			if(cell.className.indexOf("A-1") == 0) {cell.classList.add("cell_pieceWhite"); cell.innerHTML = piecesType[1]};
			if(cell.className.indexOf("H-1") == 0) {cell.classList.add("cell_pieceWhite"); cell.innerHTML = piecesType[1]};
			if(cell.className.indexOf("B-1") == 0) {cell.classList.add("cell_pieceWhite"); cell.innerHTML = piecesType[2]};
			if(cell.className.indexOf("G-1") == 0) {cell.classList.add("cell_pieceWhite"); cell.innerHTML = piecesType[2]};
			if(cell.className.indexOf("C-1") == 0) {cell.classList.add("cell_pieceWhite"); cell.innerHTML = piecesType[3]};
			if(cell.className.indexOf("F-1") == 0) {cell.classList.add("cell_pieceWhite"); cell.innerHTML = piecesType[3]};
			if(cell.className.indexOf("D-1") == 0) {cell.classList.add("cell_pieceWhite"); cell.innerHTML = piecesType[4]};
			if(cell.className.indexOf("E-1") == 0) {cell.classList.add("cell_pieceWhite"); cell.innerHTML = piecesType[5]};
			if(cell.className.indexOf("-7") == 1) {cell.classList.add("cell_pieceBlack"); cell.innerHTML = piecesType[0]};
			if(cell.className.indexOf("A-8") == 0) {cell.classList.add("cell_pieceBlack"); cell.innerHTML = piecesType[1]};
			if(cell.className.indexOf("H-8") == 0) {cell.classList.add("cell_pieceBlack"); cell.innerHTML = piecesType[1]};
			if(cell.className.indexOf("B-8") == 0) {cell.classList.add("cell_pieceBlack"); cell.innerHTML = piecesType[2]};
			if(cell.className.indexOf("G-8") == 0) {cell.classList.add("cell_pieceBlack"); cell.innerHTML = piecesType[2]};
			if(cell.className.indexOf("C-8") == 0) {cell.classList.add("cell_pieceBlack"); cell.innerHTML = piecesType[3]};
			if(cell.className.indexOf("F-8") == 0) {cell.classList.add("cell_pieceBlack"); cell.innerHTML = piecesType[3]};
			if(cell.className.indexOf("D-8") == 0) {cell.classList.add("cell_pieceBlack"); cell.innerHTML = piecesType[4]};
			if(cell.className.indexOf("E-8") == 0) {cell.classList.add("cell_pieceBlack"); cell.innerHTML = piecesType[5]};


		}

	}

	array[0].forEach(createCell);

}

createBoard(fields);
