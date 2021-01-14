const botao = document.getElementById('botao');

function teste() {

   var nome = 'Raphael';
   var idade = 23;

   console.log(`${nome} tem ${idade} anos`);
   console.log(typeof idade);

   var num1 = 5;
   var num2 = 3;

   var soma = num1 + num2;

   console.log(soma);

   if(idade === 23 && nome === 'Raphael') {
      console.log('é igual');
   } else {
      console.log('não é igual');
   }
}

botao.addEventListener('click', teste);