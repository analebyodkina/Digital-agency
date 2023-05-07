// nav toogle
function navToggle() {
    var headerUl = document.getElementById("headerUl");
    headerUl.classList.toggle("active");
  }

  $('.owl-carousel').owlCarousel({
    // items:3,
    lazyLoad:true,
    loop:false,
    margin:24,
    responsiveClass:true,
    responsive : {
      // breakpoint from 0 up
      0 : {
          items:1
      },
      // breakpoint from 480 up
      576 : {
          items:2
          
      },
      // breakpoint from 768 up
      768 : {
        items:3
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
      popUp.classList.add('active');
      return false;
}
// чтобы закрывалось окно при нажатии на черное
popUp.addEventListener('click', function(){
    popUp.classList.remove('active');
});
const closePopUp = document.getElementById('closePopUp');
closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
});

popUp.querySelector('.pop-up__body').addEventListener('click', function(event){  
  event.stopPropagation();})


// конец модального окна