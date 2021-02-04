function myfunction() {
    var x = 1000;   // min value
    var y = 1689;   // max value
    
    var deg = Math.floor(Math.random() * (x-y)) + y;
    var color, range;
    if(deg < 1690 && deg > 1331) range = deg - 360;
    else range = deg;

    if(range < 1016) color = 'red';
    else if((range > 1105 && range < 1151) || (range > 1195 && range < 1241)) color = 'green'
    else color = 'blue'

    console.log(deg, color);
    document.getElementById("box").style.transform = "rotate("+deg+"deg)";

    /* var element = documet.getElementById('mainbox');
    // element.classList.remove('animate');
    setTimeout(function() {
        element.classList.add('animate');
    }, 5000);
    */

    document.getElementById('result').innerHTML = color;
    
}