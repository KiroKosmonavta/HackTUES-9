let filters = document.getElementsByClassName("filters");

class Bodyguard {
    constructor(name, age, rating, price) {
        this.name = name;
        this.age = age;
        this.rating = Math.round(rating);
        this.price = price;
    }
}

let guard1 = new Bodyguard(Тошо_Горилата, 35, 5, 800);
let guard2 = new Bodyguard(Мартин_Иванов, 27, 4, 450);
let guard3 = new Bodyguard(Михаил_Прокубата, 43, 2, 50);
let guard4 = new Bodyguard(Бен_Тен, 50, 5, 1400);
let guard5 = new Bodyguard(Киро_Куката, 24, 4, 700);
let guard6 = new Bodyguard(Чавдар_Терзийски, 20, 4, 250);


document.getElementById("0-50").checked = function () {
    document.getElementById("priceFilters").innerHTML = "Цена: 0-50лв;";
    console.log("sdadsa");
}


