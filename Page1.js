var product = prompt("Select Your Product:\n1: Chips (Rs.50)\n2: Biscuits (Rs.40)\n3: Candies (Rs.20)\n4: Softdrink (Rs.60)\n5: Juice (Rs.30)");
const quantity = prompt("Enter the Quantity");
var items = ["CHIPS", "BISCUITS", "CANDIES", "SOFTDRINK", "JUICE"];
var cost = [50, 40, 20, 60, 30];
var productIndex = items.indexOf(product.toUpperCase());

var totalCost = (cost[productIndex] * quantity);
var tax = (totalCost * 15 / 100);
var deliveryCharges = 0;
if ((totalCost + tax) >= 150) {
    deliveryCharges = 0;
} else {
    deliveryCharges = 50;
}

var netCost = totalCost + tax + deliveryCharges;

alert("Bill:\n" + items[productIndex] + " (Rs." + cost[productIndex] + ")\nQuantity:" + quantity + "\nGross Total:" + totalCost + "\nGST (15%):" + tax + "\nDelivery Charges:" + deliveryCharges + "\nNet Total:" + netCost);
