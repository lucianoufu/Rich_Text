function change_text(){
    var textId = document.getElementById("TextAreaId").value;
    console.log(textId);
    var paragraph = document.getElementById("Text");
    paragraph.innerText = textId;

}

function fn_change_text_style(format, color){
    var selected_text = document.getSelection();
    var textHTMLY = document.getElementById("Text");
    if (format == 't'){
        textHTMLY.innerHTML = textHTMLY.innerHTML.replace(selected_text, `<h2>${selected_text}</h2>`);
    }
    else if (format == 'a'){
        url = window.prompt('Digite a url.');
        textHTMLY.innerHTML = textHTMLY.innerHTML.replace(selected_text, `<${format} href = "${url}">${selected_text}</${format}>`);
    }
    else if (format == 's'){
        textHTMLY.innerHTML = textHTMLY.innerHTML.replace(selected_text, `<div class = 'specialArea'> <p>${selected_text}</p></div>`);
    }
    else if (format == 'c'){
        if(color == 'orange'){
            textHTMLY.innerHTML = textHTMLY.innerHTML.replace(selected_text, `<span style = "color: #ff8800">${selected_text}</span>`);
        }

        else if (color == 'blue'){
            textHTMLY.innerHTML = textHTMLY.innerHTML.replace(selected_text, `<span style = "color: #2a6099">${selected_text}</span>`);
        }
        else if (color == 'red'){
            textHTMLY.innerHTML = textHTMLY.innerHTML.replace(selected_text, `<span style = "color: #FF0000">${selected_text}</span>`);
        }
        else if (color == 'green'){
            textHTMLY.innerHTML = textHTMLY.innerHTML.replace(selected_text, `<span style = "color: #08b308">${selected_text}</span>`);
        }
        else if (color == 'pink'){
            textHTMLY.innerHTML = textHTMLY.innerHTML.replace(selected_text, `<span style = "color: #FF00FF">${selected_text}</span>`);
        }
    }
    else{
        textHTMLY.innerHTML = textHTMLY.innerHTML.replace(selected_text, `<${format}>${selected_text}</${format}>`);
    }   
}

function color_selected(){
    var color = document.getElementById("mySelect").value;
    console.log(color);
    fn_change_text_style('c', color);
}