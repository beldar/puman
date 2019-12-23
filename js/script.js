$(document).ready(function(){
  $('#carousel').owlCarousel({
    autoPlay: 9000,
    navigation : true,
    navigationText: ['Anterior', 'Següent'],
    slideSpeed : 1000,
    singleItem : true,
    pagination : true,
    autoplayHoverPause: true
  });
});
