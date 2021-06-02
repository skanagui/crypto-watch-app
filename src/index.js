fetch("https://bravenewcoin.p.rapidapi.com/asset?type=CRYPTO&status=ACTIVE", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "afc5e9bcfdmshea1cbc205c5a1b7p1e02ebjsnd042a705e062",
		"x-rapidapi-host": "bravenewcoin.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(cryptos => renderCryptos(cryptos.content))

const renderCryptos = (cryptos)=> {

    cryptos.forEach((crypto)=> 
        renderCrypto(crypto)
    )
};

let cryptoUl = document.querySelector("ul")
let cryptoNav = document.querySelector("nav")

const renderCrypto = (crypto) => {
    
    let cryptoLi = document.createElement("li")
    cryptoLi.className = 'crypto-li'
    
    cryptoLi.innerHTML = `
    ${crypto.name}
    `
    
    cryptoUl.append(cryptoLi)
    cryptoNav.append(cryptoUl)
    //console.log("cryptUl:", cryptoUl)

    cryptoNav.addEventListener("click", (e)=>{

        console.log("click", e.target)

        if (e.target.matches("li.crypto-li")){
            // alert("clicked")
            let infoDiv = document.querySelector('div')
            // console.log("line 43",infoDiv)
        
            infoDiv.innerHTML = `
            
            <h3>Crypto Info</h3>
            <ul id = "crypto-info-list">
                <li>${crypto.symbol}</li>
                <li>${crypto.status}</li>
                <li>${crypto.type}</li>
                <li>${crypto.url}</li>
                <li>${crypto.id}</li>
                
            </ul>
            `
            console.log("line 67",infoDiv)
    
            cryptoUl.append(infoDiv)
            
        }
   
    })

    

}

