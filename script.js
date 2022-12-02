

function contar () {

    let nInicio = Number(document.getElementById ("txtInicio").value)
    let nFim= Number(document.getElementById ("txtFim").value)
    let passo = Number(document.getElementById ("txtPasso").value)
    let res = document.getElementById('resposta')
    
    
    
    if (nInicio == "" || nFim == ""||passo == 0 || passo == ""){
        res.innerHTML = "Não foi possível contar! Verifique os dados inseridos e tente novamente."}   
    else {
    res.innerHTML = 'Contando: '

        if (nInicio < nFim ){
        while (nInicio <= nFim) {
        res.innerHTML += ' &#10145 ' + nInicio
        nInicio = nInicio + passo}}
            
            else {
            while (nInicio >= nFim) {
            res.innerHTML += ' &#10145 ' + nInicio
            nInicio = nInicio - passo}}

            res.innerHTML += ' &#10145 &#9940'}

}
