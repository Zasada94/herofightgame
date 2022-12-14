const SUPERHERO_TOKEN = "1146245292901516";

const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const newHeroButton = document.getElementById("newHeroButton");
const newHeroButton2 = document.getElementById("newHeroButton2");
const heroImageDiv = document.getElementById("heroImage");
const heroImageDiv2 = document.getElementById("heroImage2");
const searchButton = document.getElementById("searchButton");
const searchButton2 = document.getElementById("searchButton2");
const searchInput = document.getElementById("searchInput");
const searchInput2 = document.getElementById("searchInput2");

const statToEmoji = {
	intelligence: "🧠",
	strength: "💪",
	speed: "⚡",
	durability: "🏋️‍♂️",
	power: "📊",
	combat: "⚔️",
};

const getSuperHero = (id) => {
	fetch(`${BASE_URL}/${id}`)
		.then((response) => response.json())
		.then((json) => {
			showHeroInfo(json);
		});
};
const getSuperHero2 = (id) => {
	fetch(`${BASE_URL}/${id}`)
		.then((response) => response.json())
		.then((json) => {
			showHeroInfo2(json);
		});
};

const showHeroInfo = (character) => {
	const name = `<h2>${character.name}</h2>`;
	const img = `<img src='${character.image.url}' height=auto width=100%'/>`;
	const stats = `<p><span class="icon">${statToEmoji["intelligence"]}</span> INTELLIGENCE ${character.powerstats["intelligence"]}</p>
    <p><span class="icon">${statToEmoji["strength"]}</span> STRENGTH: ${character.powerstats["strength"]}</p><p><span class="icon">${statToEmoji["durability"]}</span> DURABILITY: ${character.powerstats["durability"]}</p>`;
	heroImageDiv.innerHTML = `${name}${img}${stats}`;
	const name1 = character.name;
	let def1 = character.powerstats["intelligence"];
	let atk1 = character.powerstats["strength"];
	let hp1 = character.powerstats["durability"];
	const img1 = character.image.url;

	localStorage.setItem("cachedName", name1);
	localStorage.setItem("cachedImg", img1);
	if (def1 == "null") {
		localStorage.setItem("cachedDef", Math.ceil(Math.random() * 30));
	} else {
		localStorage.setItem("cachedDef", Number(def1) / 3);
	}
	if (atk1 == "null") {
		localStorage.setItem("cachedAtk", Math.ceil(Math.random() * 400));
	} else {
		localStorage.setItem("cachedAtk", Number(atk1) * 4);
	}
	if (hp1 == "null") {
		localStorage.setItem("cachedHP", Math.ceil(Math.random() * 500));
	} else {
		localStorage.setItem("cachedHP", Number(hp1) * 5);
	}
	return stats;
};

const showHeroInfo2 = (character2) => {
	const name22 = `<h2>${character2.name}</h2>`;
	const img22 = `<img src='${character2.image.url}' height=auto width=100%'/>`;
	const stats2 = `<p><span class="icon">${statToEmoji["intelligence"]}</span> INTELLIGENCE ${character2.powerstats["intelligence"]}</p>
    <p><span class="icon">${statToEmoji["strength"]}</span> STRENGTH: ${character2.powerstats["strength"]}</p><p><span class="icon">${statToEmoji["durability"]}</span> DURABILITY: ${character2.powerstats["durability"]}</p>`;

	heroImageDiv2.innerHTML = `${name22}${img22}${stats2}`;
	const name2 = character2.name;
	let def2 = character2.powerstats["intelligence"];
	let atk2 = character2.powerstats["strength"];
	let hp2 = character2.powerstats["durability"];
	const img2 = character2.image.url;
	localStorage.setItem("cachedName2", name2);
	localStorage.setItem("cachedImg2", img2);
	if (def2 == "null") {
		localStorage.setItem("cachedDef2", Math.ceil(Math.random() * 30));
	} else {
		localStorage.setItem("cachedDef2", Number(def2) / 3);
	}
	if (atk2 == "null") {
		localStorage.setItem("cachedAtk2", Math.ceil(Math.random() * 400));
	} else {
		localStorage.setItem("cachedAtk2", Number(atk2) * 4);
	}
	if (hp2 == "null") {
		localStorage.setItem("cachedHP2", Math.ceil(Math.random() * 500));
	} else {
		localStorage.setItem("cachedHP2", Number(hp2) * 5);
	}
	return stats2;
};

const getSearchedSuperHero = (name) => {
	fetch(`${BASE_URL}/search/${name}`)
		.then((response) => response.json())
		.then((json) => {
			const hero = json.results[0];
			showHeroInfo(hero);
		});
};

const getSearchedSuperHero2 = (name) => {
	fetch(`${BASE_URL}/search/${name}`)
		.then((response) => response.json())
		.then((json) => {
			const hero = json.results[0];
			showHeroInfo2(hero);
		});
};

const randomHero = () => {
	const numberOfHeroes = 731;
	return Math.ceil(Math.random() * numberOfHeroes);
};

newHeroButton.onclick = () => getSuperHero(randomHero());
newHeroButton2.onclick = () => getSuperHero2(randomHero());
searchButton.onclick = () => getSearchedSuperHero(searchInput.value);
searchButton2.onclick = () => getSearchedSuperHero2(searchInput2.value);

searchInput.addEventListener("keyup", (e) => {
	e.preventDefault();
	if (e.key === "Enter") {
		searchButton.click();
	}
});

searchInput2.addEventListener("keyup", (e) => {
	e.preventDefault();
	if (e.key === "Enter") {
		searchButton2.click();
	}
});
