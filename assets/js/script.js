// cria variável com a URL do banco de dados
const URL = 'http://127.0.0.1:3002/dados/produtos.json'
// executa um request HTTP GET para a URL configurada
fetch(URL)
    // recupera a resposta que a função fetch conseguiu
    .then(function (response) {
        // solicita a resolução da resposta como JSON
        return response.json()
    })
    // recebe a resposta formatada em uma estrutra JavaScript
    .then(function (dados) {
        // captura div que vai receber os novos itens da lista de produtos
        const produtosEmAlta = document.querySelector('.produtos-em-alta')
        // faz um loop no array recebido
        for (const produto of dados) {
            const promocao = produto.promocao ?
                `<h4 class="off-trinta-alta">${produto.promocao}</h4>` :
                ''
            const template = `<button class="kswiss">
                    ${promocao}
                    <h2 class="tenis-off-trinta">
                        <img width="180" src="${produto.imagem}" alt="">
                    </h2>
                </button>
                <h6 class="kswiss-tenis">${produto.categoria}</h6>
                <h4 class="kswiss-nome">${produto.nome}</h4>
                <h4 class="kswiss-preco">
                    <strike>
                        <small>R$ ${produto.preco}</small>
                    </strike>
                    R$ ${produto.preco - produto.desconto}
                </h4>`
            const div = document.createElement('div')
            div.innerHTML = template
            produtosEmAlta.appendChild(div)
        }
    })