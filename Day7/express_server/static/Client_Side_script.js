var d = new Date();
var h = d.getHours();
console.log(h);

if (h<12) {
    document.getElementById("Greeting").innerHTML = "Good Morning";
} else if (h<16) {
    document.getElementById("Greeting").innerHTML = "Good Afternon";
} else {
    document.getElementById("Greeting").innerHTML = "Good Evening";
}

