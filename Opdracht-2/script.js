let body = document.querySelector( "body" )
body.style.maxWidth = "560px"
body.style.margin = "0 auto"

let container = document.getElementById( "container" )
container.style.display = "flex"
container.style.flexWrap = "wrap"
container.style.gap = "5px"
container.style.backgroundColor = "gray"
container.style.padding = "20px"

function createButtons( amount )
{
    for ( let i = 0; i < amount; i++ ) {
        let button = document.createElement( "button" )
        button.innerText = i + 1
        button.style.background = "green"
        button.style.border = 0
        button.style.fontSize = "35px"
        button.style.width = "100px"
        button.style.height = "100px"

        button.onclick= function() { button.style.background = "red" }

        container.appendChild( button )
    }
}

let buttonAmount = 30

createButtons( buttonAmount )