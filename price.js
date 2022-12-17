let floor = document.querySelector("#floor");
let type = document.querySelector("#room-type");
let days = document.querySelector("#days");
let discount = document.querySelector("#discount");
const check = document.querySelector("#check");

function price(text){
    let price_of = document.querySelector("#price");
    const message = document.createTextNode(text);
    price_of.appendChild(message);
}

function discounts(text){
    let discount_of = document.querySelector("#discounted");
    const message = document.createTextNode(text);
    discount_of.appendChild(message);
}

function total(text){
    let total_of = document.querySelector("#total");
    const message = document.createTextNode(text);
    total_of.appendChild(message);

}

check.addEventListener("click", () => {
    if(type.value == "Standard"){
       const standard = 5000;
       const convert = parseInt(days.value);
       const result = standard * convert;
       if(floor.value > 5 && discount.value == "Member"){
        let additional_rent = 1000 + result;
        let member = additional_rent / 10;
        price("The price is " + additional_rent);
        discounts("The total discount is 10%");
        total("The total payment is " + member);
       }else if(floor.value > 5 && discount.value == "Birthday Promo" ){
        let additional_rent = 1000 + result;
        let birthdayPromo = additional_rent - 500;
        price("The price is " + additional_rent);
        discounts("The total discount is " + 500);
        total("The total payment is " + birthdayPromo);
       }else if(floor.value > 5 && discount.value == "None"){
        let additional_rent = 1000 + result;
        price("The price is " + additional_rent);
        discounts("The discount is 0");
        total("The total payment is " + additional_rent);
       }else if(floor.value <= 5 && discount.value == "Member"){
        let additional_rent = 1000 + result;
        let member = additional_rent / 10;
        price("The price is " + additional_rent);
        discounts("The total discount is 10%");
        total("The total payment is " + member);
       }else if(floor.value <= 5 && discount.value == "Birthday Promo" ){
        let additional_rent = 1000 + result;
        let birthdayPromo = additional_rent - 500;
        price("The price is " + additional_rent);
        discounts("The total discount is " + 500);
        total("The total payment is " + birthdayPromo);
       }else if(floor.value <= 5 && discount.value == "None"){
        let additional_rent = 1000 + result;
        price("The price is " + additional_rent);
        discounts("The discount is 0");
        total("The total payment is " + additional_rent);
       }
    }else if(type.value == "Superior"){
        const superior = 6000;
        const convert = parseInt(days.value);
        const result = superior * convert;
       if(floor.value > 5 && discount.value == "Member"){
        let additional_rent = 1000 + result;
        let member = additional_rent / 10;
        price("The price is " + additional_rent);
        discounts("The total discount is 10%");
        total("The total payment is " + member);
       }else if(floor.value > 5 && discount.value == "Birthday Promo" ){
        let additional_rent = 1000 + result;
        let birthdayPromo = additional_rent - 500;
        price("The price is " + additional_rent);
        discounts("The total discount is " + 500);
        total("The total payment is " + birthdayPromo);
       }else if(floor.value > 5 && discount.value == "None"){
        let additional_rent = 1000 + result;
        price("The price is " + additional_rent);
        discounts("The discount is 0");
        total("The total payment is " + additional_rent);
       }else if(floor.value <= 5 && discount.value == "Member"){
        let additional_rent = 1000 + result;
        let member = additional_rent / 10;
        price("The price is " + additional_rent);
        discounts("The total discount is 10%");
        total("The total payment is " + member);
       }else if(floor.value <= 5 && discount.value == "Birthday Promo" ){
        let additional_rent = 1000 + result;
        let birthdayPromo = additional_rent - 500;
        price("The price is " + additional_rent);
        discounts("The total discount is " + 500);
        total("The total payment is " + birthdayPromo);
       }else if(floor.value <= 5 && discount.value == "None"){
        let additional_rent = 1000 + result;
        price("The price is " + additional_rent);
        discounts("The discount is 0");
        total("The total payment is " + additional_rent);
       }
    }else if(type.value == "Deluxe"){
        const deluxe = 7000;
        const convert = parseInt(days.value);
        const result = deluxe * convert;
       if(floor.value > 5 && discount.value == "Member"){
        let additional_rent = 1000 + result;
        let member = additional_rent / 10;
        price("The price is " + additional_rent);
        discounts("The total discount is 10%");
        total("The total payment is " + member);
       }else if(floor.value > 5 && discount.value == "Birthday Promo" ){
        let additional_rent = 1000 + result;
        let birthdayPromo = additional_rent - 500;
        price("The price is " + additional_rent);
        discounts("The total discount is " + 500);
        total("The total payment is " + birthdayPromo);
       }else if(floor.value > 5 && discount.value == "None"){
        let additional_rent = 1000 + result;
        price("The price is " + additional_rent);
        discounts("The discount is 0");
        total("The total payment is " + additional_rent);
       }else if(floor.value <= 5 && discount.value == "Member"){
        let additional_rent = 1000 + result;
        let member = additional_rent / 10;
        price("The price is " + additional_rent);
        discounts("The total discount is 10%");
        total("The total payment is " + member);
       }else if(floor.value <= 5 && discount.value == "Birthday Promo" ){
        let additional_rent = 1000 + result;
        let birthdayPromo = additional_rent - 500;
        price("The price is " + additional_rent);
        discounts("The total discount is " + 500);
        total("The total payment is " + birthdayPromo);
       }else if(floor.value <= 5 && discount.value == "None"){
        let additional_rent = 1000 + result;
        price("The price is " + additional_rent);
        discounts("The discount is 0");
        total("The total payment is " + additional_rent);
       }
    }
});

document.querySelector("#reset").addEventListener("click", () => {
   document.querySelector("#price").innerHTML =  "";
   document.querySelector("#discounted").innerHTML =  "";
   document.querySelector("#total").innerHTML =  "";
   floor.value = "";
   days.value = "";
});

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
})


