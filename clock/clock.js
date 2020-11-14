function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = checkTime(today.getMinutes());
    var s = checkTime(today.getSeconds());
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if(i < 10) {
        i = "0" + i;                    // add zero in front of numbers < 10
    }
    return i;
}

function partyTime() {
    var wake = document.getElementById("wake").value;
    var lunch = document.getElementById('lunch').value;
    var nap = document.getElementById('nap').value;
    var s = new Date().getSeconds();
    if (wake == nap || wake == lunch || lunch == nap) {
        alert("Wrong input because time is collapse");
    } else if (s < 20) {
        document.getElementById('photo').src = "dance.jpg";
    } else if (s > 40) {
        document.getElementById('photo').src = "sleep.jpg";
    } else {
        document.getElementById('photo').src = "lunch.png";
    }
}