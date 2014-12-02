//initial urls & json strings
var url = "http://challenge.code2040.org/api/getstring";
var url2 = "http://challenge.code2040.org/api/validatestring";
var request1 = '{"token":"cn6dm0cSvX", "string" : ""}';

//access to server by putting in my token
var xmlHttp = null;
xmlHttp = new XMLHttpRequest();
xmlHttp.open("POST", url, false);
xmlHttp.send(request1); //submit token;

//get data respose from server & reverse string
var test = xmlHttp.responseText;
var final = JSON.parse(test);
console.log(final);
console.log(final['result']); //actual string from the server
var string = revString(final['result']); //reversed string from server

//JSON manipulation (took the longest time to understand differences!)
request1 = JSON.parse(request1); //JSON string to JSON object
request1['string'] = string; //changed JSON key value
console.log(request1); //checking JSON Object contents

//POST JSON String to server
var xml2 = new XMLHttpRequest();
xml2.open("POST", url2, false);
xml2.send(JSON.stringify(request1));
console.log(JSON.parse(xml2.responseText));

function revString(input) {
  var reversed = "";
  for (var i = input.length - 1; i >= 0; i--)
    reversed += input[i];
  return reversed;
}