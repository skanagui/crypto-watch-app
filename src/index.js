fetch("https://bravenewcoin.p.rapidapi.com/asset?type=CRYPTO&status=ACTIVE", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "afc5e9bcfdmshea1cbc205c5a1b7p1e02ebjsnd042a705e062",
		"x-rapidapi-host": "bravenewcoin.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(cryptos => {example(cryptos.content)

//console.log("This is Cryptos  content", cryptos.content)

})


// const renderCryptos = (cryptos) =>{

//     for( let crypto of cryptos){

//         renderCrypto(crypto)

//         console.log("this is crypto", crypto)
//     }


// }



const example = (cryptos)=> {

    cryptos.forEach((crypto)=> 
    //console.log("34 crypto",crypto)
        renderBTC(crypto)
    )

// for( crypto of cryptos){
    
//     console.log("cryptos", cryptos )
//     //console.log("crypto", crypto)

// }


 };


const renderBTC = (crypto) => {
    
    //const cryptoDiv = document.createElement("div")
    //cryptoDiv.className = "crypto-div"

    //let objectKey = Object.keys(cryptos)
    let cryptoUl = document.querySelector("ul")
    
    console.log("crypto name", crypto.name)

    cryptoLi = document.createElement("li")
    
    cryptoLi.innerHTML = `

    ${crypto.name}

    `


    cryptoUl.append(cryptoLi)


   

    

}
//renderBTC();




