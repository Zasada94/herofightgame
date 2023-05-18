const body = document.getElementById("body");
const container = document.getElementById("container");
const wrapper = document.getElementById("wrapper");
let windowWidth = body.offsetWidth;
let pageWidth = wrapper.offsetWidth;
if (pageWidth >= windowWidth) {
	container.classList.add("active");
}
window.addEventListener("resize", () => {
	windowWidth = body.offsetWidth;
	pageWidth = wrapper.offsetWidth;
	if (pageWidth >= windowWidth) {
		container.classList.add("active");
	} else {
		container.classList.remove("active");
	}
});
