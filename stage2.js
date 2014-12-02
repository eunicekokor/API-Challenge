//initial links & token
var url = "http://challenge.code2040.org/api/haystack";
var url2 = "http://challenge.code2040.org/api/validateneedle";
var request = '{"token":"cn6dm0cSvX"}';

//Get dictionary
var xml = new XMLHttpRequest();
xml.open("POST", url, false);
xml.send(request);
var dictionary = xml.responseText;
var jdict = JSON.parse(dictionary);
console.log(jdict);

//KEY ASSUMPTION: needle always in haystack
//search for needle in haystack using dictionary
console.log("The needle is: " + jdict.result.needle);
console.log("The hackstack has a lot of things: " + jdict.result.haystack);
var needle = jdict.result.needle;
var haystack = jdict.result.haystack;

var position = getPosition(needle, haystack);
request = JSON.parse(request);
request['needle'] = position;
console.log(request); //check final json output

//post final request to new url
xml.open("POST", url2, false);
xml.send(JSON.stringify(request));
console.log(JSON.parse(xml.responseText));

//simple function to find needle in haystack array
function getPosition(need, hay){
  for (var i = 0; i <hay.length; i++) {
    if (need === hay[i])
      return i;
  }
}