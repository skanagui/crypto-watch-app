fetch("https://bravenewcoin.p.rapidapi.com/asset?type=CRYPTO&status=ACTIVE", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "afc5e9bcfdmshea1cbc205c5a1b7p1e02ebjsnd042a705e062",
		"x-rapidapi-host": "bravenewcoin.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(cryptos => renderCryptos(cryptos))

const renderCryptos = (cryptos) =>{

    for( let crypto of cryptos)


}

