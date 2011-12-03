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
    var lineOrg = "";
    var line = "";
    for( var i = 0; i < labels.length; i++ ){
        var node = document.createElement('code');
        lineOrg = labels[i].innerHTML.replace("&nbsp;", " ").replace("&gt;"," ").replace("&lt;"," ");
        line = line.match(/[-_\d\w]+|[^-_\d\w]*/ig);
        for ( var j in line ) { 
            
            if ( line[j].match( /[-_\d\w]+/i ) )
                line[j] = '<code class="' + labels[i].className + '" onclick="clickHook">' + line[j] + '</code>';
        }
        replaced = line.join('');
        labels[i].innerHTML = replaced;
        i += line.length;
    }
}

function clickHook() {
    // window.Codeview.Clickhook( this.innerHTML );
    console.log("onclick");
}