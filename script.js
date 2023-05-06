$(document).ready(function() {
  $('.stat-value').each(function() {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 3000,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
});

const filterButtons = document.querySelectorAll('.filter-button');
const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remover classe 'active' de todos os botões
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Adicionar classe 'active' no botão clicado
    button.classList.add('active');
    // Obter o filtro do botão clicado
    const filter = button.dataset.filter;
    // Exibir somente os cards correspondentes ao filtro
    cards.forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
