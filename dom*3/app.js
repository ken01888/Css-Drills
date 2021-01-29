document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement('button');
    let btntext = document.createTextNode('Add Square');
    button.appendChild(btntext)
    let name = 0
    let idCount = 0
    button.addEventListener('click', function () {
        let div = document.createElement('div');
        let p = document.createElement('p');
        let text = document.createTextNode(`${name++}`);
        div.className = 'box';
        div.id = `${idCount++}`;
        div.style.background = "black";
        div.style.height = "50px";
        div.style.width = "50px";
        div.style.marginTop = '10px';
        div.style.justifyContent = "space-evenly";
        div.style.display = 'inline-flex';
        document.body.appendChild(div);

        div.addEventListener("mouseover", function () {
            div.appendChild(p)
            p.appendChild(text)
            p.style.color = 'white'
        });

        div.addEventListener('mouseout', function () {
            div.removeChild(p);
        });
        let colors = ['blue', 'orange', "purple", 'indigo', 'yellow', 'pink', 'green', 'violet'];
        let a = 0;
        let b = colors.length;

        div.addEventListener('click', function () {
            if (a < b) {
                div.style.background = colors[a]
                a++
            }
        });




        div.addEventListener('click', function () {
                
            if (div.id % 2 == 0 && div.nextSibling == null) {
                console.log('There are no right blocks')
            } else if (div.id % 2 == 0) {
                document.body.removeChild(div.nextSibling)
            }
//Correct in the Am
            if (div.previousSibling == button) {
                console.log('There are no left blocks')
            } else if (div.id % 2 == 1 && div.previousSibling != document.getElementsByTagName(button)  ) {
                document.body.removeChild(div.previousSibling)
            }
        })

        







    })




    document.body.appendChild(button)
})

/* event.target to get result event.target.id
check jakes slack message node *previous
siblings & next sibling*/
