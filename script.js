function updateTime() {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let period = "";

    if (hour >= 12) {
        period = "PM";
    } else {
        period = "AM";
    }

    if (hour === 0) {
        hour = 12;
    } else if (hour > 12) {
        hour -= 12;
    }

    hour = update(hour);
    minute = update(minute);
    second = update(second);

    document.getElementById("digital-clock").innerText = `${hour}:${minute}:${second} ${period}`;

    // Set Timer to update every 1 second (1000 ms)
    setTimeout(updateTime, 1000);
}

function update(t) {
    if (t < 10) {
        return "0" + t;
    }
    return t;
}

// Initial call to start the clock
updateTime();
