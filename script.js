const debug = true; // mode debug
var player=1; //1 for Yellow (player1), 2 for Red (player2)
var jeu = [
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
];


//verify the player
function selectColumn(col) {
	
	if (player==1) {
		jeu[6][col]=1;
		player=2;
		document.getElementById("colorTurn").innerHTML="Tour : Joueur 2";
	} else {
		jeu[6][col]=2;
		player=1;
		document.getElementById("colorTurn").innerHTML="Tour : Joueur 1";
	}

	placeColor();
}


//to place a color on board
function placeColor() {
	for (var row = 0; row < 7; row++) {
		for (var col = 0; col < 7; col++) {
			if (jeu[row][col]==0) { 
				document.getElementById("cell"+row+col).style.backgroundColor="white";
			} else if (jeu[row][col]==1) { 
				document.getElementById("cell"+row+col).style.backgroundColor="yellow";
			} else if (jeu[row][col]==2) { 
				document.getElementById("cell"+row+col).style.backgroundColor="red";
			}
			// checkCol();
		}
	}  
}

//verify if an cell is taken
// function checkCol(col) {



var reset = document.getElementById("resetButton");
resetButton.addEventListener("click",
    function resetGame(){
        location.reload();
});

// //reset the game to restart
// function resetGrid() {
// 	var jeu = [
// 		[0, 0, 0, 0, 0, 0, 0],
// 		[0, 0, 0, 0, 0, 0, 0],
// 		[0, 0, 0, 0, 0, 0, 0],
// 		[0, 0, 0, 0, 0, 0, 0],
// 		[0, 0, 0, 0, 0, 0, 0],
// 		[0, 0, 0, 0, 0, 0, 0],
// 		[0, 0, 0, 0, 0, 0, 0],
// 	];
// 	placeColor();
// }
var reset = document.getElementById("resetButton");
resetButton.addEventListener("click",
    function resetGame(){
        location.reload();
});




// var joueur=1; //1 pour joueur 1 et 2 pour joueur 2
// var jeu= [[0,0,0,0,0,0,0,],
//          [0,0,0,0,0,0,0,],
//          [0,0,0,0,0,0,0,],
//          [0,0,0,0,0,0,0,],
//          [0,0,0,0,0,0,0,],
//          [0,0,0,0,0,1,0,],
//          [0,0,0,0,0,0,0,]];



// var table = document.getElementById("myTable"),rIndex,cIndex;

// // table rows
// for(var i = 0; i < table.rows.length; i++)
// {
//     // row cells
//     for(var j = 0; j < table.rows[i].cells.length; j++)
//     {
//         table.rows[i].cells[j].onclick = function()
//         {
//             rIndex = this.parentElement.rowIndex;
//             cIndex = this.cellIndex;
//             console.log("Row : "+rIndex+" , Cell : "+cIndex);
//             console.log(jeu[rIndex][cIndex]);
//             jeu[rIndex][cIndex]= 1;
//             console.log(jeu[rIndex][cIndex]);
//             jeu.forEach(Number => console.log(Number));

//         };
//     }
// }
// var event;
// table.addEventListener("click",
//         function (e) {
//             console.log(e.target);
//             event = e.target;
//         }
// );

