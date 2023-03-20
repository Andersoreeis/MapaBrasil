"use strict"
const mapa = document.querySelector('svg')
mapa.addEventListener('click',getEstados)
function getEstados(event){
    const estado = event.target.id.replace('BR-','')
    console.log(estado);
    prencherDados()
    
}
function crateCard(estado){
    const container = document.createElement('div')
    container.classList.add('dados-container')

    const header = document.createElement('div')
    header.classList.add('header-dados')

    const logoCircleSigla = document.createElement('div')
    logoCircleSigla.classList.add('logo')

    const titleCircle = document.createElement('h1')
    titleCircle.classList.add('titleCircle')

    const title = document.createElement('div')
    title.classList.add('title')

    const titleLarge = document.createElement('p')
    titleLarge.classList.add('titleLarge')

    const capital = document.createElement('p')
    capital.classList.add('capital')

    const regiao = document.createElement('p')
    regiao.classList.add('capital')

    const spanNameCapital = document.createElement('span')
    const spanNameRegiao = document.createElement('span')

    const cidades = document.createElement('div')
    cidades.classList.add('cidades')

    const textCidades = document.createElement('p')
    textCidades.classList.add('textCidades')
    
    const ul = document.createElement('ul')
    const li = document.createElement('li')

    container.append(header,cidades)
    header.append(logoCircleSigla, title)
    logoCircleSigla.append(titleCircle)
    title.append(titleLarge,capital,regiao)
    cidades.append(textCidades,ul,)
    ul.append(li)

    return container

}

function prencherDados(){
   
}













