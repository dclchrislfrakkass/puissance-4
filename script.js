const debug = true; // mode debug
var player=1; //1 for Yellow (player1), 2 for Red (player2)
var row = 6;
var jeu = [
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
];

// function firstFreeRow(col,player){
// 	for(var i = 0; i<6; i++){
// 	  if(jeu[i][col]!=0){
// 		break;
// 	  }
// 	}
// 	jeu[i-1][col] = player;
// 	return i-1;




///work/////
//verify the player
// function selectColumn(col) {

//	function dropToBottom(row, col) {
// Start at the bottom of the column, and step up, checking to make sure
// each position has been filled. If one hasn't, return the empty position.
// for (var y = 6; y > row; y--) {
// 	if (jeu[y][col] === 0) {
// 		return y;
// 	}
// }

/* drawBoard will draw the board - it will update each item to make sure it is the appropriate value */

function drawBoard() {
	// checkForWin(); //check to see if any player has won.
	for (col = 0; col<=6; col++) {
		for (row=0; row<=6; row++) {
			//Set the inner HTML of the square (a td) to be a span with the class of 'piece' and 'player' + the value of that 
			//gameboard piece.  Using CSS, you can style player0, player1 and player2 so that the square will appear correctly.
			if (jeu[row][col]==0) { 														//verify if the number in the array is 0
				document.getElementById("cell"+row+col).style.backgroundColor="white";
			} else if (jeu[row][col]==1) { 													//verify if the number in the array is 0
				document.getElementById("cell"+row+col).style.backgroundColor="yellow";
			} else if (jeu[row][col]==2) { 													//verify if the number in the array is 0
				document.getElementById("cell"+row+col).style.backgroundColor="red";
			}
		}	
	}
}
/* drop will add a piece to the lowest available column */
function selectColumn(col) {
	/* Look for the lowest point in this row that is open */
	//the opposite of our loop above - as we're going to start from the bottom looking for an open slot
	for (row=6; row>=0; row--) { //note: we are using row--, which will reduce the value of row by 1, the opposted of ++
		if (jeu[row][col] == 0) {
			//set the empty row to the active player's number
			jeu[row][col] = player;
			drawBoard(); // draw the board.
			//change the active players turn:
			if (player == 1) {
				player = 2;
			} else {
				player = 1;
			}
			//there is also a fancy way of doing this call a ternary assignment that looks like this: active_player = (active_player == 1) ? 2 : 1;
			
			setUpTurn(); //display who is the active player
			//stop looking for empty spaces
			return true;
		}
	}
}



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
function placeColor() {
	for (var row = 0; row < 7; row++) {					//verify if row is between 0 and 7
		for (var col = 0; col < 7; col++) {				//verify if column is between 0 and 7
			if (jeu[row][col]==0) { 														//verify if the number in the array is 0
				document.getElementById("cell"+row+col).style.backgroundColor="white";
			} else if (jeu[row][col]==1) { 													//verify if the number in the array is 0
				document.getElementById("cell"+row+col).style.backgroundColor="yellow";
			} else if (jeu[row][col]==2) { 													//verify if the number in the array is 0
				document.getElementById("cell"+row+col).style.backgroundColor="red";
			}
			// else if (jeu[row][col]!=0) {
			// 	for (row =0; row < 7; row--) {
			// 		document.getElementById("cell"+row+col).style.backgroundColor="yellow";
			// 	}
			// }
		}
	}  
}




var reset = document.getElementById("resetButton");
resetButton.addEventListener("click",
function resetGame(){
	location.reload();
});



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

