//1
let generateChessBoard = () => {
	let arr = ['a','b','c','d','e','f','g','h']
	let columns = document.createElement('div');
	columns.className = "columns";
	document.body.appendChild(columns);
	let wrap = document.createElement('div');
	wrap.className = 'board-wrap';
	document.body.appendChild(wrap);
	let rows = document.createElement('div');
	rows.className = "rows";
	wrap.appendChild(rows);
	let board = document.createElement('div');
	board.className = "board";
	wrap.appendChild(board);
	
	for (let i = 0; i < 8; i++) {
		let row = document.createElement('div');
		row.className = 'row';
		row.innerHTML = i + 1;
		rows.appendChild(row);
		let column = document.createElement('div');
		column.className = 'column';
		column.innerHTML = arr[i];
		columns.appendChild(column);
		for (let j = 0; j < 8; j++) {
			let square = document.createElement('div');
			square.className = "square";
			if (i % 2) {
				if (j % 2) {
					square.classList.add('white');
					square.classList.remove('black');
				} else {
					square.classList.add('black');
					square.classList.remove('white');
				}
			} else {
				if (!(j % 2)) {
					square.classList.add('white');
					square.classList.remove('black');
				} else {
					square.classList.add('black');
					square.classList.remove('white');
				}
			}
				
			board.appendChild(square);
			}
	}
}	

generateChessBoard();

//2
let fillBoard = () => {
	let squares = document.getElementsByClassName('square');
	for (let i = 8; i < 16; i++) {
		let figure = document.createElement('span');
		figure.className = 'white-figure';
		figure.innerHTML = 'П';
		squares[i].appendChild(figure);
	}
	let figureT = document.createElement('span');
		figureT.className = 'white-figure';
		figureT.innerHTML = 'T';
		squares[0].appendChild(figureT);
		squares[7].appendChild(figureT.cloneNode(true));
	let figureK = document.createElement('span');
		figureK.className = 'white-figure';
		figureK.innerHTML = 'K';
		squares[1].appendChild(figureK);
		squares[6].appendChild(figureK.cloneNode(true));
	let figureS = document.createElement('span');
		figureS.className = 'white-figure';
		figureS.innerHTML = 'С';
		squares[2].appendChild(figureS);
		squares[5].appendChild(figureS.cloneNode(true));
	let figureQ = document.createElement('span');
		figureQ.className = 'white-figure';
		figureQ.innerHTML = 'Q';
		squares[3].appendChild(figureQ);
	let figureF = document.createElement('span');
		figureF.className = 'white-figure';
		figureF.innerHTML = 'Ф';
		squares[4].appendChild(figureF);

	let figureTB = document.createElement('span');
		figureTB.className = 'black-figure';
		figureTB.innerHTML = 'T';
		squares[56].appendChild(figureTB);
		squares[63].appendChild(figureTB.cloneNode(true));
	let figureKB = document.createElement('span');
		figureKB.className = 'black-figure';
		figureKB.innerHTML = 'K';
		squares[57].appendChild(figureKB);
		squares[62].appendChild(figureKB.cloneNode(true));
	let figureSB = document.createElement('span');
		figureSB.className = 'black-figure';
		figureSB.innerHTML = 'С';
		squares[58].appendChild(figureSB);
		squares[61].appendChild(figureSB.cloneNode(true));
	let figureQB = document.createElement('span');
		figureQB.className = 'black-figure';
		figureQB.innerHTML = 'Q';
		squares[59].appendChild(figureQB);
	let figureFB = document.createElement('span');
		figureFB.className = 'black-figure';
		figureFB.innerHTML = 'Ф';
		squares[60].appendChild(figureFB);
	for (let i = 48; i < 56; i++) {
		let figure = document.createElement('span');
		figure.className = 'black-figure';
		figure.innerHTML = 'П';
		squares[i].appendChild(figure);
	}
}
document.querySelector('.fill').addEventListener('click',fillBoard);


let fillBoardImges = () => {
	let squares = document.getElementsByClassName('square');
	for (let i = 0; i < 16; i++) {
		squares[i].children[0].remove();
		squares[i].classList.add('chess-figure');
	}
	for (let i = 48; i < 64; i++) {
		squares[i].children[0].remove();
		squares[i].classList.add('chess-figure');
	}
	for (let i = 48; i < 56; i++) {
		squares[i].classList.add('pown-black');
	}
	for (let i = 8; i < 16; i++) {
		squares[i].classList.add('pown-white');
	}
	squares[0].classList.add('rook-white');
	squares[7].classList.add('rook-white');
	squares[56].classList.add('rook-black');
	squares[63].classList.add('rook-black');
	squares[1].classList.add('knight-white');
	squares[6].classList.add('knight-white');
	squares[57].classList.add('knight-black');
	squares[62].classList.add('knight-black');
	squares[2].classList.add('bishop-white');
	squares[5].classList.add('bishop-white');
	squares[58].classList.add('bishop-black');
	squares[61].classList.add('bishop-black');
	squares[3].classList.add('king-white');
	squares[59].classList.add('king-black');
	squares[4].classList.add('queen-white');
	squares[60].classList.add('queen-black');
}

document.querySelector('.fill-figure').addEventListener('click',fillBoardImges);

