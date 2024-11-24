

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
          titulo: 'Mochilas',
          descricao: 'Feita a partir de tecidos que pertenciam a uma história que vale a pena ser lembrada.',
          imagem: 'https://s7.ezgif.com/tmp/ezgif-7-12e0139011.png',
          linkCompra: 'https://www.instagram.com/cosmicacria/'
      },
      produto2: {
          titulo: 'Bags',
          descricao: 'Transformamos as peças de quem se foi em algo que pode acompanhar você todos os dias.',
          imagem: 'https://s7.ezgif.com/tmp/ezgif-7-97277d5ccf.png',
          linkCompra: 'https://www.instagram.com/cosmicacria/'
      },
      produto3: {
        titulo: 'Pochetes',
        descricao: 'Feita a partir de tecidos que pertenciam a uma história que vale a pena ser lembrada.',
        imagem: 'https://s7.ezgif.com/tmp/ezgif-7-444a5239fa.png',
        linkCompra: 'https://www.instagram.com/cosmicacria/'
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

setInterval(moveCarousel, 2000);

document.getElementById('enviar-feedback').addEventListener('click', () => {
  const feedback = document.getElementById('feedback').value;
  if (feedback.trim()) {
      alert('Obrigado pelo seu feedback! Ele será muito importante para nós.');
      document.getElementById('feedback').value = ''; // Limpar campo
  } else {
      alert('Por favor, escreva seu feedback antes de enviar.');
  }
});

function abreMenu() {
    document.getElementById("meuMenu-abrir").style.width = "250px"
    console.log('teste')
}
function fechaMenu() {
    document.getElementById("meuMenu-abrir").style.width = "0"
}


/*Funções para abrir e fechar o menu hambúrguer*/