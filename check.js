var url = "http://challenge.code2040.org/api/status";
var request = '{"token":"cn6dm0cSvX"}';

//Get dictionary
var xml = new XMLHttpRequest();
xml.open("POST", url, false);
xml.send(request);
var dictionary = xml.responseText;
var jdict = JSON.parse(dictionary);
console.log(jdict); //check my incoming json