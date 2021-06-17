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
    cryptoLi.dataset.id = `${crypto.id}`
    
    cryptoLi.innerHTML = `
    ${crypto.name}

    <button data-id = ${crypto.id}> Additional Info</button>
    `







    
 
    cryptoUl.append(cryptoLi)
    cryptoNav.append(cryptoUl)

    //console.log("crypto: ", crypto)

    cryptoNav.addEventListener("click", (e)=>{

        // console.log("click", e.target)

        console.log("e.target", e.target)
        // if (e.target.matches("crypto-li")){
        if (e.target.textContent=== "Additional Info"){

            // if(e.target === (crypto.id)){
                // alert("clicked")
                let infoDiv = document.createElement("div")
                
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
           
            //Li.append(infoDiv)
    
            //cryptoLi.append(infoDiv)
            // cryptoUl.append(cryptoLi)
            
        }
    })

    /// info Div is rendering for all Li's in the UL 
    ///We need single out an ID or other attribute for a single clicked item 
    //



    

}

