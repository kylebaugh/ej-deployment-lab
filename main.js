const Rollbar = require("rollbar")

let button = document.querySelector("#buy")

buyButton = () => {
    rollbar.log('you got trolled')
    alert("Siiiiike you don't got the power for this sweet baby! LOL")
}

button.addEventListener('click', buyButton)