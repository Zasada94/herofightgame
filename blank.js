if (atk2 == "null") {
    localStorage.setItem("cachedAtk", 50);
} else if (atk2 < 25) {
    localStorage.setItem("cachedAtk", Number(atk2) + 45);
} else if (atk2 >= 25 && atk2 < 50) {
    localStorage.setItem("cachedAtk", Number(atk2) + 30);
} else if (atk2 >= 50 && atk2 < 75) {
    localStorage.setItem("cachedAtk", Number(atk2) + 15);
} else {
    localStorage.setItem("cachedAtk", Number(atk2));
}