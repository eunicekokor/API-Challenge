//initial links & token
var url = "http://challenge.code2040.org/api/time";
var url2 = "http://challenge.code2040.org/api/validatetime";
var request = '{"token":"cn6dm0cSvX"}';

//Get dictionary
var xml = new XMLHttpRequest();
xml.open("POST", url, false);
xml.send(request);
var dictionary = xml.responseText;
var jdict = JSON.parse(dictionary);
console.log(jdict); //check my incoming json


//collect dictionary data
var interval = jdict.result.interval;
var date = jdict.result.datestamp;
console.log(date);

//Calculate & JSONify!
var datestamp = getNewTime(date, interval);
request = JSON.parse(request);
request['datestamp'] = datestamp;

//Post to final url
xml.open("POST", url2, false);
xml.send(JSON.stringify(request));
console.log(JSON.parse(xml.responseText)); //read output

//function that calculates the new time
//it's not as pretty as I would like
function getNewTime(date, interval){
var myDate = new Date(date);
var time = (myDate.getTime());
console.log("the time in miliseconds: " + time);
time = time/1000;
time += interval;
time = time*1000;

var dt = new Date(time); //uses seconds to create new date
var n = dt.toISOString(); //new date in ISO format
  console.log("the new date is now: " + n);
return n;
}