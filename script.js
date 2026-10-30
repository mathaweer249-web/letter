const envelope = document.getElementById('envelopeWrapper');
const hint = document.querySelector('.hint');

envelope.addEventListener('click', () => {
  envelope.classList.toggle('open');
  
  if (envelope.classList.contains('open')) {
    hint.textContent = '✨ Tap again to close the envelope ✨';
  } else {
    hint.textContent = '💌 Something special inside? Tap to open!';
  }
});