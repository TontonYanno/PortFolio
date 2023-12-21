// import Typewriter from 'typewriter-effect/dist/core';

const textAmin= querySelector('h1')

new Typewriter(textAmin, {
    deleteSpeed:20
  })
  .ChangeDelay(20)
  .TypeString(",Je suis Etudiant en Informatique Option Genie Logiciel")
  .pauseFor(1000)
  .deleteChars(48)
  .TypeString('<span style="colo:green"> Dev Web Junior</span>')
  .pauseFor(1000)
  .deleteChars(10)
  .TypeString('<span style="color:red"> Laravel</span>')
  .pauseFor(1000)
  .deleteChars(9)
  .TypeString('<span style="color:#ea39ff"> PHP</span>')
  .pauseFor(1000)
  .deleteChars(9)
  .start()
 
  // for carroussel 
  $('input').on('change', function() {
    $('body').toggleClass('blue');
  });
  
  