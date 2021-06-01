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

const renderCrypto = (crypto) => {
    
// console.log(crypto)
    let cryptoUl = document.querySelector("ul")
    
    
    cryptoLi = document.createElement("li")
    cryptoLi.className = 'crypto-li'
    
    
    cryptoLi.innerHTML = `
    
    ${crypto.name}
    
    `
    
    cryptoUl.append(cryptoLi)
    //console.log("cryptUl:", cryptoUl)

    cryptoLi.addEventListener("click", (e)=>{

        console.log("click", e.target)

        if (e.target.matches(".crypto-li")){
            // alert("clicked")
            let infoNav = document.createElement('nav')
            infoNav.className = "info-nav"
            infoNav.innerHTML = `
            
            <h3>Crypto Info</h3>
            <ul id = "crypto-info-list">
            <li>${crypto.symbol}</li>
            <li>${crypto.status}</li>
            <li>${crypto.type}</li>
            <li>${crypto.url}</li>
            <li>${crypto.id}</li>
            
            </ul>
          
            `

            //let infoLi = document.createElement('li')
            // infoLi.innerHTML = 
            // `${}
            // ${}
            // ${}
            // ${}
            // ${}
            // `
            console.log("line 67",infoNav)
           
            // let statusP = document.createElement('p')
            // let typeP = document.createElement('p')
            // let urlP = document.createElement('p')
            // let idP = document.createElement('p')

            
            cryptoUl.append(infoNav)



            
        }
        


    })

}





