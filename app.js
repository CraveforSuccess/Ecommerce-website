// slider animation
var slideindex = 1;

function plusdiv(n){
    showdivs(slideindex += n);
}

function showdivs(n){
    var i;
    var x = document.getElementsByClassName("myslides");
    if(n > x.length){
        slideindex = 1;
    }else if(n < 1){
        slideindex = x.length;
    }
    for(i = 0;i < x.length;i++){
        x[i].style.display = "none";
    }
    x[slideindex - 1].style.display = "block"
}
const item = document.getElementById("blank").style.display = "none";


// shoppingcart
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closecart = document.querySelector('#close-cart');
// open cart
cartIcon.onclick = () => {
    cart.classList.add('active');
}
// close cart
closecart.onclick = () => {
    cart.classList.remove('active');
}
// Working of cart
function Addtocart(){
    let title1 = document.getElementById("title1").innerText;
    console.log(title1);
    let image = document.getElementById("proimg").src;
    console.log(image);
    let quantity = document.getElementById("quantity").value;
    console.log(quantity);
    Addcart(title1,image,quantity);
}

function Addcart(title,image,_quantity){
    let main = document.createElement("div");
   main.setAttribute("id","cartid");
   main.append(title,image,_quantity);
  
}