import fetch from 'node-fetch';
var addresses = ["2UUaAHG7tKGMDjM9tJBNyr44FhRYtHQEEvwy3HBY6Ree"]
var mints = []
import fs from 'fs'
async function doit(){
  for (var add in addresses){
   var address = addresses[add]
var response = await fetch("https://explorer-api.mainnet-beta.solana.com/", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/json",
    "sec-ch-ua": "\"Google Chrome\";v=\"93\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"93\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://explorer.solana.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"method\":\"getAccountInfo\",\"jsonrpc\":\"2.0\",\"params\":[\"" + address + "\",{\"encoding\":\"jsonParsed\",\"commitment\":\"confirmed\"}],\"id\":\"07d1d29a-fad7-4041-ae3d-ebde152613e5\"}",
  "method": "POST",
  "mode": "cors"
})
var ajson = await response.json()
console.log(ajson.result )

console.log(mints)
}
fs.writeFileSync('mints.json', JSON.stringify(mints))
}
doit()