 async function pesquisarCidades(siglaEstado) {
    const url = `http://localhost:8080/senai/estado/cidades/sigla/${siglaEstado}}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(`Resposta do Servidor: ${data}`);
    
    return data
      
    

}
 async function pesquisarRegiao(regiao) {
    const url = `http://localhost:8080/senai/regiao/sigla/${regiao}}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(`Resposta do Servidor: ${data}`);
    
    return data
      
    

}
console.log(pesquisarCidades('AC'));
