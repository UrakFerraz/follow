var x = document.getElementById("myDIV");
var prazoBtn = document.querySelector('.lineTermDropDown');
var closeBtn1 = document.querySelector('#close-btn1');
var followModalContainer = document.querySelector('.followModalContainer');

prazoBtn.addEventListener('click', function() {
if (x.style.display === "none") {
    x.style.display = "flex";
} else {
    x.style.display = "none";
}
	
});


closeBtn1.addEventListener('click', function() {
if (followModalContainer.style.display === "none") {
    followModalContainer.style.display = "flex";
} else {
    followModalContainer.style.display = "none";
}
	
});