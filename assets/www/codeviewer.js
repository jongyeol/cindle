var prj;
var extension;
function codeviewPreloadHook () {
    // load file
    filestr = window.Codeview.loadfile();
    $("pre").text( filestr );
}

function codeviewPostloadHook () {
    var content = $("#content");
    var contentContainer = $("#contentContainer");
    SyntaxHighlighter.highlight();
    addAction();
    // load linnum
}

function addAction() {
    labels = document.getElementsByTagName("code"); 
    for( var i = 0; i < labels.length; i++ )
        labels[i].onclick = Clickhook;
}

function Clickhook() {
    window.Codeview.Clickhook( this.innerHTML );
}