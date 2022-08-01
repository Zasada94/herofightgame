let playButton = document.getElementById("play");
let resultDiv = document.getElementById("result");
let p1NameDiv = document.getElementById("p1Name");
let p2NameDiv = document.getElementById("p2Name");
let p1HealthDiv = document.getElementById("p1Health");
let p2HealthDiv = document.getElementById("p2Health");
let imgContainer1Div = document.getElementById("imgContainer1");
let imgContainer2Div = document.getElementById("imgContainer2");

// ** Check if either players health is  0 and if it is, then update isOver to true **
const updateGame = (p1, p2, gameState) => {
	p1NameDiv.innerText = p1.name;
	p2NameDiv.innerText = p2.name;
	p1HealthDiv.innerText = p1.health;
	p2HealthDiv.innerText = p2.health;
	imgContainer1Div.innerHTML = `<img id="p1" src='${img1}'/>`;
	imgContainer2Div.innerHTML = `<img id="p2" src='${img2}'/>`;
	if (p2.health <= 0 || p1.health <= 0) {
		game.isOver = true;
		gameState = game.isOver;
		resultDiv.innerText = game.declareWinner(game.isOver, p1, p2);
		return gameState;
	}
};

class Player {
	constructor(name, health, attackDmg, healValue, img) {
		this.name = name;
		this.health = health;
		this.attackDmg = attackDmg;
		this.healValue = healValue;
		this.img = img;
	}

	// ** Attack an enemy with a random number from 0 to YOUR attackDmg bonus **
	strike(player, enemy, attackDmg) {
		let damageAmount = Math.ceil(Math.random() * attackDmg);
		enemy.health -= damageAmount;
		updateGame(p1, p2, game.isOver);
		return console.log(
			`${player.name} dealt ${damageAmount} damage to ${enemy.name}`
		);
	}

	// ** Heal the player for random number from  1 to 20 **
	heal(player, healValue) {
		let healAmount = Math.ceil(Math.random() * healValue);
		player.health += healAmount;
		updateGame(p1, p2, game.isOver);
		return console.log(`${player.name} healed for ${healAmount}`);
	}
}

// ** Create the Game class with all it's attributes and methods to run a match **
class Game {
	constructor() {
		this.isOver = false;
	}

	// ** If the game is over and a player has 0 health declare the winner! **
	declareWinner(isOver, p1, p2) {
		let message;
		if (isOver == true && p1.health <= 0) {
			message = `${p2.name} WINS!`;
			document.getElementById("victory").play();
		} else if (isOver == true && p2.health <= 0) {
			message = `${p1.name} WINS!`;
			document.getElementById("victory").play();
		}

		return message;
	}

	// ** Reset the players health back to it's original state and isOver to FALSE **
	reset(p1, p2) {
		p1.health = hp;
		p2.health = hp2;
		game.isOver = false;
		resultDiv.innerText = "";
		updateGame(p1, p2, this.isOver);
		console.log("reset");
	}

	// ** Simulates the whole match untill one player runs out of health **
	play(p1, p2) {
		this.reset(p1, p2);
		const intervalId = setInterval(() => {
			if (p1.health <= 0 || p2.health <= 0) {
				clearInterval(intervalId);
			}
			if (p1.health > 0 && p2.health > 0) {
				p1.strike(p1, p2, p1.attackDmg);
			}
			if (p1.health > 0 && p2.health > 0) {
				p2.strike(p2, p1, p2.attackDmg);
			}
			if (p1.health > 0 && p2.health > 0) {
				p1.heal(p1, def);
			}
			if (p1.health > 0 && p2.health > 0) {
				p2.heal(p2, def);
			}
		}, 100);

		return this.declareWinner(this.isOver, p1, p2);
	}
}

let name1 = localStorage.getItem("cachedName");
let hp = localStorage.getItem("cachedHP");
let atk = localStorage.getItem("cachedAtk");
let def = localStorage.getItem("cachedDef");
let img1 = localStorage.getItem("cachedImg");

let name2 = localStorage.getItem("cachedName2");
let hp2 = localStorage.getItem("cachedHP2");
let atk2 = localStorage.getItem("cachedAtk2");
let def2 = localStorage.getItem("cachedDef2");
let img2 = localStorage.getItem("cachedImg2");

let player1 = new Player(name1, Number(hp), Number(atk), Number(def), img1);
let player2 = new Player(name2, Number(hp2), Number(atk2), Number(def2), img2);

let p1 = player1;
let p2 = player2;
let game = new Game();

updateGame(p1, p2, game.isOver);

playButton.addEventListener("click", () => {
	game.play(p1, p2);
});

// ** Player 1 Controls **
document.addEventListener("keydown", function (e) {
	if (e.key == "q" && p2.health > 0 && game.isOver == false) {
		p1.strike(p1, p2, p1.attackDmg);
		document.getElementById("p1attack").play();
		console.log(def, hp, p1.health.type);
	}
});

document.addEventListener("keydown", function (e) {
	if (e.key == "a" && p2.health > 0) {
		p1.heal(p1, p1.healValue);
		document.getElementById("p1heal").play();
		console.log(def, hp, p1.health.type);
	}
});

// ** Player 2 Controls **
document.addEventListener("keydown", function (e) {
	if (e.key == "p" && p1.health > 0 && game.isOver == false) {
		p2.strike(p2, p1, p2.attackDmg);
		document.getElementById("p2attack").play();
	}
});

document.addEventListener("keydown", function (e) {
	if (e.key == "l" && p1.health > 0) {
		p2.heal(p2, p2.healValue);
		document.getElementById("p2heal").play();
	}
});

const backToMenu = () => {
	location.href = "./index.html";
};
