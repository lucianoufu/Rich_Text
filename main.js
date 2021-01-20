function mudaTexto(){
    var textoId = document.getElementById("TextAreaId").value;
    console.log(textoId);
    var paragraph = document.getElementById("Text");
    paragraph.innerText = textoId;

}

function mudaEstiloTexto(){
    /* var teste = window.document.getSelection(); */
    var teste = window.document.getSelection();
    documento = document.getElementById("Text");
    var novavar = documento.innerText.replace(teste, "Teste 123");
    documento.innerText = novavar;
    
}