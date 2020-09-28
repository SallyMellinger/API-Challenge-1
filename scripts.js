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

   let newCases = json.Global.NewConfirmed;
   let totalCases = json.Global.TotalConfirmed;
   let newDeaths = json.Global.NewDeaths;
   let totalDeaths = json.Global.TotalDeaths;
   let newRecover = json.Global.NewRecovered;
   let totalRecover = json.Global.TotalRecovered

   

    //Update Cards with API Data//

   document.getElementById('cardOne').innerText = newCases
   document.getElementById('cardTwo').innerText = totalCases
   document.getElementById('cardThree').innerText = newDeaths
   document.getElementById('cardFour').innerText = totalDeaths 
   document.getElementById('cardFive').innerText = newRecover
   document.getElementById('cardSix').innerText = totalRecover
}