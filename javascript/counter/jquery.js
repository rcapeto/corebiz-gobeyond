$(document).ready(function() {
   let counter = 0;

   $("#value--counter").html(counter);

   $("#btn-dec").click(function() {
      $("#value--counter").html(--counter);
   });

   $("#btn-inc").click(function() {
      $("#value--counter").html(++counter);
   });
});