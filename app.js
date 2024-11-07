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
          linkCompra: 'wa.me/5547997873644'
      },
      produto2: {
          titulo: 'Produto 2',
          descricao: 'Descrição detalhada do Produto 2. Estilo único e sustentável.',
          imagem: 'https://via.placeholder.com/500x300',
          linkCompra: 'wa.me/5547997873644'
      },
      produto3: {
          titulo: 'Produto 3',
          descricao: 'Descrição detalhada do Produto 3. Feito à mão, com amor e qualidade.',
          imagem: 'https://via.placeholder.com/500x300',
          linkCompra: 'wa.me/5547997873644'
      },
      produto4: {
          titulo: 'Produto 4',
          descricao: 'Descrição detalhada do Produto 4. Elegância e conforto em cada detalhe.',
          imagem: 'https://via.placeholder.com/500x300',
          linkCompra: 'wa.me/5547997873644'
      },
      produto5: {
          titulo: 'Produto 5',
          descricao: 'Descrição detalhada do Produto 5. Feito com tecidos reciclados de alta qualidade.',
          imagem: 'https://via.placeholder.com/500x300',
          linkCompra: 'wa.me/5547997873644'
      },
      produto6: {
          titulo: 'Produto 6',
          descricao: 'Descrição detalhada do Produto 6. Acessório incrível para o seu estilo.',
          imagem: 'https://via.placeholder.com/500x300',
          linkCompra: 'wa.me/5547997873644'
      },
      produto7: {
          titulo: 'Produto 7',
          descricao: 'Descrição detalhada do Produto 7. Design sofisticado e sustentável.',
          imagem: 'https://via.placeholder.com/500x300',
          linkCompra: 'wa.me/5547997873644'
      },
      produto8: {
          titulo: 'Produto 8',
          descricao: 'Descrição detalhada do Produto 8. Perfeito para qualquer ocasião.',
          imagem: 'https://via.placeholder.com/500x300',
          linkCompra: 'wa.me/5547997873644'
      },
      produto9: {
          titulo: 'Produto 9',
          descricao: 'Descrição detalhada do Produto 9. Para quem busca exclusividade e estilo.',
          imagem: 'https://via.placeholder.com/500x300',
          linkCompra: 'wa.me/5547997873644'
      },
      produto10: {
          titulo: 'Produto 10',
          descricao: 'Descrição detalhada do Produto 10. Sinta o conforto com estilo.',
          imagem: 'https://via.placeholder.com/500x300',
          linkCompra: 'wa.me/5547997873644'
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

window.onload = function() {
  showSection('home');
};

document.getElementById('form-contato')?.addEventListener('submit', function(event) {
  event.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;
  
  alert(`Obrigado pelo seu contato, ${nome}! Vamos responder o mais breve possível.`);
  document.getElementById('form-contato').reset();
});
