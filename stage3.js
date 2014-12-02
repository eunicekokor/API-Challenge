//initial links & token
var url = "http://challenge.code2040.org/api/prefix";
var url2 = "http://challenge.code2040.org/api/validateprefix";
var request = '{"token":"cn6dm0cSvX"}';

//Get dictionary
var xml = new XMLHttpRequest();
xml.open("POST", url, false);
xml.send(request);
var dictionary = xml.responseText;
var jdict = JSON.parse(dictionary);
console.log(jdict); //check my incoming json

//Get Prefix & array
var array = jdict.result.array;
var prefix = jdict.result.prefix;
console.log("The array has these strings: " + array);
console.log("The prefix is: " + prefix);
console.log("The list of words not w/ prefixes are: " + getStrings(array, prefix)); //checking output

//JSON fun
var newarray = getStrings(array, prefix);
request = JSON.parse(request);
request['array'] = newarray;
console.log(request); //check my final json output

//post the final to new url
xml.open("POST", url2, false);
xml.send(JSON.stringify(request));
console.log(JSON.parse(xml.responseText)); //read output


function getStrings(a, pre) {
  var myarray = [];
  for (var i = 0; i<a.length;i++){
    if(a[i].substring(0,3) !== pre){
      myarray[myarray.length] = a[i]; 
    }
  }
  return myarray;
}
