var prj;
var extension;
function codeviewPreloadHook () {
    // load file
    fileStr = window.Codeview.loadFile();
    $("pre").text( "import android.webkit.WebView;" );
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