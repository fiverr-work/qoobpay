function getFileData(myFile) {
	document.getElementById("fileName").innerHTML = myFile.files[0].name;
}
function collapse() {
	document.querySelector("#sidebar").classList.toggle("open");
}
function toggleSearch() {
	document.querySelector("#search").classList.toggle("open");
}
function collapseList() {
	document.querySelector("#list").classList.toggle("open");
}
