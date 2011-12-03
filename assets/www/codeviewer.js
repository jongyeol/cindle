function codeviewOnloadHook () {
    addAction();
    window.Codeview.log( window.Codeview.loadfile("filename") );
}

function addCode() {

}

function addAction() {
    labels = document.getElementsByTagName("code"); 
    for( var i = 0; i < labels.length; i++ )
        labels[i].onclick = Clickhook;
}

function Clickhook() {
    window.Codeview.Clickhook( this.innerHTML );
}