const body = document.getElementById("body");
const wrapper = document.getElementById("wrapper");

function responsiveFonts() {
	windowWidth = body.offsetWidth;
	pageWidth = wrapper.offsetWidth;
	if (pageWidth >= windowWidth) {
		wrapper.classList.add("active");
	} else {
		wrapper.classList.remove("active");
	}
}
responsiveFonts();
window.addEventListener("resize", () => {
	responsiveFonts();
});
