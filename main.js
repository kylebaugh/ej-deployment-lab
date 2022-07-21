let Rollbar = require("rollbar");
let rollbar = new Rollbar({
  accessToken: 'b18a0032b8f7437eb56d39e245024298',
  captureUncaught: true,
  captureUnhandledRejections: true
});


let button = document.querySelector("#buy")
let buttonTwo = document.querySelector("#disclaimer")
buyButton = () => {
    rollbar.log("user tried to buy the sword")
    alert("Siiiiike you don't got the power for this sweet baby! LOL")
}

disclaimerButton = () => {
    rollbar.log('lol the user got trolled')
    alert("I am not responsible for any broken personal objects for trying to buy LOL")
}



button.addEventListener('click', buyButton)
buttonTwo.addEventListener('click', disclaimerButton)