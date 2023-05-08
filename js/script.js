// функция открывает бургер
function navToggle() {
    var headerUl = document.getElementById("headerUl");
    headerUl.classList.toggle("active");
    document.getElementById("html").classList.toggle("overflow-hidden");
    document.getElementById("body").classList.toggle("overflow-hidden");
  }


  // функция крутит кнопку бургера
  $(document).ready(function(){
    $(".header__burger").click(function(){
      $(this).toggleClass("is-active");
    });
  });


  // карусель
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


// копирайт
var currentYear = new Date().getFullYear();
document.getElementById("footer-year").innerHTML = currentYear;


// модальное окно
const popUp = document.getElementById('popUp');
function popup(){
      document.getElementById('headerUl').classList.remove("active");
      document.getElementById("html").classList.add("overflow-hidden");
      document.getElementById("body").classList.add("overflow-hidden");
      popUp.classList.add('active');
      return false;
}
// чтобы закрывалось окно при нажатии на черное
popUp.addEventListener('click', function(){
    popUp.classList.remove('active');
    document.getElementById("html").classList.remove("overflow-hidden");
    document.getElementById("body").classList.remove("overflow-hidden");
});
const closePopUp = document.getElementById('closePopUp');
closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
    document.getElementById("html").classList.remove("overflow-hidden");
    document.getElementById("body").classList.remove("overflow-hidden");
});

popUp.querySelector('.pop-up__body').addEventListener('click', function(event){  
  event.stopPropagation();})


// конец модального окна