// Variable //
var lancerJeux;
var quiJoue;
var joueurEnCour;
var choixCaseJoueur1;
var choixCaseJoueur2;
var finJeux;
var relancer;
var cola = document.getElementById("col1");
var myTable = document.getElementById("myTable");
var x;
var y;
var cell =0;
var choice = document.getElementById("td");


// cola.addEventListener("click",     
// function() {
//     jeu[x][y]="1";
//     truc.style.backgroundColor="red";
//     console.log(jeu);
// });
// myTable.addEventListener("click",
// function () {
//   x = this.id;
//   myTable.style.backgroundColor="red";
// });

var jeu= [[0,0,0,0,0,0,0,],
         [0,0,0,0,0,0,0,],
         [0,0,0,0,0,0,0,],
         [0,0,0,0,0,0,0,],
         [0,0,0,0,0,0,0,],
         [0,0,0,0,0,1,0,],
         [0,0,0,0,0,0,0,]];


// Démmarage du jeu //
// Joueur 1 Joue //
joueurEnCour = 1;

var table = document.getElementById("myTable"),rIndex,cIndex;
            
// table rows
for(var i = 0; i < table.rows.length; i++)
{
    // row cells
    for(var j = 0; j < table.rows[i].cells.length; j++)
    {
        table.rows[i].cells[j].onclick = function()
        {
            rIndex = this.parentElement.rowIndex;
            cIndex = this.cellIndex;
            console.log("Row : "+rIndex+" , Cell : "+cIndex);
            console.log(jeu[rIndex][cIndex]);
            jeu[rIndex][cIndex]= 1;
            console.log(jeu[rIndex][cIndex]);
            jeu.forEach(Number => console.log(Number));
           
        };
    }
}

table.addEventListener("click",
        function (e) {
            console.log(e);
            console.log(e.target);

        }
        

)
// jeu.forEach(function(callback) {
//         document.getElementById("myTable").cells;
//         backgroundColor="red";
// });


// function joueur1(rIndex,cIndex) {
//     td.style.backgroundColor="red";

// }  
    
// }
// Récupération coordonés pions joueur 1 //
// Verifier si vide //
// Apparition du pion //
// Joueur 2 Joue //
//Récupération coordonés pions joueur 2 //
// Verifier si vide //
// Apparition du pion //
// Analyse du nombre de pion aligné //
// Si 4 pions alignés //
// Si plus de pions //
// Restrat//