var time = 1000
var hr = 0
var min = 0
var sec = 0

var chron

function start(){
    chron = setInterval(function (){
        timer()
}, time)
}

function pause(){
    clearInterval(chron)
}

function stop(){
    clearInterval(chron)

    hr = 0
    min = 0
    sec = 0


    document.getElementById("display").innerHTML = "00:00:00"
}

function timer(){
    sec++;

    if(sec==60){
        sec = 0
        min++
    }

        if(min==60){
            min = 0
            hr++
        }

    var format = 
        (hr < 10 ? "0" + hr : hr) + ':' + 
        (min < 10 ? "0" + min : min) + ':' + 
        (sec < 10 ? "0" + sec : sec)

    document.getElementById("display").innerHTML = format

}