var fs = require('fs');
var _ = require('underscore')
var colors = require('colors');
//var LocalStorage = require('node-localstorage').LocalStorage,
//localStorage = new LocalStorage('./scratch');

var quotes = [];
var quote = {
	heading : "",
	content : ""
};
var keys = ['heading','content'];
key = 0;
//var prag_tips = localStorage.getItem('prag_tips');
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var gotTips = function(data){
	//console.log(data.split('\n'));
	var lines = data.split('\n');
	//console.log(lines);
	_.each(lines,function(line){
		if(line.length===0){
			//console.log(quote)
			key = 0;
			quotes.push({'heading':quote['heading'],'content':quote['content']});
		}
		else{
			quote[keys[key]] = line;
			key = 1;
		}
	});
	//console.log(quotes);
//	localStorage.setItem('prag_tips',quotes);
        var rand_int = getRandomInt(0,quotes.length-1);        
        console.log(quotes[rand_int].heading.bold.green.underline);
        console.log(quotes[rand_int].content.bold.white);

}


//if(!prag_tips){
	fs.readFile('/home/sid/.pragmatic/tips','utf8',function(err,data){
		if(err){
			return console.log(err);
		}else{
			gotTips(data);
		
		}
});
//	});
//}else{
//	var rand_int = getRandomInt(0,prag_tips.length);	
//	console.log(prag_tips[rand_int].heading);
//	console.log(prag_tips[rand_int].content);
///	}
