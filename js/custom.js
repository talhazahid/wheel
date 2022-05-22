











// var menu = new MmenuLight(document.querySelector("#mobile_menu"), "all");

// var navigator = menu.navigation({
//  // selectedClass: 'Selected',
//  // slidingSubmenus: true,
//  theme: 'dark',
//  title: 'NFT'
// });

// var drawer = menu.offcanvas({
//  // position: 'left'
// });

// //	Open the menu.
// document
//  .querySelector('a[href="#mobile_menu"]')
//  .addEventListener("click", (evnt) => {
//   evnt.preventDefault();
//   drawer.open();
//  });


$(function () {
 $('#modal').click(function () {
  $('.modal').addClass('open');

  if ($('.modal').hasClass('open')) {
   $('.main-wrapper, body').addClass('blur');
  }
 });

 $('.close, .close-modal-btn').click(function () {
  $('.modal').removeClass('open');
  $('.main-wrapper, body').removeClass('blur');
 });
});









$(".scrollbar").mCustomScrollbar({
 axis: "x",
});


$(".scrollbar-y").mCustomScrollbar({
 axis: "y",
});


