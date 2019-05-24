// from data.js
var ufoData = data;

// YOUR CODE HERE!
console.log(ufoData[0]);

console.count(ufoData.length);
//console.log("begining of homework js");
var submit = d3.select("#filter-btn");
//console.log("Test line 3");

// Complete the click handler for the form
submit.on("click", function() {
    //console.log("Test line 4");
    // Prevent the page from refreshing
    d3.event.preventDefault();
    //console.log("Test line 5");
    // Select the input element and get the raw HTML node
    //var inputElement = d3.select("#datetime");
    var inputDate = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");
    // Get the value property of the input element
    //var inputValue = inputElement.property("value");
    //console.log("after click  js");
    // Use the form input to filter the data by blood type
    console.log(inputDate);

    //var filterstring = "";
    //if (inputDate)  {   filterstring += " data1.datetime === " + inputDate }
    //if (inputCity)  {   filterstring += " && data1.city === " + inputCity }
    //if (inputState) {   filterstring += " && data1.state === " + inputState }
    //if (inputCountry){  filterstring += " && data1.country === " + inputCountry }
    //if (inputShape) {   filterstring += " && data1.shape === " + inputShape }
    
    //console.log ("filterstring     ..... : ")
    //console.log (filterstring)
   
    function filterufoData(data1){
        // console.log("inside filter function...7" );
        //console.log(data1);
        if (data1.datetime === inputDate && data1.city === inputCity && data1.state === inputState && data1.country === inputCountry && data1.shape === inputShape ) 
        //if (filterstring)
        {
            console.log("inside filter if condition is TRUEEEE ...8" );
            console.log(data1);
            return data1;
        }
        console.log("END OF filter function...9" );
        return null;
    }
    // filter the data based on Date 

    //console.log("before calling filter function...6" );
    var filteredData = ufoData.filter(filterufoData);
    console.log("after calling filter function...10" );

    console.log(filteredData.length);
    console.log(filteredData);

    //for loop to get each row of filter data 

    var table = d3.select("table");
    // Use D3 to select the table body
    var tbody = d3.select("tbody");  
    
    if (filteredData.length < 1) {
    var row = tbody.append("tr");
    row.text("No Records found for this condition ")
    } 
    else {
        for (i = 0 ; i< filteredData.length; i++){

                // Append one table row `tr` to the table body
                var row = tbody.append("tr");

                // Append one cell for each of the elements of filtered frow
                row.append("td").text(filteredData[i].datetime);
                row.append("td").text(filteredData[i].city);
                row.append("td").text(filteredData[i].state);
                row.append("td").text(filteredData[i].country);
                row.append("td").text(filteredData[i].shape);
                row.append("td").text(filteredData[i].durationMinutes);
                row.append("td").text(filteredData[i].comments);
            }
      }
});
