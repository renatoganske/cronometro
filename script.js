var sec=0
var min=0
var hour=0
var interval

function start(){
    stopWatch()
    interval=setInterval(stopWatch,1000)
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById('stopWatch').innerText='00:00:00'
}

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function stopWatch(){
    sec++
    if (sec==60){
        min++  
        sec=0
        if(min==60){
            min=0
            hour++
        }
    }
    document.getElementById('stopWatch').innerText=twoDigits(hour)+':'+twoDigits(min)+':'+twoDigits(sec)
}