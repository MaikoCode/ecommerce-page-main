
// -----Card pop up-----
let cartIcon = document.querySelector(".cart");
let purchaseContainer = document.querySelector(".purchase");
let header = document.querySelector(".header");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

cartIcon.addEventListener("click", () =>{
    if(purchaseContainer.classList.contains("block")){
        purchaseContainer.classList.add("none");
        purchaseContainer.classList.remove("block");
    }else{
        purchaseContainer.classList.add("block");
        purchaseContainer.classList.remove("none");
    }
});

left.addEventListener("click", function(){

  purchaseContainer.classList.add("none");
  purchaseContainer.classList.remove("block");

});

right.addEventListener("click", function(){

  purchaseContainer.classList.add("none");
  purchaseContainer.classList.remove("block");

})



// -----Hamburger menus-----

function openNav() {
    document.getElementById("sideNav").style.width = "250px";
  }
  
  
  function closeNav() {
    document.getElementById("sideNav").style.width = "0";
  }

// -----Lightbox-----

let lightbox = document.querySelector(".lightbox");
let closeLightbox = document.querySelector(".closelightbox");
let box = document.querySelectorAll(".box");
let images = document.querySelectorAll(".image");



for(let i = 0; i < box.length; i++){
    images[i].addEventListener("click", () =>{
          if(window.innerWidth > 1000){
            lightbox.style.display = "block";
          }
          
        
    });
}

closeLightbox.addEventListener("click", () => {
  
    lightbox.style.display = "none";
    
});



//  -----Slides-----



let slideIndexChoice = 1;
let slideIndex = 1;
let cols = document.querySelectorAll(".col");
let slides = document.querySelectorAll(".slide");

box[0].classList.add("active--1");
cols[0].classList.add("active--2");


for(let i = 0; i < box.length; i++){
  box[i].addEventListener("click", function(){
      for(let j = 0; j < box.length; j++){
          
          images[j].style.display = "none";
      }
      images[i].style.display = "block";
      slideIndexChoice = i;
      for(let j = 0; j < slides.length; j++){
        slides[j].style.display = "none";
      }
      slides[slideIndexChoice].style.display = "block";
      for(let w = 0; w < cols.length; w++){
        cols[w].classList.remove("active--2");
      }
              
      cols[slideIndexChoice].classList.add("active--2");
      slideIndex = slideIndexChoice+1;
  });
}


for(let i = 0; i < cols.length; i++){
  cols[i].addEventListener("click", function(){
      for(let j = 0; j < cols.length; j++){
          slides[j].style.display = "none";
      }
      slides[i].style.display = "block";
      slideIndex = i+1;
  });
}



function changeSlide(n) {
    showSlide(slideIndex += n);
  };
  
  
function showSlide(n) {
    
    if (n > slides.length) {
        slideIndex = 1;	
    };
    
    if (n < 1) {
      slideIndex = slides.length;
    };
  
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      for(let j = 0; j < cols.length; j++){
        cols[j].classList.remove("active--2");
      }
    };
    
    slides[slideIndex - 1].style.display = "block";
    cols[slideIndex - 1].classList.add("active--2");
    
  };

  // Slider for mobile

  let slideIndex2 = 1;

  function changeSlide2(n) {
    showSlide2(slideIndex2 += n);
  };

  function showSlide2(n) {
    
    if (n > images.length) {
        slideIndex2 = 1;	
    };
    
    if (n < 1) {
      slideIndex2 = images.length;
    };
  
    for (let i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    };
    images[slideIndex2 - 1].style.display = "block";
  };


  // -----Active effect with cols and box-----

  for(let i = 0; i < cols.length; i++){
    cols[i].addEventListener("click", function(){
      for(let j = 0; j < cols.length; j++){
        cols[j].classList.remove("active--2");
      }
      cols[i].classList.add("active--2");
    });
  }

  for(let i = 0; i < box.length; i++){
    box[i].addEventListener("click", function(){
      for(let j = 0; j < cols.length; j++){
        box[j].classList.remove("active--1");
      }
      box[i].classList.add("active--1");
    });
  }

// Plus and minus

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let number = document.querySelector(".num");
let value = parseInt(number.innerHTML);

let numberCommand = document.querySelector(".number");
let total = document.querySelector(".total");
let add = document.querySelector(".btn-2");
let money = null;

let purchaseItem = document.querySelector(".purchase-item");
let blank = document.querySelector(".blank");
let deleteIcon = document.querySelector(".delete-icon");
let notif = document.querySelector(".notif");

plus.addEventListener("click", function(){
  value += 1;
  number.innerHTML = value;
});


minus.addEventListener("click", function(){
  value -= 1;
  number.innerHTML = value;
});

add.addEventListener("click", function(){
  numberCommand.innerHTML = value;
  notif.innerHTML = value;
  money = value * 125;
  total.innerHTML = "$" +money + ".00";


  if(money === 0){
    purchaseItem.style.display = "none";
    blank.style.display = "block";
    notif.style.display = "none"

  }else{
    purchaseItem.style.display = "block";
    blank.style.display = "none";
    notif.style.display = "block";
  }
});

deleteIcon.addEventListener("click", function(){
  notif.style.display = "none";
  purchaseItem.style.display = "none";
  blank.style.display = "block";
})



// deleteIcon.addEventListener("click", function(){
//   purchaseItem
// })



