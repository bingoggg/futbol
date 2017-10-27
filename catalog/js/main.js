$( document ).ready(function() {
   $(function() {
        $('.owl-carousel').owlCarousel({
            items: 1,
            singleItem: true,
            nav: true,
            loop: true,
            navText: [
                '<div class="btn btn-primary"> <i class="fa fa-angle-left"></i></div>',
                '<div class="btn btn-primary"> <i class="fa fa-angle-right"></i></div>'
            ],
         })
    });
   $('.spoiler-menu').click(function() {
    $('ul.main-nav').toggleClass("active");
    });   
   //Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}
});

