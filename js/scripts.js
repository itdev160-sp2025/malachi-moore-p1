var user = "Malachi";
var salutation = "Hello, ";
var greeting = salutation + user + "! Here are the latest car reviews";
var greetingEl = document.getElementById("greeting");
var eduPrice = '<span class="priceOld">$78,000.00</span> 68,400.00';
var empPrice = '<span class="priceOld">$57,000.00</span> 45,000.00';
var studentSPrice = '<span class="priceOld">$64,600.00</span> 54,00.00';


greetingEl.textContent = greeting;

//Product Price
var price = 76000, 
    studentDiscount = .15,
    employeeDiscount = .25,
    studentPrice = price - (price * studentDiscount),
    employeePrice = price - (price *employeeDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price'),
    employeePriceEl = document.getElementById('employee-price');

priceEl.textContent = price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
studentPriceEl.textContent = studentPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
employeePriceEl.innerHTML = employeePrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

//Check if edu checkbox is toggled
document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('eduToggle');
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
      // Apply student discount
      priceEl.innerHTML = eduPrice;
      employeePriceEl.innerHTML = empPrice;
      studentPriceEl.innerHTML = studentSPrice;
      } else {
        //set price elements to regular price
        priceEl.textContent = price;
        priceEl.textContent = price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        employeePriceEl.innerHTML = employeePrice;
        employeePriceEl.innerHTML = employeePrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        studentPriceEl.innerHTML = studentPrice;
        studentPriceEl.innerHTML = employeePrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

      }
    });
  });

