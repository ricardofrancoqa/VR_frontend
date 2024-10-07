import LojaVRPage from '../pageObjects/lojaVRpage';

describe('Adicionar produto ao carrinho', () => {
  it('Deve adicionar um cartão VR Auto ao carrinho com sucesso', () => {
    // Visitar página inicial e navegar para a loja
    LojaVRPage.visitHomePage();

    // Clicar em "Compre Online"
    LojaVRPage.clickCompreOnline();

    // LojaVRPage.clickCompreOnline();
    LojaVRPage.verificarURL();

    // Selecionar a modalidade
    LojaVRPage.selecionarModalidadeAvulso();

    // Gerar quantidade e valor aleatórios
    const quantidadeAleatoria = Math.floor(Math.random() * 300) + 1;
    LojaVRPage.inserirQuantidade(quantidadeAleatoria);

    const valorAleatorio = (Math.floor(Math.random() * 901) + 100).toFixed(2);
    const valorFormatado = valorAleatorio.replace('.', ',');

    LojaVRPage.inserirValor(valorAleatorio);

    // Adicionar o produto ao carrinho
    LojaVRPage.adicionarAoCarrinho();

    // Validar que o produto foi adicionado corretamente
    LojaVRPage.validarProdutoAdicionado(quantidadeAleatoria, valorFormatado);
  });
});
