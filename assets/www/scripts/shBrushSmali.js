/**
 * Licence: LGPL
 * Code by: ehooo
 */
dp.sh.Brushes.Smali = function()
{
	this.GetPointEndKeywords = function(str){
		return '\\.end\\ ' + str.replace(/ /g, '|\\.end\\ ');
	};

	this.GetPointKeywords = function(str){
		return '\\.' + str.replace(/ /g, '|\\.');
	};

	this.GetDirectives = function(str){
		var tmp = str.replace('-', '\\-');
		return '\\b' + tmp.replace(/ /g, '\\b|\\b')+'\\b';
	};

	var keywords = 'true false null nop public static final protected private build runtime system throw'+
	' constructor interface enum strictfp synthetic annotation volatile transient';
	var point_end_keywords = 'field subannotation annotation method parameter local packed\\-switch array\\-data sparse\\-switch';
	var point_keywords = 'locals '+point_end_keywords+' restart class super implements'+
	' line prologue epilogue catchall catch source enum registers'

	var directives ='goto/16 goto/32 declared-synchronized'+
	' return-wide return-object return-void monitor-enter monitor-exit'+
	' const/4 const/16 const/high16 const-class const-string/jumbo const-string const-wide/16 const-wide/high16 const-wide/32 const-wide'+
	' if-eqz if-nez if-ltz if-gez if-gtz if-lez if-eq if-ne if-lt if-ge if-gt if-le cmpl-float cmpg-float cmpl-double cmpg-double cmp-long'+
	' neg-int not-int neg-long not-long neg-float neg-double int-to-long int-to-float int-to-double long-to-int long-to-float long-to-double float-to-int float-to-long float-to-double double-to-int double-to-long double-to-float int-to-byte int-to-char int-to-short'+
	' move/16 move/from16 move-exception move-result-wide move-result-object move-result move-wide/16 move-wide/from16 move-wide move-object/16 move-object/from16 move-object'+
	' sget-wide sget-object sget-boolean sget-byte sget-char sget-short sput-wide sput-object sput-boolean sput-byte sput-char sput-short'+
	' iput-wide-quick iput-object-quick iget-wide-quick iget-object-quick iget-wide iget-object iget-boolean iget-byte iget-char iget-short iput-wide iput-object iput-boolean iput-byte iput-char iput-short iget-quick iput-quick'+
	' aget-wide aget-object aget-boolean aget-byte aget-char aget-short aput-wide aput-object aput-boolean aput-byte aput-char aput-short'+
	' and-int/lit8 or-int/lit8 xor-int/lit8 shl-int/lit8 shr-int/lit8 ushr-int/lit8 add-int/lit8 rsub-int/lit8 mul-int/lit8 div-int/lit8 rem-int/lit8'+
	' add-int/lit16 mul-int/lit16 div-int/lit16 rem-int/lit16 and-int/lit16 or-int/lit16 xor-int/lit16'+
	' add-int/2addr sub-int/2addr mul-int/2addr div-int/2addr rem-int/2addr and-int/2addr or-int/2addr xor-int/2addr shl-int/2addr shr-int/2addr ushr-int/2addr add-long/2addr sub-long/2addr mul-long/2addr div-long/2addr rem-long/2addr and-long/2addr or-long/2addr xor-long/2addr shl-long/2addr shr-long/2addr ushr-long/2addr add-float/2addr sub-float/2addr mul-float/2addr div-float/2addr rem-float/2addr add-double/2addr sub-double/2addr mul-double/2addr div-double/2addr rem-double/2addr'+
	' rsub-int add-int sub-int mul-int div-int rem-int and-int or-int xor-int shl-int shr-int ushr-int add-long sub-long mul-long div-long rem-long and-long or-long xor-long shl-long shr-long ushr-long add-float sub-float mul-float div-float rem-float add-double sub-double mul-double div-double rem-double'+
	' invoke-virtual/range invoke-super/range invoke-direct/range invoke-static/range invoke-interface/range filled-new-array/range execute-inline/range invoke-virtual-quick/range invoke-super-quick/range'+
	' invoke-virtual invoke-super invoke-direct invoke-static invoke-interface invoke-virtual-quick invoke-super-quick invoke-direct-empty execute-inline'+
	' check-cast new-instance instance-of new-array array-length filled-new-array fill-array-data packed-switch sparse-switch'+
	' aput iput sput aget iget sget move const return goto';

	this.regexList = [
		{ regex: dp.sh.RegexLib.SingleLinePerlComments,							css: 'comment' },		// one line comments smali
		{ regex: dp.sh.RegexLib.DoubleQuotedString,								css: 'string' },		// strings
		{ regex: dp.sh.RegexLib.SingleQuotedString,								css: 'string' },		// strings
		{ regex: new RegExp('\\b([\\d]+(\\.[\\d]+)?|0x[a-f0-9]+)\\b', 'gi'),	css: 'number' },		// numbers
		{ regex: new RegExp('L([a-zA-Z_]+[a-z_A-Z0-9]*)(/([a-z_A-Z]+[a-z_A-Z0-9\\$]*))+;', 'g'),
																				css: 'clase' },			// class
		{ regex: new RegExp('\\b(v|p)[\\d]+(\\.[\\d]+)?\\b', 'gi'),				css: 'vars' },			// valiable
		{ regex: new RegExp(this.GetPointKeywords(point_keywords), 'gm'),		css: 'keyword' },		// start with '.' keyword
		{ regex: new RegExp(this.GetPointEndKeywords(point_end_keywords), 'gm'),css: 'keyword' },		// start with '.end *' keyword
		{ regex: new RegExp(this.GetDirectives(directives), 'gm'),				css: 'directives' },	// smali directives
		{ regex: new RegExp(this.GetKeywords(keywords), 'gm'),					css: 'keyword' },		// keyword
		{ regex: new RegExp('&lt;(init|clinit)&gt;', 'gi'),						css: 'func' }			// functions
		];

	this.CssClass = 'dp-smali';
	this.Style =	'.dp-smali .number { color: #C00000; }' +
					'.dp-smali .comment { color: #A4A4A4; }' +
					'.dp-smali .vars { color: #B404AE; }' +
					'.dp-smali .clase { color: #04B404; }' +
					'.dp-smali .directives { color: #0BBBB0; }' +
					'.dp-smali .func { color: red; }';

};
dp.sh.Brushes.Smali.prototype	= new dp.sh.Highlighter();
dp.sh.Brushes.Smali.Aliases	= ['smali'];
