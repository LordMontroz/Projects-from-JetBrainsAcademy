let btnUCase = document.getElementById("upper-case");
let btnLCase = document.getElementById("lower-case");
let btnPCase = document.getElementById("proper-case");
let btnSCase = document.getElementById("sentence-case");



btnUCase.addEventListener("click", function() {
    let textArea = document.getElementById("text");
    textArea.value = textArea.value.toUpperCase();
});

btnLCase.addEventListener("click", function() {
    let textArea = document.getElementById("text");
    textArea.value = textArea.value.toLowerCase();
});

btnPCase.addEventListener("click", function() {
    let textArea = document.getElementById("text");
    textArea.value = textArea.value.split(' ')
        .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
        .join(' ');
});

btnSCase.addEventListener("click", function() {
    let textArea = document.getElementById("text");
    textArea.value = textArea.value.split('. ')
        .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
        .join('. ');
});

function download(filename, text) {
    let element = document.createElement('a');
    element.style.display = 'none';
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();

    document.body.removeChild(element);
}

document.getElementById("save-text-file").addEventListener('click', function (){
    let text = document.getElementById("text").value;

    download("text.txt", text);
}, false);