//cardano=>USD
fetch("https://api.coingecko.com/api/v3/simple/price?ids=usd-coin&vs_currencies=usd")
    .then(response=> response.json()) 
    .then(data=> window.location="historico.php?btc=" + data.usd-coin.usd)
    
       