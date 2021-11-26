let letters = ["A","S","D","F","G","H","J","W","E","T","Y","U"];



document.addEventListener("keypress",function (event) {
    if (letters.includes(event.key.toUpperCase()))
    {
        let audio = new Audio("./audio/"+event.key.toUpperCase()+".mp3");
        audio.play();
        console.log("The '" + event.key + "' key is pressed.");
    }
    else
    {
        console.log("Unbound key pressed.");
    }
});