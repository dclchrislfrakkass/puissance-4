const debug = true; // mode debug
var player=1; //1 for Yellow (player1), 2 for Red (player2)
var row = 6;
var gameActive = false;
var turn = 0;
var jeu = [
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
];



///work/////

function startGame(){
	if (gameActive == true) return false; 
	gameActive = true;
}



function drawBoard() {
	if (gameActive) {
	for (col = 0; col<=6; col++) {
		for (row = 0; row<=6; row++) {
			if (jeu[row][col]==0) { 														//verify if the number in the array is 0
				document.getElementById("cell"+row+col).style.backgroundColor="white";
			} else if (jeu[row][col]==1) { 													//verify if the number in the array is 0
				document.getElementById("cell"+row+col).style.backgroundColor="yellow";
			} else if (jeu[row][col]==2) { 													//verify if the number in the array is 0
				document.getElementById("cell"+row+col).style.backgroundColor="red";
			}
		}	
	}
}}

function displayPlay() {
	if (gameActive){
		document.getElementById("colorTurn").innerHTML="Tour : Joueur "+player;
	}
	if (player == 1)
	{
		document.getElementById("colorTurn").style.color="yellow";
	} else {
		document.getElementById("colorTurn").style.color="red";
	}
}

// add a piece to the lowest available column 
function selectColumn(col) {
	lookForWin();
	if (gameActive) {
		// Look for the lowest point in this row that is open
		for (row=6; row>=0; row--) {
			if (jeu[row][col] == 0) {
				jeu[row][col] = player;
				drawBoard();
				//change the active players turn:
				if (player == 1) {
					player = 2;
				} else {
					player = 1;
				}
				displayPlay();
				
				//stop looking for empty spaces
				return true;
				
			}
		}
	}}
	
	// look if a player win and who's winning
	function lookForWin() {
		//check horizontal
		for (i=1; i<=2; i++) {
			for (col = 0; col <=4; col++) {
				for (row = 0; row <=6; row++) {
					if (jeu[row][col] == i) {
						if ((jeu[row][col+1] == i) && (jeu[row][col+2] == i) && (jeu[row][col+3] == i)) {
							endGame(i);
							return true; //the game is ending
						}
					}
				}
			}
		}
		//check vertical
		for (i=1; i<=2; i++) {
			for (col = 0; col <=6; col++) {
				for (row = 0; row <=3; row++) {
					if (jeu[row][col] == i) {
						if ((jeu[row+1][col] == i) && (jeu[row+2][col] == i) && (jeu[row+3][col] == i)) {
							endGame(i); 
							return true; 
						}
					}
				}
			}
		}
		//chek diagonal direction 1 down rigth//
		for (i=1; i<=2; i++) {
			for (col = 0; col <=3; col++) {
				for (row = 0; row <=3; row++) {
					if (jeu[row][col] == i) {
						if ((jeu[row+1][col+1] == i) && (jeu[row+2][col+2] == i) && (jeu[row+3][col+3] == i)) {
							endGame(i);
							return true;
						}
					}
				}
			}
		}
		//check diagonal directon 2 up rigth //
		for (i=1; i<=2; i++) {
			for (col = 0 ; col <=3; col++) {
				for (row = 3; row <=6; row++) {
					if (jeu[row][col] == i) {
						if ((jeu[row-1][col+1] == i) && (jeu[row-2][col+2] == i) && (jeu[row-3][col+3] == i)) {
							endGame(i);
							return true;
						}
					}
				}
			}		
		}
	 };
	
	function endGame(winner) {
		gameActive = false; 
		document.getElementById('winLose').innerHTML = "Joueur gagnant: joueur " + winner; //set the winning player
		if (player == 1){
			document.getElementById("winLose").style.color="red";
		} else {
			document.getElementById("winLose").style.color="yellow";
		} 
		document.getElementById("colorTurn").style.color="white";
		document.getElementById("colorTurn").innerHTML="END";
	}
	
	var reset = document.getElementById("resetButton");
	resetButton.addEventListener("click",
	function resetGame(){
		location.reload();
	});
	
	
	
	
	////////////////////////////////////////////////////////////////////////
	///																	 ///
	///								OLD VERSION	2						 ///
	///																	 ///
	////////////////////////////////////////////////////////////////////////
	// if (player==1) {    //if player 1 play
	// 	if (jeu[row][col]==0){
	// 		jeu[row][col]=1;
	// 		player=2;
	// 		document.getElementById("colorTurn").innerHTML="Tour : Joueur 2";
	// 		console.log(jeu);}
	// 		else {
	// 			row--;			
	// 			jeu[row][col]=1;
	// 			player=2;
	// 			document.getElementById("colorTurn").innerHTML="Tour : Joueur 2";
	// 			console.log(jeu);}}
	// 			else {			//if player 2 play
	// 				if (jeu[row][col]==0){
	// 					jeu[row][col]=2;
	// 					player=1;
	// 					document.getElementById("colorTurn").innerHTML="Tour : Joueur 1";
	// 					console.log(jeu);}
	// 					else {
	// 						jeu[row][col]=2;
	// 						player=1;
	// 						document.getElementById("colorTurn").innerHTML="Tour : Joueur 2";
	// 						console.log(jeu);
	
	// 					}
	// 			}
	
	// 				placeColor();
	// 			}
	
	
	//to place a color on board
	// function placeColor() {
	// 	for (var row = 0; row < 7; row++) {					//verify if row is between 0 and 7
	// 		for (var col = 0; col < 7; col++) {				//verify if column is between 0 and 7
	// 			if (jeu[row][col]==0) { 														//verify if the number in the array is 0
	// 				document.getElementById("cell"+row+col).style.backgroundColor="white";
	// 			} else if (jeu[row][col]==1) { 													//verify if the number in the array is 0
	// 				document.getElementById("cell"+row+col).style.backgroundColor="yellow";
	// 			} else if (jeu[row][col]==2) { 													//verify if the number in the array is 0
	// 				document.getElementById("cell"+row+col).style.backgroundColor="red";
	// 			}
	// else if (jeu[row][col]!=0) {
	// 	for (row =0; row < 7; row--) {
	// 		document.getElementById("cell"+row+col).style.backgroundColor="yellow";
	// 	}
	// 			// }
	// 		}
	// 	}  
	// }
	
	
	
	//////////
	// test elements
	//////////
	
	
	// function jouer_pion(i)
	// {	
	// 	//recherche le nombre de pions déjà joués dans cette colonne :
	// 	n=0;
	// 	for (col=1;col<=6;col++) 
	// 	{
	// 		if (jeu[row][col]!=0) { n++ }
	// 	}
	// 	n=6-n;
	
	// 	if (n==0)
	// 	{
	// 		document.getElementById("colorTurn").innerHTML = 'La colonne est pleine';
	// 	}
	// 	else
	// 	{
	// 		document.getElementById("colorTurn").innerHTML = '&nbsp;';
	// 		if (player==1)
	// 		{ 
	// 			document.getElementById("cell"+row+col).style.backgroundColor="yellow";
	// 			jeu[row][col]=1;
	// 			player=2;
	// 			document.getElementById("colorTurn").innerHTML = 'Couleur du prochain pion joué : ROUGE';	
	// 		}
	// 		else
	// 		{ 
	// 			document.getElementById("cell"+row+col).style.backgroundColor="red";
	// 			jeu[row][col]=1;
	// 			player=1;
	// 			document.getElementById("colorTurn").innerHTML = 'Couleur du prochain pion joué : BLEU';	
	// 		}
	// 	}
	// }
	
	//verify if an cell is taken
	// function checkCol(col) {
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	////////////////////////////////////////////////////////////////////////
	///																	 ///
	///								OLD VERSION							 ///
	///																	 ///
	////////////////////////////////////////////////////////////////////////
	
	
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
	
	