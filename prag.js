var fs = require('fs');
var _ = require('underscore')
var colors = require('colors');

var quotes = [];
var quote = {
	heading : "",
	content : ""
};
var keys = ['heading','content'];
key = 0;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var gotTips = function(data){
	var lines = data.split('\n');
	_.each(lines,function(line){
		if(line.length===0){
			key = 0;
			quotes.push({'heading':quote['heading'],'content':quote['content']});
		}
		else{
			quote[keys[key]] = line;
			key = 1;
		}
	});
  var rand_int = getRandomInt(0,quotes.length-1);
  console.log(quotes[rand_int].heading.bold.green.underline);
  console.log(quotes[rand_int].content.bold.white);

}

fs.readFile(__dirname+'/tips','utf8',function(err,data){
		if(err){
			return console.log(err);
		}else{
			gotTips(data);

		}
});
