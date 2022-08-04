var title = document.getElementById("title").innerHTML;
var price = document.getElementById("price").innerHTML;

var demo = document.getElementById("dropdown");
var remove = document.getElementById("remove");
var btn = document.getElementById("add");
btn.addEventListener("click",function(){
    demo.innerHTML = `<img style="height: 100px;" src="./images/earbuds.jpg" alt="">  ${title} ${price}`
    demo.style.display = "none"
});
remove.addEventListener("click",function () {
   demo.innerHTML = "" 
});
var show = document.getElementById("show");
show.addEventListener("click",function (){
    demo.style.display = "block"
});
