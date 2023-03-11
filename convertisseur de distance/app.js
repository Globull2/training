let valueOneEl = document.getElementById("first-value");
let unitOneEl = document.getElementById("first-unit");
let valueTwoEl = document.getElementById("second-value");
let unitTwoEl = document.getElementById("second-unit");
let btnEl = document.getElementById("convert-btn");

const convertValue = () => {
  let value1 = valueOneEl.value;
  let unit1 = unitOneEl.value;
  let unit2 = unitTwoEl.value;

  let valueOneInLegalUnit;
  let convertValue;

  switch (unit1) {
    case "km":
      valueOneInLegalUnit = value1 * 1000;
      break;
    case "cm":
      valueOneInLegalUnit = value1 / 100;
      break;
    case "mm":
      valueOneInLegalUnit = value1 / 1000;
      break;
    default:
      valueOneInLegalUnit = value1;
  }

  switch (unit2) {
    case "km":
      convertValue = valueOneInLegalUnit / 1000;
      break;
    case "cm":
      convertValue = valueOneInLegalUnit * 100;
      break;
    case "mm":
      convertValue = valueOneInLegalUnit * 1000;
      break;
    default:
      convertValue = valueOneInLegalUnit;
  }
  valueTwoEl.value = convertValue;
};

btnEl.addEventListener("click", convertValue);
unitTwoEl.addEventListener("change", () => {
  valueTwoEl.value = "";
});
