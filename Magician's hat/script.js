let newX = 0, newY = 0, startX = 0, startY = 0;

const wand = document.getElementById('magic-wand');

wand.addEventListener('mousedown', mouseDown);

function mouseDown(e) {
  startX = e.clientX;
  startY = e.clientY;

  document.addEventListener('mousemove', mouseMove);
  document.addEventListener('mouseup', mouseUp);
}

function mouseMove(e) {
  newX = startX - e.clientX;
  newY = startY - e.clientY;

  startX = e.clientX;
  startY = e.clientY;

  wand.style.top = (wand.offsetTop - newY) + 'px';
  wand.style.left = (wand.offsetLeft - newX) + 'px';
  // wand.style.transform = rotateZ('45deg');
}

function mouseUp(e) {
  wand.style.top = '75px';
  wand.style.left = '100px';
  document.removeEventListener('mousemove', mouseMove);
}


// container-2

const base = document.querySelector('.base');
const base_rect = base.getBoundingClientRect();

const X = base_rect.width;
const Y = base_rect.height;
// console.log(centerY*2/3);
const Hat_A = document.querySelector('.hat-1');
const Hat_B = document.querySelector('.hat-2');
const Hat_C = document.querySelector('.hat-3');

const slot_A = document.querySelector('.slot-1');
const slot_B = document.querySelector('.slot-2');
const slot_C = document.querySelector('.slot-3');

Hat_A.style.setProperty('--ABy', Y * 1 / 3 + 'px');
Hat_A.style.setProperty('--ACy', Y * 2 / 3 + 'px');

Hat_B.style.setProperty('--BCy', Y * 1 / 3 + 'px');
Hat_B.style.setProperty('--BAy', -1 * Y * 1 / 3 + 'px');

Hat_C.style.setProperty('--CBy', -1 * Y * 1 / 3 + 'px');
Hat_C.style.setProperty('--CAy', -1 * Y * 2 / 3 + 'px');

const playBtn = document.querySelector('.playbutton');

const ball = document.getElementById('ball');

const arr = [1/6, 1/2, 5/6];
ball.style.setProperty('--y', Y*arr[Math.floor(Math.random()*3)] + 'px');
ball.style.setProperty('--x', X/2 + 'px');
ball.classList.add("ball");


Hat_A.addEventListener('click', () => {
  setTimeout(() => {
    Hat_A.classList.add("showArticle");
  }, 5);
  //  2 secs to play
  setTimeout(() => {
    Hat_A.classList.remove("showArticle");
  }, 3010);
});

Hat_B.addEventListener('click', () => {
  setTimeout(() => {
    Hat_B.classList.add("showArticle");
  }, 5);
  //  2 secs to play
  setTimeout(() => {
    Hat_B.classList.remove("showArticle");
  }, 3010);
});

Hat_C.addEventListener('click', () => {
  setTimeout(() => {
    Hat_C.classList.add("showArticle");
  }, 5);
  //  2 secs to play
  setTimeout(() => {
    Hat_C.classList.remove("showArticle");
  }, 3010);

});








let i = 5;
playBtn.addEventListener('click', () => {
  setTimeout(() => {
    Hat_A.classList.add("showArticle");
    Hat_B.classList.add("showArticle");
    Hat_C.classList.add("showArticle");
  }, i);
  

  i+=3100;
  setTimeout(() => {
    ball.classList.remove("ball");
    Hat_A.classList.remove("showArticle");
    Hat_B.classList.remove("showArticle");
    Hat_C.classList.remove("showArticle");
  }, i);

  i+=100;
  // Exchange A and C
  setTimeout(() => {
    Hat_A.classList.add("AtoC"); //A @ C
    Hat_C.classList.add("CtoA"); //C @ A
  }, i);
  // let animate and remove: +3100
  i += 1100;
  setTimeout(() => {
    Hat_A.classList.remove("AtoC"); //A @ C
    Hat_C.classList.remove("CtoA"); //C @ A
  }, i);


  // Exchange A and B
  // add animation: +100
  i += 100;
  setTimeout(() => {
    Hat_A.classList.add("AtoB"); //A @ C
    Hat_B.classList.add("BtoA"); //C @ A
  }, i);
  // let animate and remove: +3100
  i += 1100;
  setTimeout(() => {
    Hat_A.classList.remove("AtoB"); //A @ C
    Hat_B.classList.remove("BtoA"); //C @ A
  }, i);

  
  // Exchange B and C
  // add animation: +100
  i += 100;
  setTimeout(() => {
    Hat_B.classList.add("BtoC"); //A @ C
    Hat_C.classList.add("CtoB"); //C @ A
  }, i);
  // let animate and remove: +3100
  i += 1100;
  setTimeout(() => {
    Hat_B.classList.remove("BtoC"); //A @ C
    Hat_C.classList.remove("CtoB"); //C @ A
    ball.style.setProperty('--y', Y*1/2 + 'px');
    ball.style.setProperty('--x', X/2 + 'px');
    ball.classList.add("ball");
  }, i);

});


// container-3
const Hand1 = document.querySelector('#model-1');
const Hand2 = document.querySelector('#model-2');

const Cont3 = document.querySelector('.container-3');

Cont3.addEventListener('click', ()=>{
  Hand1.classList.add('expose');
  Hand2.classList.add('hide');
});