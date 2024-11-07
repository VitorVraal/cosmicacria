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
          titulo: 'Bolsa de Memórias',
          descricao: 'Feita a partir de tecidos que pertenciam a uma história que vale a pena ser lembrada.',
          imagem: 'https://via.placeholder.com/500x300',
          linkCompra: 'https://www.exemplo.com/produto1'
      },
      produto2: {
          titulo: 'Bolsa do Amor Eterno',
          descricao: 'Transformamos as peças de quem se foi em algo que pode acompanhar você todos os dias.',
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

document.getElementById('enviar-feedback').addEventListener('click', () => {
  const feedback = document.getElementById('feedback').value;
  if (feedback.trim()) {
      alert('Obrigado pelo seu feedback! Ele será muito importante para nós.');
      document.getElementById('feedback').value = ''; // Limpar campo
  } else {
      alert('Por favor, escreva seu feedback antes de enviar.');
  }
});
