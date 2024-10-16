const url = 'https://raw.githubusercontent.com/Akiovictor/trabalho_json_grafico/refs/heads/main/informacoes.json'

async function vizualizarInformacoes() {
    const res = await fetch(url)
    const dados = await res.json()

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `De acordo com <span>Izabel Marri,</span> gerente de Estudos e Análises Demográficas do IBGE, <span> “temos observado o aumento desse indicador há algum tempo, </span>com ganhos de anos de vida em todas as idades, principalmente devido aos avanços da medicina”</span>`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoes()
