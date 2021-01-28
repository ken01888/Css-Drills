document.addEventListener('DOMContentLoaded', function () {

    let div = document.createElement('div')
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let h5 = document.createElement('h5');
    let h6 = document.createElement('h6');
    let text = document.createTextNode('This is a h1');
    let text2 = document.createTextNode("This is a h2");
    let text3 = document.createTextNode("This is a h3");
    let text4 = document.createTextNode('This is a h4');
    let text5 = document.createTextNode('This is a h5');
    let text6 = document.createTextNode('This is a h6');
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(h5);
    div.appendChild(h6);
    h1.appendChild(text);
    h2.appendChild(text2);
    h3.appendChild(text3);
    h4.appendChild(text4);
    h5.appendChild(text5);
    h6.appendChild(text6);

    div.className = "header-container";
    h1.className = 'h1';
    h2.className = 'h2';
    h3.className = 'h3';
    h4.className = 'h4';
    h5.className = 'h5';
    h6.className = 'h6';
    let num = ['DarkBlue', 'Indigo', 'RebeccaPurple', 'DarkSlateGray', "DarkOrange", 'DarkMagenta', 'FireBrick', 'Olive']
    let i = 0
    
    function color(){
        
        event.target.style.color=(num[i]);
        i++;  
    };

    // color change
    h1.addEventListener("dblclick",color);
    h2.addEventListener("dblclick",color);
    h3.addEventListener("dblclick",color);
    h4.addEventListener("dblclick",color);
    h5.addEventListener("dblclick",color);
    h6.addEventListener("dblclick",color);


    



    
//button & list items steps 15-18
let button = document.querySelector('button');
let count = 1

button.addEventListener('click',item);


function item () {
    let ol = document.createElement('ol');
    let li = document.createElement('li');
    let lText = document.createTextNode("This is list item " + count++,);
    ol.appendChild(li);
    li.appendChild(lText);
    document.body.appendChild(ol);

    // change text color step 18
    li.addEventListener('click',color);

    //remove child step 19
    ol.addEventListener("dblclick",function(){
        ol.removeChild(li)
    })
    


};







    document.body.appendChild(div);


});






 








