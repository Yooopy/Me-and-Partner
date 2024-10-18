let field = document.getElementsByClassName("field")[0];
var fieldValue = "";
field.value = fieldValue;
console.log(field.value);
addToField = (num) => {
  fieldValue = `${fieldValue}${num}`;
  //   console.log(fieldValue);
  field.value = fieldValue;
  autoScrollInput(field);
};
function autoScrollInput(input) {
  input.scrollLeft = input.scrollWidth;
}

ac = () => {
  fieldValue = "";
  field.value = fieldValue;
};

equal = () => {
  fieldValue = eval(fieldValue).toString();
  field.value = fieldValue;
};

deleteNum = () => {
  fieldValue = fieldValue.slice(0, -1);
  field.value = fieldValue;
};
