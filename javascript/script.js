/* 
MARK PALFREEMAN
CODE FELLOWS 
UX BOOTCAMP APPLICATION
*/

$(document).ready(function() {
   $(".ingredients li").click(function () {
      $(this).toggleClass("checked");
   });
});