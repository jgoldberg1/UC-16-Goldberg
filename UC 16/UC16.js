/**
 * Uses AJAX to query an internet data source for zip codes
 * @param {string} zipId The element id that has the zip code
 */
function calculateRates(fromCurr, toCurr) {
    // First get the zip code from the HTML textbox
var fromCurr = document.getElementById(fromCurr).value;
  console.log(fromCurr);
var toCurr = document.getElementById(toCurr).value;
    console.log(toCurr);

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
                document.write("No exchange rates found");
            } else {
                console.log("We have a problem...server responded with code: " + this.status);
            }
        } else {
            // Waiting for a response...
        }
    };
    // Notice how the URL is appended with the zip codE

    
    var url = "http://api.fixer.io/latest?base=" + fromCurr;
    console.log(url);
    httpRequest.open("GET", url, true);
    httpRequest.send();
    
}


/**
 * Displays the zip code place given the JSON data
 * @param {string} data JSON data representing place for given zip code
 */
function displayResponseData(data) {

var data = JSON.stringify(data);
var startMinusSix = data.search(toCurr);
var startAt = startMinusSix + 6;
var endAt = startAt + 6
var exchangeRates = data.charAt(startAt-endAt);
//use charAt to get the rate. number starts 6 chars after the number that ata.search gives you so just to data.charAt()
  document.getElementById("rates").innerHTML = exchangeRates;
}