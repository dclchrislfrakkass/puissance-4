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
	
	if (player==1) {    //if player 1 play
		jeu[6][col]=1;
		player=2;
		document.getElementById("colorTurn").innerHTML="Tour : Joueur 2";
	} else {			//if player 2 play
		jeu[6][col]=2;
		player=1;
		document.getElementById("colorTurn").innerHTML="Tour : Joueur 1";
	}
	
	placeColor();
}


//to place a color on board
function placeColor() {
	for (var row = 0; row < 7; row++) {					//verify row is between 0 and 7
		for (var col = 0; col < 7; col++) {				//verify column is between 0 and 7
			if (jeu[row][col]==0) { 														//verify if the number in the array is 0
				document.getElementById("cell"+row+col).style.backgroundColor="white";
			} else if (jeu[row][col]==1) { 													//verify if the number in the array is 0
				document.getElementById("cell"+row+col).style.backgroundColor="yellow";
			} else if (jeu[row][col]==2) { 													//verify if the number in the array is 0
				document.getElementById("cell"+row+col).style.backgroundColor="red";
			}
			else if (jeu[row][col]!=0) {
				for (row =0; row < 7; row--) {
					document.getElementById("cell"+row+col).style.backgroundColor="yellow";
				}
			}
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

