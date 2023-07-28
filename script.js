function currenttime(){
    let date = new Date();
    let horas = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    horas = (horas < 10) ? "0" + horas: horas;
    minutes = (minutes < 10) ? "0" + minutes: minutes;
    seconds = (seconds < 10) ? "0" + seconds: seconds;

    let time = horas + ":" + minutes;
    let watch = document.querySelector("#watch")
    watch.innerHTML = time;

}
currenttime()

setInterval(currenttime, 1000);