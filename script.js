const letterIcon = document.querySelector('.letter-icon');
const card = document.querySelector('.card');

letterIcon.addEventListener('click', function() {
  card.classList.toggle('show');
});

card.addEventListener("click", function() {
  alert("¡Feliz aniversario de 4 años juntos!");
});
