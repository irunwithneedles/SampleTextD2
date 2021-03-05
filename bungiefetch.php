<?php
 $apiKey = '2f0369fc936941f7a71542fa95f592af';

 $ch = curl_init();
 curl_setopt($ch, CURLOPT_URL, 'https://www.bungie.net/Platform//Destiny2/Clan/3910069/WeeklyRewardState/');
 curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
 curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-API-Key: ' . $apiKey));

 $json = json_decode(curl_exec($ch));
 echo $json; //Gjallarhorn\
 ?>