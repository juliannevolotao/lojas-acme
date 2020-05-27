let slideIndex = 0;

const showSlides = (n) => {
  
  let i;

  let slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
  // Setar como desativado
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if(n) {

    if (n > slides.length) {
      slideIndex = 1
    }
    
    if (n < 1) {
      slideIndex = slides.length
    }

  }
  else {
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
  }
  
  dots[slideIndex-1].className += " active";
  slides[slideIndex-1].style.display = "block";

  setTimeout(showSlides, 20000);
}

const currentSlide = (n) => {
  showSlides(slideIndex = n);
}

showSlides(slideIndex);

const toLogin = () => {
  window.location = "/src/pages/login.html";
}