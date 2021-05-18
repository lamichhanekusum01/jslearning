'use strict';
const show = document.querySelectorAll('.show-modal');
const close = document.querySelector('.close-modal');
const modal = document.querySelector('.modal ');
const overlay = document.querySelector('.overlay ');
const closeModal = function () {
  console.log('button clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < show.length; i++)
  show[i].addEventListener('click', openModel);

close.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (p) {
  console.log(p.key);

  if (p.key === 'Escape') {
    if (!modal.classList.contains(this.hidden)) {
      closeModal();
    }
  }
});
