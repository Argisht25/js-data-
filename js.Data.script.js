let today = new Date()

let day = today.getDay()

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let hour = today.getHours()

let minute = today.getMinutes()

let second = today.getSeconds()
let prepand
if (hour >= 12) {
    prepand = "PM"
} else {
    prepand = "AM"
}

if (minute === 0 && second === 0) {
    hour = 12
    prepand = "Noon";
} else {
    hour = 12;
    prepand = "PM"
}
if (hour === 0 && prepand === 0) {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = "midnight"
    } else {
        hour = 12;
        prepand = "AM"
    }
}
