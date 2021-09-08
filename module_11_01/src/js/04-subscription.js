import '../css/common.css';
// import BSN from 'bootstrap.native';

// const refs = {
//   modal: document.querySelector('#subscription-modal'),
//   subscribeBtn: document.querySelector('button[data-subscribe]'),
// };

const PROMPT_DELAY = 1000;
const MAX_PROMPT = 3;

let promptCounter = 0;


const intervalId = setInterval(() => {
  if(promptCounter === MAX_PROMPT){
    console.log('ми дойшли до максимуму, більше надоєдалку не показуємо!');
    clearInterval(intervalId);
    return;
  }

  console.log('Підпишись на нашу розсилку!!! - ' + Date.now());
  promptCounter += 1;
}, PROMPT_DELAY);