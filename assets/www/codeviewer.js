var prj;
var extension;
function codeviewPreloadHook () {
    // load file
    // filestr = window.Codeview.loadfile();
    // $("pre").text( filestr );
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
    var varRegex = /[-_\w\d]+/ig;
    var line = "";
    var numOfMatch;
    for( var i = 0; i < labels.length; i++ ){
        line = labels[i].innerHTML.split("&nbsp;").join(" ");
        line = line.split("&gt;").join("<");
        line = line.split("&lt;").join(">");
        line = line.match(/[-_\d\w]+|[^-_\d\w]*/ig);
        numOfMatch=0;
        for ( var j in line ) { 
            if ( line[j].match( /[-_\d\w]+/i ) ){
                numOfMatch++;
                line[j] = '<code class="' + labels[i].className + '" onclick="clickHook">' + line[j] + '</code>';
            }
        }
        replaced = line.join('');
        labels[i].innerHTML = replaced;
        i += numOfMatch;
    }
}

function clickHook() {
    // window.Codeview.Clickhook( this.innerHTML );
    console.log("onclick");
}