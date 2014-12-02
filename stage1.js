var url = "http://challenge.code2040.org/api/getstring";
var url2 = "http://challenge.code2040.org/api/validatestring";
var request1 = '{"token":"cn6dm0cSvX"}';

var xmlHttp = null;
xmlHttp = new XMLHttpRequest();
xmlHttp.open("POST", url, false);
xmlHttp.send(request1); //submit token;

var test = xmlHttp.responseText;
var final = JSON.parse(test);
console.log(final);
console.log(final['result']); //actual string from the server
var string = revString(final['result']); //reversed


var request2 = '{"token":""}';
request2.token = string;
console.log(JSON.parse(request2));
console.log(request2);

var xml2 = new XMLHttpRequest();
xml2.open("POST", url2, false);
xml2.send(request2);
console.log(xml2.responseText);

function revString(input) {
  var reversed = "";
  for (var i = input.length - 1; i >= 0; i--)
    reversed += input[i];
  return reversed;
}


