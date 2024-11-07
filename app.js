function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
      section.style.display = 'none';
  });

  const sectionToShow = document.getElementById(sectionId);
  if (sectionToShow) {
      sectionToShow.style.display = 'block';
  }
}

function showProductDetails(productId) {
  const productDetails = {
      produto1: {
          titulo: 'Produto 1',
          descricao: 'Descrição detalhada do Produto 1. Feito com materiais reciclados.',
          imagem: 'https://via.placeholder.com/500x300',
          linkCompra: 'https://www.exemplo.com/produto1'
      },
      produto2: {
          titulo: 'Produto 2',
          descricao: 'Descrição detalhada do Produto 2. Estilo único e sustentável.',
          imagem: 'https://via.placeholder.com/500x300',
          linkCompra: 'https://www.exemplo.com/produto2'
      }
  };

  const produto = productDetails[productId];
  
  if (produto) {
      document.getElementById('produto-titulo').textContent = produto.titulo;
      document.getElementById('produto-descricao').textContent = produto.descricao;
      document.getElementById('produto-imagem').src = produto.imagem;
      document.getElementById('comprar-button').onclick = () => {
          window.location.href = produto.linkCompra;
      };

      showSection('produto-detalhes');
  }
}

let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;

function moveCarousel() {
  currentIndex = (currentIndex + 1) % totalItems;
  const offset = -currentIndex * 100;
  carouselItems.forEach(item => {
      item.style.transform = `translateX(${offset}%)`;
  });
}

setInterval(moveCarousel, 3000);
