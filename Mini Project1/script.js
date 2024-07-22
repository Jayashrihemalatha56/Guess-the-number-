var checknumber=document.getElementById("checknumber")
var result=document.getElementById("result")
var randomNumber=Math.floor(Math.random()*10)+1
var score=document.getElementById("score")
var totalscore=10
function check()
{
    var enterednumber=checknumber.value
    if(randomNumber==enterednumber)
    {
        console.log("You are Right!")
        result.textContent="You are Right!"
        alert("YOU WON...")
    }
    else
    {
        totalscore=totalscore-1
        score.textContent="Score:"+totalscore
        console.log("You are Wrong!")
        result.textContent="You are Wrong!"
    }
}