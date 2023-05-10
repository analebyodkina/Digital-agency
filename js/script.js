// opens burger menu
function navToggle() {
    document.getElementById("headerUl").classList.toggle("active");
    document.getElementById("html").classList.toggle("overflow-hidden");
    document.getElementById("body").classList.toggle("overflow-hidden");
  }


//closes burger for  nav links 
  function hideBurger() {
    document.getElementById("headerUl").classList.remove("active"); 
    document.getElementById("html").classList.remove("overflow-hidden");
    document.getElementById("body").classList.remove("overflow-hidden"); 
    // Remove the class "is-active" from the burger button
    $(".header__burger").removeClass("is-active");  
  }

  //opens spinner
  function checkSpinner() {
    document.getElementById("spinner").classList.add("_active");    
    setTimeout (() => {
      document.getElementById("spinner").classList.remove("_active"); 
    }, 3000);
  }


  // rolls burger button
  $(document).ready(function(){
    $(".header__burger").click(function(){
      $(this).toggleClass("is-active");
    });
  });


  // carousel
  $('.owl-carousel').owlCarousel({    
    lazyLoad:true,
    loop:true,
    margin:24,
    // responsiveClass:true,
    responsive : {
      // breakpoint from 0 up
      0 : {
          items:1,
          nav: true
      },      
      576 : {
          items:2, 
          nav: true       
      },
      // breakpoint from 992 up      
      992 : {
        items:3,
        nav: false
      }

    }
});


// copyright
var currentYear = new Date().getFullYear();
document.getElementById("footer-year").innerHTML = currentYear;


// modal window
const popUp = document.getElementById('popUp');
function popup(){
      document.getElementById('headerUl').classList.remove("active");
      document.getElementById("html").classList.add("overflow-hidden");
      document.getElementById("body").classList.add("overflow-hidden");
      // Remove the class "is-active" from the burger button
      $(".header__burger").removeClass("is-active"); 
      popUp.classList.add('active');
      return false;
}


// modal window to close by click on black bg
popUp.addEventListener('click', function(){
    popUp.classList.remove('active');
    document.getElementById("html").classList.remove("overflow-hidden");
    document.getElementById("body").classList.remove("overflow-hidden");
    var titleElements = document.querySelectorAll('.field__title');
    titleElements.forEach(function(titleElement) {
    titleElement.classList.remove('active');
  });    
});
const closePopUp = document.getElementById('closePopUp');
closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
    document.getElementById("html").classList.remove("overflow-hidden");
    document.getElementById("body").classList.remove("overflow-hidden");
    var titleElements = document.querySelectorAll('.field__title');
    titleElements.forEach(function(titleElement) {
    titleElement.classList.remove('active');
  });
        
});

popUp.querySelector('.pop-up__body').addEventListener('click', function(event){  
  event.stopPropagation();})



  function modText(inputElement) {
    var labelElement = inputElement.parentNode; // Get the parent label element
    var titleElement = labelElement.querySelector(".field__title"); // Find the field__title element within the label
  
    titleElement.classList.add("active"); // Add the "active" class to the field__title element
  }
  


