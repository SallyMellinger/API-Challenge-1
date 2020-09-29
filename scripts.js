//Fetching Our API Data//

let url = 'https://api.covid19api.com/summary';
    fetch(url) 
        .then(results => {
            
            return results.json() 
        })
        .then(json => {
            
            displayData(json);
        });
  function displayData(json) {
    console.log('Display:', json);

   //API Data Into Variables//

   let newCases = json.Global.NewConfirmed.toLocaleString('en');
   let totalCases = json.Global.TotalConfirmed.toLocaleString('en');
   let newDeaths = json.Global.NewDeaths.toLocaleString('en');
   let totalDeaths = json.Global.TotalDeaths.toLocaleString('en');
   let newRecover = json.Global.NewRecovered.toLocaleString('en');
   let totalRecover = json.Global.TotalRecovered.toLocaleString('en');

   

    //Update Cards with API Data//

   document.getElementById('cardOne').innerText = newCases
   document.getElementById('cardTwo').innerText = totalCases
   document.getElementById('cardThree').innerText = newDeaths
   document.getElementById('cardFour').innerText = totalDeaths 
   document.getElementById('cardFive').innerText = newRecover
   document.getElementById('cardSix').innerText = totalRecover
}
