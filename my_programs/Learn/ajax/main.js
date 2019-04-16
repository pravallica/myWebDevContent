var pageCounter = 1;
var animalContainer= document.querySelector('#animal-info');
var btn = document.querySelector('#btn');

// setting up an event listener, so that the JSON data is loaded only when the button is clicked
btn.addEventListener('click',function(){
    //AJAX code
    // 1.creating a object with the XMLHttpRequest
    var ourRequest = new XMLHttpRequest();

    // 2.opening a new connection. This method takes two arguments 1. 'GET' or 'POST' method 2. URL for the server
    //   GET for receive data and POST if we want send data to server
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json'); //pagecounter ni batti page ekadaki velalo URL change avthadhi

    //3.tell what should happen when the data is loaded. An anonymous function
    ourRequest.onload = function(){
    //below line is to check if data is displaying. responseText is the JSON data from our URL
    // console.log(ourRequest.responseText); (for testing purpose)

    // saving the JSON data we retrived in a variable
    // var ourData = ourRequest.responseText;(for testing purpose)
    /* console.log(ourData[0]);// (for testing purpose)only [ will be displayed because browser doesn't know that it is JSON data and 
        cannot diffentiate objects as it treats it as giant text string. So adding JSON.parse to it*/
    var ourData = JSON.parse(ourRequest.responseText);
    // console.log(ourData[0]); // now it displays the first object in the JSON file(for testing purpose)
    renderHTML(ourData); //sending the JSON data into html
    };

    // 4.sending the request
    ourRequest.send(); 
    pageCounter++; //okasari button click chesaka counter increment avvali
    if (pageCounter > 3)
    {
        btn.classList.add("hide-me"); //hide-me ane class css lo rayali, kani danni ikada nunchi add cheyali
    }
});

//To add html to the page to the div with id="animal-info"; now adding a variable animalContainer to point to the end of the div
function renderHTML(data){
    //first we want the string to empty as we will add code to it runtime
    var htmlString = "";
    //for loop for the JSON array of objects
    for(i=0;i < data.length; i++)
    {
        //htmlString should add content to the html file, so defining using tags; enni sarlu click chesthey anni sarlu same content repeat avthadhi, to avoid that see next steps
        htmlString = htmlString + "<h1>" + data[i].name + " is a " + data[i].species + /* ".</h1>" */ " that likes to eat ";
        for(ii = 0; ii < data[i].foods.likes.length; ii++)
            {
                // htmlString += data[i].foods.likes[ii]; //retrives data[i] lo unna foods lo unna likes lo unna values; we need to add spaces if there are more than one likes; so see below
                if (ii == 0){ //array lo idhey first item item ithey
                    htmlString += data[i].foods.likes[ii]; 
                } 
                else{ //1st kakunda edina ithe
                    htmlString += " and " + data[i].foods.likes[ii];
                }
            }
            htmlString += " and dislikes "; //dislikes adding
            for(ii = 0; ii < data[i].foods.dislikes.length; ii++)
            {
                // htmlString += data[i].foods.likes[ii]; //retrives data[i] lo unna foods lo unna likes lo unna values; we need to add spaces if there are more than one likes; so see below
                if (ii == 0){ //array lo idhey first item item ithey
                    htmlString += data[i].foods.dislikes[ii]; 
                } 
                else{ //1st kakunda edina ithe
                    htmlString += " and " + data[i].foods.dislikes[ii];
                }
            }
    }
    animalContainer.insertAdjacentHTML('beforeend',htmlString) // inserts adjacent html before the end of this element. Can also enter a string in place of htmlString
}

/* next steps
adding a new variable pageCounter and adding where required; check above
so 3 times page load ayyaka error chupithadhi becoz 4th counter ki page ledhu
*/

/* Error Handling

ourRequest.onload = function(){
    //This error if the connection was successful but the server did not respond
    if(ourRequest.status >= 200 && ourRequest.status < 400){
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData); 
    
    } else{
        console.log("Server cannot be connected");
    }
};
//This error if the connection was not established
ourRequest.onerror = function(){
    console.log("Connection Error");
};
    ourRequest.send(); 
*/

