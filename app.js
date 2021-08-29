const day = document.getElementById('day')
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')


// get the date we want to countdown to
let opening = new Date('Sept 9,2021 00:00:00').getTime()
console.log(opening)

let countDown = setInterval(function() {
    // get the now date
    let now = new Date().getTime();
    // get the distance between now and the countwodn
    let distance = opening - now


    // calculating days, hours, etc
    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60))
    let seconds = Math.floor(distance % (1000 * 60) / 1000)
    // console.log(seconds)

    // showing above variables in the html
    day.innerHTML = days
    hour.innerHTML = hours
    minute.innerHTML = minutes
    second.innerHTML = seconds

    // showing text when the time is up
    if(distance < 0) {
        clearInterval(x);
        console.log(`time up!`)
    }
},1000)