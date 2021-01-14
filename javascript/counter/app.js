window.addEventListener('DOMContentLoaded', function() {
   const btnDec =  document.getElementById('btn-dec');
   const btnInc = document.getElementById('btn-inc');
   const valueDisplay = document.getElementById('value--counter');
   let counter = 0;

   valueDisplay.innerHTML = counter;
   btnDec.addEventListener('click', decrement);
   btnInc.addEventListener('click', increment);

   function increment() {
      counter++;
      valueDisplay.innerHTML = counter;
   }
   function decrement() {
      counter--;
      valueDisplay.innerHTML = counter;
   }
});