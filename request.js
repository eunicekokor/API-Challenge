var request = '{"email":"eek2138@columbia.edu", "github": "https://github.com/eunicekokor/API-Challenge"}';
var url = "http://challenge.code2040.org/api/register";
var json = JSON.parse(request);

var xmlHttp = null;
xmlHttp = new XMLHttpRequest();
xmlHttp.open( "POST", url, false );
xmlHttp.send(request);
console.log(xmlHttp.responseText);

//access code: cn6dm0cSvX