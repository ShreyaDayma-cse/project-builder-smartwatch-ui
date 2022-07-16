var today= new Date();
var time=today.getHours()+":"+today.getMinutes();
document.getElementById('up').innerHTML=time;
document.getElementById('cntertime').innerHTML=time;
console.log(time);

var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var dayNames=days[new Date().getDay()];
document.getElementById('day').innerHTML=dayNames;
console.log(dayNames);