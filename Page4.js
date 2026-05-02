var products = ["Chips", "Biscuits", "Candies", "Softdrink", "Juice"];
alert("Initial Array:\n\n" +products);
products.pop();
alert("After Pop function:\n\n" + products);
products.push("Chips");
alert("After Push function (Chips):\n\n" + products);
products.shift();
alert("After Shift function:\n\n" + products);
products.unshift("Chocolate");
alert("After Unshift function (Chocolate):\n\n" + products);
products.splice(2,0,"Peanut Bar", "Chips");
alert("After Splice function (Peanut Bar & Chips):\n\n" + products);
newProducts = products.slice(2,5)
alert("After Slice function (2,5):\n\n" + newProducts);

alert("Function indexOf (Chips):\n\n" + products.indexOf("Chips"));
alert("Function lastIndexOf (Chips):\n\n" + products.lastIndexOf("Chips"));