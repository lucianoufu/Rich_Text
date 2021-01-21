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

/* function fn_muda_estilo_texto(formatacao){
    var textoSelecionado = document.getSelection();
    var textoHTML = document.getElementById("Text");
    if (formatacao == 'a'){
        url = window.prompt('Digite a sua url: ');
        textoFormatado = textoHTML.innerText.replace(textoSelecionado, `<${formatacao} href = "${url}"> ${textoSelecionado} </${formatacao}>`);
    }
    else{
        textoFormatado = textoHTML.innerText.replace(textoSelecionado, `<${formatacao}> ${textoSelecionado} </${formatacao}>`);
    }

    textoFormatado = `${textoFormatado}`
    textoFormatado.replace('<p id = "Text">', '');
    textoFormatado.replace('</p>', '');
    console.log(`Texto selecionado: ${textoSelecionado}`);
    console.log(`Texto HTML: ${textoHTML}`);
    console.log(`Texto Formatado: ${textoFormatado}`);
    textoHTML.innerHTML += ' ' + textoFormatado;
} */

function fn_muda_estilo_texto(formatacao){
    var texto_selecionado = document.getSelection();
    var textohtml = document.getElementById("Text");
    if (formatacao == 't'){
        textohtml.innerHTML = textohtml.innerHTML.replace(texto_selecionado, `<h2>${texto_selecionado}</h2>`);
    }
    else if (formatacao == 'a'){
        url = window.prompt('Digite a url.');
        textohtml.innerHTML = textohtml.innerHTML.replace(texto_selecionado, `<${formatacao} href = "${url}">${texto_selecionado}</${formatacao}>`);
    }
    else if (formatacao == 's'){
        textohtml.innerHTML = textohtml.innerHTML.replace(texto_selecionado, `<div class = 'specialArea'> <p>${texto_selecionado}</p></div>`);
    }
    else if (formatacao == 'c'){
        textohtml.innerHTML = textohtml.innerHTML.replace(texto_selecionado, `<span style = "color: #2a6099">${texto_selecionado}</span>`);
    }
    else{
        textohtml.innerHTML = textohtml.innerHTML.replace(texto_selecionado, `<${formatacao}>${texto_selecionado}</${formatacao}>`);
    }   
}
