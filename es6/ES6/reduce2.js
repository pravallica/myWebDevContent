// using reduce wth string and objects
var primaryColors = [
    {color: "red"},
    {color: "blue"},
    {color: "yellow"},
];

primaryColors.reduce(function(previous,primaryColor){
    previous.push(primaryColor.color);
    return previous;
}, []);