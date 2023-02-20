let buttonAmount = 30

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
        button.value = 1
        button.style.background = "green"
        button.style.border = 0
        button.style.fontSize = "35px"
        button.style.width = "100px"
        button.style.height = "100px"

        button.onclick = ( function() {
            if ( button.value == 1 ) {
                button.style.background = "red"
                button.value = 2
            } else if ( button.value == 2) {
                button.style.background = "purple"
                button.value = 3
            } else if ( button.value == 3) {
                button.style.background = "blue"
                button.value = 4
            } else if ( button.value == 4) {
                button.style.background = "black"
                button.value = 5
            } else if ( button.value == 5) {
                button.remove()
            }
        });

        container.appendChild( button )
    }
}


createButtons( buttonAmount )