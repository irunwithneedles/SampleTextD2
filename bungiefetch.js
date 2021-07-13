var apiKey = "2f0369fc936941f7a71542fa95f592af";
var rootPath = "https://www.bungie.net/Platform/";


//Clan Engrams Linkage
var groupId = "3910069";

var xhr = new XMLHttpRequest();	

xhr.open("GET", rootPath + "Destiny2/Clan/" + groupId + "/WeeklyRewardState/", true);
xhr.setRequestHeader("X-API-Key", apiKey);

xhr.onreadystatechange = function(){
	if(this.readyState === 4 && this.status === 200){
		var reply = JSON.parse(this.responseText);
		document.getElementById("CEngram").innerHTML = reply.Response.rewards;
		console.log(reply.Response.rewards); //Gjallarhorn
	}
	else(document.getElementById("CEngram").innerHTML = "Looks like someone caused a wipe...")
}
xhr.send();


//admin list
var xhr = new XMLHttpRequest();	

xhr.open("GET", rootPath + "GroupV2/" + groupId + "/AdminsAndFounder/", true);
xhr.setRequestHeader("X-API-Key", apiKey);

xhr.onreadystatechange = function(){
	if(this.readyState === 4 && this.status === 200){
		var reply = JSON.parse(this.responseText);
		//var replyarr = reply.response.results;
		//document.getElementById("admins").innerHTML = replyarr[0];
		console.log(reply.Response.results.destinyUserInfo.displayName); //Gjallarhorn
	}
	//else(document.getElementById("admins").innerHTML = "Admins could not be loaded...")
}
xhr.send();

//Vendors: 400
//When obtaining vendor information, this will return summary information about the Vendor or Vendors being returned.
//VendorCategories: 401
//When obtaining vendor information, this will return information about the categories of items provided by the Vendor.
//VendorSales: 402
//When obtaining vendor information, this will return the information about items being sold by the Vendor.