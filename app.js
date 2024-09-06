function pesquisar() {
    // Obtendo a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtendo o campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do Personagem</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // para cada dado dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <img src="${dado.imagem}" alt="${dado.titulo}" width="100">
                <p class="descricao-meta">${dado.descricao}.</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"

    }

    // Atualizando o conteúdo da seção com os resultados
    section.innerHTML = resultados;
}