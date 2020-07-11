var msec = 0
var sec = 0
var min = 0

var min_head = document.getElementById("min")
var sec_head = document.getElementById("sec")
var msec_head = document.getElementById("msec")

var stopwatch_interval

function stopwatch() {
    msec++
    msec_head.innerHTML = msec

    if (msec === 100) {
        sec++
        sec_head.innerHTML = sec
        msec = 0

    }

    if (sec === 60) {
        min++
        min_head.innerHTML = min
        sec = 0
    }
}

function start() {
    stopwatch_interval = setInterval(stopwatch, 10)
    document.getElementById('start').disabled = true

}

function stop() {
    clearInterval(stopwatch_interval)
    document.getElementById('start').disabled = false
}

function reset() {
    msec = 0
    sec = 0
    min = 0
    msec_head.innerHTML = msec
    sec_head.innerHTML = sec
    min_head.innerHTML = min
    stop()
    document.getElementById('start').disabled = false
}

// function store() {
//     var s_msec = document.getElementById("msec").lastChild(s_msec)
//     var s_sec = document.getElementById("msec").lastChild(s_sec)
//     var s_min = document.getElementById("msec").lastChild(s_min)

//     var cln_msec = s_msec.cloneNode(true)




//     console.log(s_msec)
// }