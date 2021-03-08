var apiKey = "2f0369fc936941f7a71542fa95f592af";
var rootPath = "https://www.bungie.net/Platform/";


//Xur Linkage
var membershipType = "Account";
var destinyMembershipId = "";
var characterId = "";
var vendorHash = "";

var xhr = new XMLHttpRequest();	

xhr.open("GET", rootPath + "Destiny2/" + membershipType + "/Profile/"+ destinyMembershipId + "/Character/" + characterId + "/Vendors/" + vendorHash + "/", true);
xhr.setRequestHeader("X-API-Key", apiKey);

xhr.onreadystatechange = function(){
	if(this.readyState === 4 && this.status === 200){
		var reply = JSON.parse(this.responseText);
		document.getElementById("Xur").innerHTML = reply.ErrorStatus;
		console.log(reply.ErrorStatus); //Gjallarhorn
	}
}
xhr.send();

//Vendors: 400
//When obtaining vendor information, this will return summary information about the Vendor or Vendors being returned.
//VendorCategories: 401
//When obtaining vendor information, this will return information about the categories of items provided by the Vendor.
//VendorSales: 402
//When obtaining vendor information, this will return the information about items being sold by the Vendor.