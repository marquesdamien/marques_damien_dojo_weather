var cookieElement = document.querySelector("#cookies");
const array_highs = [75, 80, 69, 78]
const array_lows = [65, 66, 61, 70]
const array_highs2 = [24, 27, 21, 26]
const array_lows2 = [18, 19, 16, 21]
var high1Element = document.querySelector("#highs1")
var high2Element = document.querySelector("#highs2")
var high3Element = document.querySelector("#highs3")
var high4Element = document.querySelector("#highs4")
var low1Element = document.querySelector("#lows1")
var low2Element = document.querySelector("#lows2")
var low3Element = document.querySelector("#lows3")
var low4Element = document.querySelector("#lows4")
var tempElement = document.querySelector("#temp")

function cityalert(){
    alert("Loading Weather report...");
}

function remove(){
    cookieElement.remove(cookieElement);
}

function temp() {
    if(tempElement = "&deg;F"){
    high1Element.innerText = array_highs[0]
    low1Element.innerText = array_lows[0]
    high2Element.innerText = array_highs[1]
    low2Element.innerText = array_lows[1]
    high3Element.innerText = array_highs[2]
    low3Element.innerText = array_lows[2]
    high4Element.innerText = array_highs[3]
    low4Element.innerText = array_lows[3]
    }
}

function temp2() {
    if(tempElement = "&deg;C"){
        high1Element.innerText = array_highs2[0]
        low1Element.innerText = array_lows2[0]
        high2Element.innerText = array_highs2[1]
        low2Element.innerText = array_lows2[1]
        high3Element.innerText = array_highs2[2]
        low3Element.innerText = array_lows2[2]
        high4Element.innerText = array_highs2[3]
        low4Element.innerText = array_lows2[3]
        }
}