/*
    * fn_show_text -- Change the paragraph of the HTML with the text that the user type on the textbox.
    * 
    * 
    * Parameters:
    * It does not take any parameters,  only uses the DOM propriety to change the HTML file.
    * 
    * 
    * Returns:
    * None. All changes are made inside of the function.
*/

function fn_show_text(){
    var textId = document.getElementById("TextAreaId").value;
    console.log(textId);
    var paragraph = document.getElementById("Text");
    paragraph.innerText = textId;

}

/*
    * fn_change_text_style -- Change the style of the text in the HTML file.
    *
    * Parameters:
    * format -- Type of the format of the text.
    * color -- Color of the text.
    * 
    * 
    * Returs:
    * None. All changes are made inside the function.
*/

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

/*
    * fn_color_selectd -- Get the color selected by the user in the "select" tag.
    * 
    * 
    * Parameters:
    * It does not take any parameters, it only use the DOM propriety to change the HTML file.
    * 
    * Returns:
    * None, instead call the function fn_change_text_style with the color specified by the user.
*/

function color_selected(){
    var color = document.getElementById("mySelect").value;
    console.log(color);
    fn_change_text_style('c', color);
}