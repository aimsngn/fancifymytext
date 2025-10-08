function makeBigger() {
    document.getElementById("text").style.fontSize = "1.5em";
}

function textStyle() {
    if (document.getElementById("Fancy").checked) {
        document.getElementById("text").style.fontWeight = "bold";
        document.getElementById("text").style.color = "blue";
        document.getElementById("text").style.textDecoration = "underline";
    } else if (document.getElementById("Boring").checked) {
        document.getElementById("text").style.fontWeight = "normal";
        document.getElementById("text").style.color = "black";
        document.getElementById("text").style.textDecoration = "none";
    }
}

function moo() {
    const textArea = document.getElementById("text");
    let upperText = textArea.value = textArea.value.toUpperCase();
 
    let parts = upperText.split(".");  // ["How", "are", "you?"]
    joinedText = parts.join("-Moo.");       // "How_are_you?"
    textArea.value = joinedText;
}
