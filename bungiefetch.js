var apiKey = "2f0369fc936941f7a71542fa95f592af";

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.bungie.net/Platform/Destiny2/Clan/3910069/WeeklyRewardState/", true);
xhr.setRequestHeader("X-API-Key", apiKey);

xhr.onreadystatechange = function(){
 if(this.readyState === 4 && this.status === 200){
  var json = JSON.parse(this.responseText);
  console.log(json.Response.data); //Gjallarhorn
 }
}
xhr.open("GET","clanstatus.txt", true);
xhr.send();