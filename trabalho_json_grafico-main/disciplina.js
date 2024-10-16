
async function quantidadeVoto() {
    const url = 'https://raw.githubusercontent.com/kksofii/esse-e-o-grafico/refs/heads/main/trabalho_json_grafico-main/disciplina.json'
    const res = await fetch(url)
    const dados = await res.json()
    const disciplina = Object.keys(dados)
    const votos = Object.values(dados)

    const data = [
        {
            x: disciplina, 
            y: votos, 
            type: 'bar'
        }
    ]

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data)
}

quantidadeVoto()
