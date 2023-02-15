let background = document.querySelector( '.bgc' )
background.style.backgroundColor = "gray"
background.style.maxWidth = "400px"
background.style.margin = "0 auto"

let container = document.getElementById( 'container' )
container.style.display = "flex"
container.style.justifyContent = "center"
container.style.gap = "5px"
container.style.backgroundColor = "white"
container.style.padding = "20px"

function createButton( array ) 
{
    array.forEach((color, index) => {
        console.log( color )
        console.log( index )
        let button = document.createElement( 'button' ) 
        button.innerHTML += "Button " + (index += 1)
        button.style.backgroundColor = color
        button.style.border = 0
        button.style.width = "30%"
        button.style.padding = "20px"
        button.style.cursor = "pointer"

        button.onclick= function() { document.body.style.background = color }

        container.appendChild( button )
    });
} 

createButton( [ "green", "red", "blue" ] )
