let name = alert('Welcome to the game!');
	
	let playerScore = 0;
        let computerScore = 0;
        let winnerScore = 5;

	const choice = document.querySelectorAll(".choice");
	choice.forEach((choice) => {
		choice.addEventListener('click', function () {
			const playerSelection = this.textContent;
			const computerSelection = getComputerChoice();

			function getComputerChoice(array){
			var array = ['Rock' , 'Paper' , 'Scissors'];
			var element = array[Math.floor(Math.random() * array.length)];
			return element;
                	};


			//console.log(playerSelection);
			//console.log(computerSelection);
		
	
			
			function playRound(playerSelection, computerSelection) {
				if (playerSelection === computerSelection) {
				alert("Draw!");	
				} else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
				playerScore += 1;
				alert("You win! Paper covers Rock.");	
				} else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
				computerScore += 1;
				alert("You lose! Paper covers Rock.");
				} else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
				computerScore += 1;
				alert("You lose! Scissors cut Paper.");
				} else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
				playerScore += 1;
				alert("You win! Scissors cut Paper.");
				} else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
				playerScore += 1;
				alert("You win! Rock beats Scissors.");
				} else {
				if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
				computerScore += 1;
				alert("You lose! Rock beats Scissors.");
					}
				}
			}
			
			//console.log(playRound(playerSelection, computerSelection));
		
            		function winner (computerScore, playerScore, winnerScore) {
                	if (computerScore > playerScore && computerScore < winnerScore) {
                    		return `Computer wins this game, with a score of ${computerScore}`;
               		} else if (computerScore < playerScore && playerScore < winnerScore) {
                    		return `Player wins this game, with a score of ${playerScore}`;
                	}  else if (computerScore === winnerScore && computerScore !== playerScore){
				alert(`Computer Wins. You lost!`);
			} else if (playerScore === winnerScore && playerScore !== computerScore) {
				alert(`You won!`);
			} else {
				if (playerScore === computerScore && playerScore !== winnerScore && computerScore !== winnerScore) {
                    		return `Player and Computer have a tie with scores of ${computerScore} 	and ${computerScore} respectively.`; };
               		}; 
           		};


			alert(`Computer picks ${computerSelection}`);
			playRound(playerSelection, computerSelection);
			updateScore();
			winner(computerScore, playerScore, winnerScore);
			gameEnd();

			function updateScore() {
				document.getElementById("playerScore").textContent = playerScore;
				document.getElementById("computerScore").textContent = computerScore;
			}


			function gameEnd() {
				if (computerScore === winnerScore || playerScore === winnerScore) {
					playerScore = 0;
					computerScore = 0;
				}
				
			}
			
		});
	}); 
	
	const refresh = document.querySelector('.new-game');
	refresh.addEventListener('click', function () {
		window.location.reload();
		return false;
	});
	
	