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

function fn_muda_estilo_texto(formatacao, color){
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
        if(color == 'yellow'){
            textohtml.innerHTML = textohtml.innerHTML.replace(texto_selecionado, `<span style = "color: #e0e012">${texto_selecionado}</span>`);
        }

        else if (color == 'blue'){
            textohtml.innerHTML = textohtml.innerHTML.replace(texto_selecionado, `<span style = "color: #2a6099">${texto_selecionado}</span>`);
        }
        else if (color == 'red'){
            textohtml.innerHTML = textohtml.innerHTML.replace(texto_selecionado, `<span style = "color: #FF0000">${texto_selecionado}</span>`);
        }
        else if (color == 'green'){
            textohtml.innerHTML = textohtml.innerHTML.replace(texto_selecionado, `<span style = "color: #08b308">${texto_selecionado}</span>`);
        }
        else if (color == 'pink'){
            textohtml.innerHTML = textohtml.innerHTML.replace(texto_selecionado, `<span style = "color: #FF00FF">${texto_selecionado}</span>`);
        }
    }
    else{
        textohtml.innerHTML = textohtml.innerHTML.replace(texto_selecionado, `<${formatacao}>${texto_selecionado}</${formatacao}>`);
    }   
}

function color_selected(){
    var color = document.getElementById("mySelect").value;
    console.log(color);
    fn_muda_estilo_texto('c', color);
}