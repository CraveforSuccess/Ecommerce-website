var title = document.getElementById("title1").innerText;
var price = document.getElementById("price").innerText;
var quantity = document.getElementById("quantity");
var buy = document.getElementById("buy");
var total ;
var image;
var shopping = document.getElementById("shopping");
var img = document.getElementById("proimg")
var cart1 = document.getElementById("cartrow");
// function Addtocart(){
//     total = quantityofprod(quantity) * price;
    
//    cart1.innerHTML =` <img id="proimg" style="height:150px;padding:10px" src="./images/Tshirt.jpg" alt="">
//       `+"| " + title + "| " + price + "|  " + "Total:" + total;   
// }

function quantityofprod(quantity){
return quantity.value;
}


var buy = document.getElementById("buy");
var date = new Date();
var date1 = date.toDateString();
var time = date.toLocaleTimeString();
buy.addEventListener("click",function () {
    var name1 = document.getElementById("username").value;

    alert(`Kindly take the screenshot of this alert & send it to redirected group \n
    Your order has been placed for \n
    Name: ${name1} \n
   Product: ${title} \n

   Quantity: ${quantityofprod(quantity)} \n
   Total price: ${total} \n
   Date: ${date1.split(time)} \n
   Time: ${time} \n


      `);
      quantity.value = 0;
      cart.innerHTML = ""
})

// shoppingcart
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closecart = document.querySelector('#close-cart');
var cartitems = document.getElementById("cartitems");
var remove = document.querySelector("#removeitem");
// open cart
cartIcon.onclick = () => {
    cart.classList.add('active');
}
// close cart
closecart.onclick = () => {
    cart.classList.remove('active');
}
var task;
// Working of cart
function Addtocart(){
    total = quantityofprod(quantity) * price;
   
   cartitems.innerHTML =` <img id="proimg" style="height:150px;padding:10px" src="./images/Tshirt.jpg" alt="">
      `+"| " + title + ": " + price + "|  " + "Total:" + total;
      alert("Your product has been added!") 
      localStorage.setItem(task,cartitems.innerHTML);
}
if(window.location.reload==true){
    cartitems.innerHTML = localStorage.getItem(task);
}


remove.addEventListener("click",function (){
    cartitems.innerHTML = "";
    console.log("deleted");
})

