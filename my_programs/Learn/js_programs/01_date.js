// Write a JavaScript program to display the current day and time in the following format. 
// Sample Output : Today is : Tuesday. 
// Current time is : 10 PM : 30 : 38

var today = new Date();
var daylist = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day = today.getDay();
console.log('Today is :' + daylist[day] + '.');
var hour = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();
var prephand= ((hour < 12) ? 'AM' : 'PM');
hour =((hour >= 12)? hour-12 : hour);

if(hour === 0 && prephand === "PM")
    {
        if(min === 0 && sec === 0)
        {
            hour = 12;
            prephand = "Noon";
        }
        else
        {
            hour = 12;
            prephand= "PM"
        }
    }
if(hour === 0 && prephand === "AM")
{
    if(min === 0 && sec === 0)
    {
        hour = 12;
        prephand = "Midnight";
    }
    else
    {
        hour = 12;
        prephand= "AM";
    }
}
console.log("Current Time is: "+hour + " "+ prephand+ " : "+min+ " : "+sec);




