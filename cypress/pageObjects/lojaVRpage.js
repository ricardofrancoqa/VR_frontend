class LojaVRPage {
  visitHomePage() {
      cy.visit('https://www.vr.com.br');
  }

  clickCompreOnline() {
    cy.get('#buttonCompreOnline').then(($link) => {
      const url = $link.prop('href');
      cy.visit('https://loja.vr.com.br/'); 
    });
  }


  verificarURL() {
      cy.url().should('include', '/loja');
  }

  selecionarModalidadeAvulso() {
      cy.wait(2000); // Simulando latência
      cy.get('#btn-selecionar-modalidade-avulso').click();
  }

  inserirQuantidade(quantidade) {
      cy.get('#produto-auto-quantidade').clear().type(quantidade);
  }

  inserirValor(valor) {
      cy.get('#produto-auto-valor').clear().type(valor);
  }

  adicionarAoCarrinho() {
      cy.get('#btn-adicionar-carrinho-auto').click();
  }

  validarProdutoAdicionado(quantidade, valorFormatado) {
      cy.get('.product-in-cart-view__content').invoke('text').then((text) => {
          const cleanedText = text.replace(/\s+/g, ' ').trim();
          expect(cleanedText).to.equal(`Produto adicionado!Quantidades${quantidade}Valor por cartãoR$ ${valorFormatado}`);
      });
  }
}

export default new LojaVRPage();
