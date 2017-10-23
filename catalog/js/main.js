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