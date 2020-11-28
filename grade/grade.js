function calculate() {
    var grade = [];

    grade.push(document.getElementById("dw").value);
    grade.push(document.getElementById("anim").value);
    grade.push(document.getElementById("mgt").value);
    grade.push(document.getElementById("sp").value);
    grade.push(document.getElementById("digi").value);
    grade.push(document.getElementById("data").value);
    grade.push(document.getElementById("econ").value);
    grade.push(document.getElementById("info").value);
    grade.push(document.getElementById("netcen").value);
    grade.push(document.getElementById("compres").value);

    var allgrade = 0;

    for (i = 0; i < 10; i++) {
        allgrade += (3*parseFloat(grade[i]));
    }
   
    allgrade /= 30;
    var name = document.getElementById("name").value
    document.getElementById("sh").innerHTML = name + "'s grade this semester is " + allgrade;
}