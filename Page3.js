var cities = ["Karachi", "Multan", "Hyderabad", "Peshawar", "Quetta", "Lahore", "Bahawalpur"];
var city = prompt("Guess a city of Pakistan:");
var counter = 0;

for (i = 0; i < cities.length; i++) {
    if (city.toUpperCase() === cities[i].toUpperCase()) {
        counter = 1;
        break;
    }
}

if (counter === 1) {
    alert("You Win!!!");
} else {
    alert("Try Again!!!");
}

