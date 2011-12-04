Codeview = (function(){

        /* private values */
        var prj;
        var language;

        /* public methods */
        return { 
            setTitle : function( title ) {
                document.getElementById("filename").innerHTML = title;
            },

            addAction : function() {
                labels = document.getElementsByTagName("code"); 
                var varRegex = /[-_\w\d]+/ig;
                var line = "";
                var numOfMatch;
                for( var i = 0; i < labels.length; i++ ){
                    line = labels[i].innerHTML.split("&nbsp;").join(" ");
                    line = line.split("&gt;").join("<");
                    line = line.split("&lt;").join(">");
                    line = line.match(/[-_\"\d\w]+|[^-_\"\d\w]*/ig);
                    numOfMatch=0;
                    for ( var j in line ) { 
                        if ( line[j].match( /[-_\"\d\w]+/i ) ){
                            numOfMatch++;
                            line[j] = '<code class="' + labels[i].className + '" onclick="Codeview.clickHook(this)">' + line[j] + '</code>';
                        }
                    }
                    replaced = line.join('');
                    labels[i].innerHTML = replaced;
                    i += numOfMatch;
                }
            },

            postloadHook : function() {
                var content = $("#content");
                var contentContainer = $("#contentContainer");
                SyntaxHighlighter.highlight();
                Codeview.addAction();
                // load linnum
                Codeview.setTitle( "filename" );
            },

            preloadHook : function() {
                // load file
                filestr = window.Cindle.loadfile();
                $("pre").text( filestr );
            },

            clickHook : function( node ) {
                // console.log( node.innerHTML );
                window.Cindle.Clickhook( this.innerHTML );
            }
        };
    })();
