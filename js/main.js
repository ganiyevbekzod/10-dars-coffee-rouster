var elBox=document.querySelector(".box");
var elBoxBtn=document.querySelector(".box2__btn");

elBoxBtn.addEventListener("click", function(){
    elBox.classList.toggle("open");
})
