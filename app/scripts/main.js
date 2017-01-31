(function($){

$(function() {

$(".menu-sub-options").hide();
//$(".titler").hover(function() {
//  $(this).toggleClass(".selectedNav");
//});

$(".titler > a").click(function(event){
  event.preventDefault();
  console.log("working");
  $(".selectedNav").removeClass('selectedNav');
  $(this).parent(".menu-sub-option").addClass("selectedNav");
  $(".titler").not(".selectedNav").find(".menu-sub-options").slideUp();
  $(this).siblings(".menu-sub-options").slideDown();

  // $(".titler").not("selectedNav").find(".menu-sub-options").toggleSlide();
  // function(){
  //   $(".options").show();
  // }, function(){
  //   $(".options").hide();
  // }
//closest

// li.not('.selectedNav').find(".menu-sub-options")
})




});//end doc ready jQuery iife
}(jQuery));//end iife for entire file
