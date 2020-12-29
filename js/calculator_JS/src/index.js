const btnEql = document.querySelector("#btnEql"),
  output = document.querySelector("#output"),
  checkpoint = document.querySelector("#checkpoint"),
  btnBack = document.querySelector("#btnBack"),
  btnDot = document.querySelector("#btnDot"),
  btnC = document.querySelector("#btnC"),
  btnOper = document.querySelectorAll(".btn-oper"),
  btnNum = document.querySelectorAll(".btn-num"),
  btnZero = document.querySelectorAll(".btn-zero");

let num = 0, // output.value
  oper = "", // operator
  dot = "", // 소수점
  cut = "", // 끝을 잘라낼 문자열
  cut2 = ""; // cut변수에 담긴 문자열의 잘라내기 전 마지막 문자

// sign
const ADDITION = "+",
  SUBTRACTION = "-",
  MULTIPLICATION = "*",
  DIVISION = "/",
  REMAINDER = "%",
  DOT = ".",
  EQUALS = "=";

//Result function
const result = () => {
  const a = parseFloat(num);
  const b = parseFloat(output.value);

  switch (oper) {
    // Addition
    case ADDITION:
      output.value = a + b;
      break;
    // Subtraction
    case SUBTRACTION:
      output.value = a - b;
      break;
    //Multiplication
    case MULTIPLICATION:
      output.value = a * b;
      break;
    //Division
    case DIVISION:
      output.value = a / b;
      break;
    //Remainder
    case REMAINDER:
      output.value = a % b;
      break;
    default:
      console.log("It's working");
  }
  dot = "";
  oper = "";
  checkpoint.value = "";
};

// Click the equals button
btnEql.addEventListener("click", result);

// Click the back button
btnBack.addEventListener("click", () => {
  if (output.value === "") {
  } else {
    cut = output.value;
    cut2 = cut.substr(cut.length - 1);
    output.value = cut.slice(0, -1);

    if (cut2 === DOT) {
      dot = "";
    }
  }
});

// Click the dot button
btnDot.addEventListener("click", () => {
  if (oper === EQUALS) {
    output.value = "";
    oper = "";
  }
  if (dot === DOT) {
  } else if ((dot === "" && parseFloat(output.value) === 0) || output.value === "") {
    output.value = "0.";
  } else {
    output.value = output.value + DOT;
  }
  dot = DOT;
});

// Click the "C" button
btnC.addEventListener("click", () => {
  dot = "";
  oper = "";
  output.value = "";
  checkpoint.value = "";
});

// Operator button
Array.from(btnOper).forEach((sign) =>
  sign.addEventListener("click", () => {
    const ID = sign.id;

    if (output.value === "") {
      if (checkpoint.value === "") {
        output.value = "ADD NUM";
        checkpoint.value = "Push the 'C'";
      } else {
        oper = ID;
      }
    } else {
      if (parseFloat(num) === 0) {
        num = output.value;
        oper = ID;
        dot = "";
        output.value = "";
      } else {
        result();

        const checkPoint = output.value;
        checkpoint.value = checkPoint;

        num = output.value;
        oper = ID;
        dot = "";
        output.value = "";
      }
    }
    console.log(oper);
  })
);

// Number button
Array.from(btnNum).forEach((num) =>
  num.addEventListener("click", () => {
    const ID = num.id;

    if (oper === EQUALS) {
      output.value = "";
      oper = "";
    }
    if (output.value === "0") {
      output.value = ID;
    } else if (output.value === "0.") {
      output.value += ID;
    } else {
      output.value += ID;
    }
  })
);

Array.from(btnZero).forEach((num) =>
  num.addEventListener("click", () => {
    const ID = num.id;

    if (oper === EQUALS) {
      output.value = "";
      oper = "";
    }
    if (parseFloat(output.value) !== 0 && output.value !== "") {
      output.value += ID;
    } else {
      output.value = 0;
    }
  })
);
