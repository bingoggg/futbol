$( document ).ready(function() {
//Slider
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
    $(this).toggleClass("active");
    });   
//Toogle Mobile Menu
    $("#mob-button").click(function() {
     $(".main-nav").toggleClass( "active active-mobile" );
     $("#mob-button").toggleClass("active");
    });
//Search Mobile Animation
    $( "#Search input" ).focus(function() {
  $("#nav").addClass( "mob-search-active" );
});
    $( "#Search input" ).blur(function() {
  $("#nav").removeClass( "mob-search-active" );
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

