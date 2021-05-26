fetch("https://bravenewcoin.p.rapidapi.com/asset/f1ff77b6-3ab4-4719-9ded-2fc7e71cff1f", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "afc5e9bcfdmshea1cbc205c5a1b7p1e02ebjsnd042a705e062",
		"x-rapidapi-host": "bravenewcoin.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(cryptos => {example(cryptos)

//console.log("This is Cryptos", cryptos)

})


// const renderCryptos = (cryptos) =>{

//     for( let crypto of cryptos){

//         renderCrypto(crypto)

//         console.log("this is crypto", crypto)
//     }


// }



const example = (cryptos)=> {

for( crypto in cryptos){
    renderBTC(crypto)
}


}


const renderBTC = (crypto) => {
    
    const cryptoDiv = document.createElement("div")
    cryptoDiv.className = "crypto-div"

    //let objectKey = Object.keys(cryptos)
    let cryptoUl = document.createElement("ul")
    cryptoUl.className = "crypto-list"
    cryptoUl.innerHTML = `

    <li>${crypto.name}</li>
    
    `

    cryptoDiv.append(cryptoUl)


    console.log("crypto", crypto)
    console.log("CryptoUl", cryptoUl)

    

}
//renderBTC();




