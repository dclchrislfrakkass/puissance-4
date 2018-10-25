// Variable //
var quiJoue = 0;
var choixCaseJoueur1;
var choixCaseJoueur2;
var playNow;
var choixCase;
var tableGame =    [[0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0]];

// Démmarage du jeu //
function turn()
{
	if(quiJoue == 0)
	{
		console.log("Joueur 1");
		playerTurn = 1;
	}
	else
	{
		console.log("Joueur 2");
		playerTurn = 0;
	}
}
function playGame() {
	playButton.addEventListener("click", function(){
		if (!choixCaseJoueur1) {
			choixCase.style.display = "block";
			playNow(choixCaseJoueur1, choixCaseJoueur2);
		}
	});
}
// Joueur 1 Joue //
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