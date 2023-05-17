if (hp2 == "null") {
    localStorage.setItem("cachedHP2", 400);
} else if (hp2 < 25) {
    localStorage.setItem("cachedHP2", Number(hp2) + 450);
} else if (hp2 >= 25 && hp2 < 50) {
    localStorage.setItem("cachedHP2", Number(hp2) + 425);
} else if (hp2 >= 50 && hp2 < 75) {
    localStorage.setItem("cachedHP2", Number(hp2) + 400);
} else {
    localStorage.setItem("cachedHP2", Number(hp2));
}