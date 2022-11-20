// function myFunctio() {
document.querySelector('body').setAttribute('class', 'Body');
document.querySelector('div').setAttribute('class', 'DIV');

// Adding a class Title to h1
document.querySelector('h1').classList.add('Title');
// Adding the Title to all h2
for (var i = 0; i < 2; i++) {
  document.querySelectorAll('h2')[i].classList.add('Title');
}
function myFunction() {
  document.querySelectorAll('img')[0].setAttribute('id', 'Image1');
  var random1 = Math.floor(Math.random() * 6) + 1;
  console.log('random number' + random1);

  if (random1 === 1) {
    document.getElementById('Image1').src = ' dicestyle/dice1.png';
  } else if (random1 === 2) {
    document.getElementById('Image1').src = ' dicestyle/dice2.png';
  } else if (random1 == 3) {
    document.getElementById('Image1').src = ' dicestyle/dice3.png';
  } else if (random1 === 4) {
    document.getElementById('Image1').src = ' dicestyle/dice4.png';
  } else if (random1 === 5) {
    document.getElementById('Image1').src = ' dicestyle/dice5.png';
  } else {
    document.getElementById('Image1').src = ' dicestyle/dice6.png';
  }

  document.querySelectorAll('img')[1].setAttribute('id', 'Image2');
  var random2 = Math.floor(Math.random() * 6) + 1;
  console.log('random number' + random2);

  if (random2 === 1) {
    document.getElementById('Image2').src = ' dicestyle/dice1.png';
  } else if (random2 === 2) {
    document.getElementById('Image2').src = ' dicestyle/dice2.png';
  } else if (random2 === 3) {
    document.getElementById('Image2').src = ' dicestyle/dice3.png';
  } else if (random2 === 4) {
    document.getElementById('Image2').src = ' dicestyle/dice4.png';
  } else if (random2 === 5) {
    document.getElementById('Image2').src = ' dicestyle/dice5.png';
  } else {
    document.getElementById('Image2').src = ' dicestyle/dice6.png';
  }
  if (random1 > random2) {
    document.getElementsByTagName('h1')[0].innerText = 'Player1 Won ';
  } else if (random1 < random2) {
    document.getElementsByTagName('h1')[0].innerText = 'Player2 Won ';
  } else {
    document.getElementsByTagName('h1')[0].innerText = 'Its a Draw 🏳️';
  }
  // }
}
