// első játékos kezd mindíg
// 0: első játékos,
// 1: második játékos
let activePlayer = 0;
// adot kör alatt megszerzett pont:
let roundScore = 0;

// array: több változót tárol egy darab típusban
// a scores tömb nulaldik eleme az első játékos pontszámait jelenti
// a második elem pedig a második játékos pontszámait
let scores = [0,0];

document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;

document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;

document.querySelector('.dice').style.display = 'none';


document.querySelector('.btn-roll').addEventListener('click', function() {
  
  // 1. Generálunk egy random számot 1-6 között
  
  let dice = Math.floor(Math.random() * 6) + 1;

  // 2. Jelenítsük meg az eredményt
  
  let diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.setAttribute('src', 'dice-'+dice+'.png');


  // 3. Ha a dobott érték nem 1
  //  akkor a dobott értéket adjuk hozzá a roundScore változóhoz
  //  Az eredményt jelenítsük meg a képernyőn
  //
  //  Ha a játékos 1-est dobott, akkor a kövkező játékos jön.

});
