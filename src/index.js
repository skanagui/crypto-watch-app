fetch("https://bravenewcoin.p.rapidapi.com/asset/f1ff77b6-3ab4-4719-9ded-2fc7e71cff1f", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "afc5e9bcfdmshea1cbc205c5a1b7p1e02ebjsnd042a705e062",
		"x-rapidapi-host": "bravenewcoin.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(cryptos => {renderBTC(cryptos)

console.log("This is Cryptos", cryptos)



})


// const renderCryptos = (cryptos) =>{

//     for( let crypto of cryptos){

//         renderCrypto(crypto)

//         console.log("this is crypto", crypto)
//     }


// }
const cryptoDiv = document.getElementsByClassName("Crypto-Div")

const renderBTC = (cryptos) => {

    let objectKey = Object.keys(cryptos)
    let cryptoUl = document.createElement("ul")
    cryptoUl.className = "crypto-list"
    cryptoUl.innerHTML = `

    <li>${cryptos.name}</li>
    
    `

    //cryptoDiv.append(cryptoUl)


    console.log("objectKey", objectKey)
    console.log("cryptoDiv", cryptoDiv)
    console.log("CryptoUl", cryptoUl)

    

}





