
//client.urls['api'] = client.urls['test']
var usd2 = 0
var IM = 0
var orders = []
var LEV = 0
var olength = 0
var amountss = 0
var LEV_LIM = parseFloat(process.env.limit)
var startTime = new Date().getTime()
var oldstartTime = new Date().getTime() - 1000 * 60 * 60 * 0 / 3
var btcstart
var usdstart
var aprs = []
var yields = []
var bonusmos = []
var btc4start
var usd4start
var usds = []
var bonus = []
var ttrades = []
var thedone = true

var levs = []
var usd4s = []
var prices = []
var btc4s = []
var btcs = []
var btc2 = 0
var apr;
var usdcad = 1.32790;
            import fetch from 'node-fetch';
var latest = 0
var fbalances = {}
var takents = []
var r = 0
var markets = []
var usd4 = 0
var btc4 = 0
var ids = []
var vol = 0
var line
var feecount = 0
var tradesArr = []
var first = true;
var m2;
var lines = []
var fee = 0
var btcusd;
var btcusdstart;
var positions = []
async function doit() {
var tosleep = 1
    try {

        //extime = await client.fetchTime()
        //console.log(extime)
        if (true) {
            
var addresses = ["F9Z3JWZhBmChENpmg96y7q6YBzu4eky9EYDByDzHPdbS"]
var mints = []
   var address = addresses[0]
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
console.log(ajson)
var btc3 = (ajson.result.value.lamports ) / 1000000000
        console.log(fbalances)

        usd2 = btc3
        ////////console.log(bal2.info.result[c].usdValue / btcusd)


        //btc3=     parseFloat(bal = bal2.info.result[ 'USDT' ] ['total'])

        //////////////////console.log(account)

        //btc3 = parseFloat(account2 [ 'info' ] ['totalMarginBalance'])
        ////////////////console.log(btc)

        ////////console.log(bal2['info'])
        IM = LEV / 2
        ////////console.log('lev')
        ////////console.log(LEV)	
        //////////////console.log(btc2)

        ////console.log('usd2 ' + usd2)
        if (usd2 != 0) {
            if (first) {
                btc4start = btc3
                usd4start = btc3
                btcstart = btc3
                first = false;
                usdstart = btc3
                ////////////console.log(btcstart)
            }

            //////console.log(usd2)
            //////console.log(usdcad)
            //////console.log(usd2 * 1)

            var d = new Date().getTime()
            
                usds.push([new Date().getTime(), usd2 * 1])
            if (false){
            var d2 = usds[0][0]
            //////console.log(d2)
            var diff = d - d2;

            var s = diff / 1000
            var m = s / 60
            var h = m / 60
            var d = h / 24
            var mo = d / 30
            //////console.log(d)
            var y = d / 365
            bonusmo = (bonus[bonus.length - 1][1] - bonus[0][1]) / mo
            bonusmodiff = bonusmo / (
                usd2)// - borrowed)
            bonusmos.push([new Date().getTime(), bonusmodiff])
            apr = (usds[usds.length - 1][1] - usds[0][1]) / y // (usds[usds.length-1][1] - 0.01348379) / y
            //////console.log('')

            //////console.log(apr)
                aprs.push([new Date().getTime(), apr / 365 ])

            if ((apr > 0 || apr <= 0)) {

                aprs.push([new Date().getTime(), apr / 365 ])
                yields.push([new Date().getTime(), (apr ) / (usd2 * 1) ])
            }
            else{
                aprs.push([new Date().getTime(), 0 ])
                yields.push([new Date().getTime(), 0])
            }
            }
            else if (bonusmos.length == 0){
                aprs.push([new Date().getTime(), 0 ])
                yields.push([new Date().getTime(), 0])
                bonusmos.push([new Date().getTime(), 0])
            }
            else {
                yields[0] = ([new Date().getTime(), 0])
                bonusmos[0]= ([new Date().getTime(), 0])
                bonusmos[0]=([new Date().getTime(), 0])
            }
            
            r++
            //if ( r > 2){
            r = 0

            /*
		} else{
			usds[usds.length-1][1] = usd2
aprs[aprs.length-1][1] = apr / 365
yields[yields.length-1][1] = (apr / 365) / (usd2 * 1)

		}
*/

            //aprs.push([new Date().getTime(), apr])
            //aprs.push( [new Date().getTime(), apr / 365])
            btcs.push([new Date().getTime(), -1 * (1 - (btc2 / btcstart)) * 100])
            usd4s.push([new Date().getTime(), -1 * (1 - (usd4 / usd4start)) * 100])

            btc4s.push([new Date().getTime(), -1 * (1 - (btc4 / btc4start)) * 100])

        }

        }
    } catch (err) {
                          
                        
                //console.log(err)
                     //   changeProxy()
                    console.log(err)
                    tosleep = 10
    }
    //////////////////console.log(btc)

    setTimeout(function() {
      //  changeProxy()
        doit()
    }, 5000)// * tosleep)
}
doit()
var theurl = process.env.theurl


import express from 'express'

import cors from 'cors'

import bodyParser from 'body-parser'
var app = express();
app.use(cors());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));
app.set('view engine', 'ejs');
app.listen(process.env.PORT || 8080, function() {});


app.get('/update', cors(), (req, res) => {

    line = lines[lines.length - 1]
    res.json({
        bonus: bonus[bonus.length - 1],
        usds: usds[usds.length - 1],
        aprs: aprs[aprs.length - 1],
        bonusmos: [],
        yields: yields[yields.length - 1],
        line: line,
        borrowed: [],
        fbalances: fbalances
    })
    ////console.log(usd2)

})

app.get('/', (req, res) => {
    res.render('indexFunding.ejs', {
        usds: usds,
        bonus: bonus,
        borrowed: [],
        aprs: aprs,
        lines: lines,
        yields: yields,
        theurl: theurl,
        bonusmos: bonusmos
    })

});