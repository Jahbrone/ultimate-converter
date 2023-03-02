const celciusInput = document.querySelector("#celcius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");

function roundNumber(number) {
  return Math.round(number * 100) / 100;
}

//------------TEMPERATURE--------------------

// Celcius to fahrenheit
celciusInput.addEventListener("input", function () {
  let cTemp = parseFloat(celciusInput.value);
  let fTemp = cTemp * (9 / 5) + 32;
  fahrenheitInput.value = roundNumber(fTemp);
});

// Fahrenheit to Celcius
fahrenheitInput.addEventListener("input", function () {
  let fTemp = parseFloat(fahrenheitInput.value);
  let cTemp = (fTemp - 32) * (5 / 9);
  celciusInput.value = roundNumber(cTemp);
});

//------------DISTANCE--------------------

const meterInput = document.querySelector("#meter > input");
const feetInput = document.querySelector("#feet > input");
const inchInput = document.querySelector("#inch > input");
const kilometerInput = document.querySelector("#kilometer > input");
const mileInput = document.querySelector("#mile > input");
const centimeterInput = document.querySelector("#centimeter > input");

// Kilometers
kilometerInput.addEventListener("input", function () {
  let kilometer = parseFloat(kilometerInput.value);
  let meter = kilometer / 0.001;
  let cm = kilometer / 0.00001;
  let mile = kilometer * 1.609344;
  let feet = kilometer * 3280.8398950131;
  let inch = kilometer * 39370.1;

  meterInput.value = roundNumber(meter);
  centimeterInput.value = roundNumber(cm);
  mileInput.value = roundNumber(mile);
  feetInput.value = roundNumber(feet);
  inchInput.value = roundNumber(inch);
});

// Meters
meterInput.addEventListener("input", function () {
  let meter = parseFloat(meterInput.value);
  let kilometer = meter * 0.001;
  let cm = meter * 100;
  let mile = meter / 1609.344;
  let feet = meter * 3.28084;
  let inch = meter * 39.37;

  kilometerInput.value = roundNumber(kilometer);
  centimeterInput.value = roundNumber(cm);
  mileInput.value = roundNumber(mile);
  feetInput.value = roundNumber(feet);
  inchInput.value = roundNumber(inch);
});

// Centimeters
centimeterInput.addEventListener("input", function () {
  let cm = parseFloat(centimeterInput.value);
  let kilometer = cm * 0.00001;
  let meter = cm * 0.01;
  let mile = cm / 160934.4;
  let feet = cm * 0.0328;
  let inch = cm / 2.54;

  kilometerInput.value = roundNumber(kilometer);
  meterInput.value = roundNumber(meter);
  mileInput.value = roundNumber(mile);
  feetInput.value = roundNumber(feet);
  inchInput.value = roundNumber(inch);
});

// Miles
mileInput.addEventListener("input", function () {
  let miles = parseFloat(mileInput.value);
  let kilometer = miles * 1.609344;
  let meter = miles * 1609.344;
  let cm = miles * 169034;
  let feet = miles * 5280;
  let inch = miles * 63360;

  kilometerInput.value = roundNumber(kilometer);
  meterInput.value = roundNumber(meter);
  centimeterInput.value = roundNumber(cm);
  feetInput.value = roundNumber(feet);
  inchInput.value = roundNumber(inch);
});

// Feet
feetInput.addEventListener("input", function () {
  let feet = parseFloat(feetInput.value);
  let kilometer = feet * 0.0003048;
  let meter = feet * 0.304;
  let cm = feet * 30.48;
  let miles = feet * 0.0001894;
  let inch = feet * 12;

  kilometerInput.value = roundNumber(kilometer);
  meterInput.value = roundNumber(meter);
  centimeterInput.value = roundNumber(cm);
  mileInput.value = roundNumber(miles);
  inchInput.value = roundNumber(inch);
});

// Inches
inchInput.addEventListener("input", function () {
  let inch = parseFloat(inchInput.value);
  let kilometer = inch / 393.7;
  let meter = inch / 39.37;
  let cm = inch * 2.54;
  let miles = inch / 63360;
  let feet = inch / 12;

  kilometerInput.value = roundNumber(kilometer);
  meterInput.value = roundNumber(meter);
  centimeterInput.value = roundNumber(cm);
  mileInput.value = roundNumber(miles);
  feetInput.value = roundNumber(feet);
});

//------------WEIGHT--------------------

const kilogramInput = document.querySelector("#kilogram > input");
const gramInput = document.querySelector("#gram > input");
const poundInput = document.querySelector("#pound > input");
const ounceInput = document.querySelector("#ounce > input");

// Kilogram
kilogramInput.addEventListener("input", function () {
  let kilogram = parseFloat(kilogramInput.value);
  let gram = kilogram * 1000;
  let pound = kilogram * 2.2;
  let ounce = kilogram * 35.274;

  gramInput.value = roundNumber(gram);
  poundInput.value = roundNumber(pound);
  ounceInput.value = roundNumber(ounce);
});

// Gram
gramInput.addEventListener("input", function () {
  let gram = parseFloat(gramInput.value);
  let kilogram = gram / 1000;
  let pound = gram * 2.2;
  let ounce = gram * 0.035274;

  kilogramInput.value = roundNumber(kilogram);
  poundInput.value = roundNumber(pound);
  ounceInput.value = roundNumber(ounce);
});

//Pound
poundInput.addEventListener("input", function () {
  let pound = parseFloat(poundInput.value);
  let kilogram = pound * 0.45359237;
  let gram = pound * 453.592;
  let ounce = pound * 16;

  kilogramInput.value = roundNumber(kilogram);
  gramInput.value = roundNumber(gram);
  ounceInput.value = roundNumber(ounce);
});

//Ounce
ounceInput.addEventListener("input", function () {
  let ounce = parseFloat(ounceInput.value);
  let kilogram = ounce * 0.028349523;
  let gram = ounce * 28.34952;
  let pound = ounce / 16;

  kilogramInput.value = roundNumber(kilogram);
  poundInput.value = roundNumber(pound);
  gramInput.value = roundNumber(gram);
});

//
//
//
//----------------Clear-Btn------
btn1.addEventListener("click", function () {
  celciusInput.value = "";
  fahrenheitInput.value = "";
});

btn2.addEventListener("click", function () {
  kilometerInput.value = "";
  meterInput.value = "";
  centimeterInput.value = "";
  mileInput.value = "";
  feetInput.value = "";
  inchInput.value = "";
});

btn3.addEventListener("click", function () {
  kilogramInput.value = "";
  gramInput.value = "";
  ounceInput.value = "";
  poundInput.value = "";
});
