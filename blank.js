if (def2 == "null") {
	localStorage.setItem("cachedDef2", 20);
} else if (def2 < 25) {
	localStorage.setItem("cachedDef2", Number(def2));
} else if (def2 >= 25 && def2 < 50) {
	localStorage.setItem("cachedDef2", Number(def2) - 15);
} else if (def2 >= 50 && def2 < 75) {
	localStorage.setItem("cachedDef2", Number(def2) - 30);
} else {
	localStorage.setItem("cachedDef2", Number(def2) - 45);
}
