// given a string of characters; write a program to find if the parenthesis are balanced(every open has a close parenthesis)
/* ()()()
(((())))
))))
())))
)( */

function balancedParens(string)
{
  return !string.split("").reduce(function(previous,balancedParen)
  {
    if (previous < 0) {return previous;}
    if (balancedParen === "("){ return ++previous;}
    if(balancedParen === ")"){ return --previous;}
    return previous;
  },0);
}
console.log(balancedParens("()()("));

// explanation

/* first string ga unna dhanni array ga marchukuntam because these are array helpers
first if case )( ila unna case kosam
( unte counter ki 1 add cheyali
) unte counter ki 1 minus cheyali
previous ane array ni return chestham eg., ("()((") unte previous array reduced value 2
ipudu ee value ni true or false lo marchadaniki line 10 lo ! use chesam because 0 ithey mathrame true chupisthadhi or else false

doubt: line 10 lo split pakana enduku reduce function raasam? 
clarification: 
function balancedParens(string){
        return string.split("");
}
balancedParens("()()(");   o/p: ["(",")","(",")","("]

normal ga arrayname.reduce ani rastham kadha. so ikada split anagane oka array vasthadhi daniki .reduce function rastham
