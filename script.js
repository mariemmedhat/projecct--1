const offers = document.querySelector('.offers-items');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;
function slide(to) {
const total = offers.children.length;
index = (index + to + total) % total;
offers.style.transform = `translateX(-${index * 100}%)`;
}
next.onclick = () => slide(1);
prev.onclick = () => slide(-1);
setInterval(() => slide(1), 5000);
let menuItems = [
{
name: "LASAL CHEESE",
price: "$18.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
image: "food1.png"
},{
name: "JUMBO CRAB SHRIMP",
price: "$24.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
image: "food2.png"
}, {
name: "KOKTAIL JUICE",
price: "$12.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
image: "food3.png"
}, {
name: "CAPO STEAK",
price: "$60.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
image: "food4.png"
},{
name: "ORGANIC FRUIT SALAD",
price: "$8.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
image: "food5.png"
},{
name: "CHEESE PIZZA",
price: "$18.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
image: "food6.png"
},{
name: "KOFTA MEAT",
price: "$40.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
image: "food7.jpeg"
},{
name: "SPANISH PIES",
price: "$14.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
image: "food8.jpeg"
}, {
name: "CHEESE TOST",
price: "$6.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
image: "food9.jpeg"
},{
name: "FRUIT SALAD",
price: "$14.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
image: "food10.jpeg"
},{
name: "CHICKEN SHAWARMA",
price: "$20.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
image: "food11.jpeg"
},{
name: "MEGA CHEESE PIZZA",
price: "$30.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
image: "food12.jpeg"
}
]
let cart=""
for(i=0; i<menuItems.length; i++){
cart+=`
<div class="menu-item">
<img src="${menuItems[i].image}" alt="">
<div>
<h3>${menuItems[i].name} <span>
${menuItems[i].price}</span> </h3>
<p>${menuItems[i].description}.</p>
</div>
</div>
`}
document.getElementById("menu-item").innerHTML=cart
function  valid(){
  let name=document.getElementById("name").value;
  let email=document.getElementById("email").value;
  let supject=document.getElementById("sup").value;
  let masseg=document.getElementById("mass").value;
  if(name===""||email===""||supject===""||masseg===""){
    alert("please complete form. !")
    return false
  }
  else if(email.indexOf("@") === -1 || email.indexOf(".") === -1) {
 alert("Please enter a valid email address");
 return false;
 }

  else if(name.length<3||name.length>15){
    alert("Name must be-15 characters.")
    return false
  }
  else if(masseg.length<10){
  alert("please complete massege")
  return false
}
else if (supject !== "" && supject.length < 3) {
   alert("Subject must be at least 3 characters.")
}
  else{
    return true
  }
}

var BtnClose = document.getElementById("close");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var BoxContainer = document.getElementById("boxContainer");
var boxItem = document.getElementById("boxItem");
var images = document.querySelectorAll(".img img");
// Convert NodeList to array
var imagesArr = [];
for (var i = 0; i < images.length; i++) {
imagesArr.push(images[i]);
}
var currentIndex = 0;
function showImage(index) {
boxItem.style.backgroundImage = "url(" + imagesArr[index].src +")";
}
for (var j = 0; j < imagesArr.length; j++) {
(function (j) {
imagesArr[j].addEventListener("click", function () {
BoxContainer.style.display = "flex";
currentIndex = j;
showImage(currentIndex);
});
})(j);
}
BtnClose.addEventListener("click", function () {
BoxContainer.style.display = "none";
});
// Next image
nextBtn.addEventListener("click", function () {
currentIndex++;
if (currentIndex === imagesArr.length) {
currentIndex = 0;
}
showImage(currentIndex);
});
prevBtn.addEventListener("click", function () {
currentIndex--;
if (currentIndex < 0) {
currentIndex = imagesArr.length - 1;
}
showImage(currentIndex);
});
// Close popup when clicking outside
BoxContainer.addEventListener("click", function (event) {
if (event.target === BoxContainer) {
BoxContainer.style.display = "none";
}
});
