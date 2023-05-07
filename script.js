// FUNÇÃO PARA A FILTRAGEM DE CARDS

const filterButtons = document.querySelectorAll('.filter-button');
const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    cards.forEach((card) => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// FUNÇÃO PARA A BARRA DE NAVEGAÇÃO
function navbar() {
  var x = document.getElementById('navbar');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// FUNÇÃO PARA A FILTRAGEM DE CARDS
const filter = document.querySelector('.filter');
window.addEventListener('scroll', () => {
  const filterTop = filter.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (filterTop < windowHeight) {
    filter.classList.add('filter-show');
  } else {
    filter.classList.remove('filter-show');
  }
});

// FUNÇÃO PARA TRANSIÇÃO DO NEWSLETTER
const newsletter = document.querySelector('.newsletter');
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}
function handleScroll() {
  if (isElementInViewport(newsletter)) {
    newsletter.classList.add('newsletter-visible');
  } else {
    newsletter.classList.remove('newsletter-visible');
  }
}
window.addEventListener('scroll', handleScroll);

// FUNÇÃO PARA A TRANSIÇÃO DO TEXTO DA SEGUNDA SESSÃO
const textBurguer = document.querySelector('.text-burguer');
const textBurguerPosition = textBurguer.getBoundingClientRect().top;
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition >= textBurguerPosition) {
    textBurguer.classList.add('animate');
  }
});
window.onload = function () {
  document.body.classList.add('loaded');
};

// FUNÇÃO VOLTAR AO TOPO
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
window.onscroll = function() {
  var button = document.querySelector(".back-to-top");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
}