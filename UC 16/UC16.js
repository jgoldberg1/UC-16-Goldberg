/**
 * Uses AJAX to query an internet data source for zip codes
 * @param {string} zipId The element id that has the zip code
 */
function calculateRates(fromCurr, toCurr) {
    // First get the zip code from the HTML textbox

    // Now make a HTTP request
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4) {
            // We got a response from the server!
            if(this.status === 200) {
                // The request was successful! 
                displayPlace(this.responseText);
            } else if (this.status === 404){
                // No postal code found
                document.write("No exchange rates found");
            } else {
                console.log("We have a problem...server responded with code: " + this.status);
            }
        } else {
            // Waiting for a response...
        }
    };
    // Notice how the URL is appended with the zip code
    console.log(fromCurr);
    console.log(toCurr);
    var url = "http://api.fixer.io/latest?base=" + fromCurr;
    httpRequest.open("GET", url, true);
    httpRequest.send();
}


// Now make a HTTP request
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4) {
            // We got a response from the server!
            if(this.status === 200) {
                // The request was successful! 
                displayResponseData(this.responseText);
            } else if (this.status === 404){
                // No postal code found
               document.write("Exchange rates not found");
            } else {
                console.log("We have a problem...server responded with code: " + this.status);
            }
        } else {
            // Waiting for a response...
        }
    };


/**
 * Displays the zip code place given the JSON data
 * @param {string} data JSON data representing place for given zip code
 */
function displayResponseData(data) {
  var exchangeRates = JSON.parse(data);
    console.log(exchangeRates);
  document.getElementById("rates").innerHTML = exchangeRates;
}