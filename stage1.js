var url = "http://challenge.code2040.org/api/getstring";
var request1 = '{"token":"cn6dm0cSvX"}';

var xmlHttp = null;
xmlHttp = new XMLHttpRequest();
xmlHttp.open("POST", url, false);
xmlHttp.send(request1);
var test = xmlHttp.responseText;
var string = revString(test);
var request2 = '{"token": string}';

var xml2 = new XMLHttpRequest();
xml2.open("POST", url, false);
xml2.send(request2);
console.log(xml2.responseText);

function revString(input) {
  var reversed = "";
  for (var i = input.length - 1; i >= 0; i--)
    reversed += input[i];
  return reversed;
}


