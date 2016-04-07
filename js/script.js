$(document).ready(function() {


  var total = 0;
  var firstNumber = "";
  var secondNumber = "";
  var input = "";
  var operator = "";
  var screen = $("#screen");
  screen.text(0);

  var firstNumberLog = $("#first");
  var secondNumberLog = $("#second");
  var totalLog = $("#total");
  var opLog = $("#op");

  firstNumberLog.text("firstNumber: " + firstNumber);
  secondNumberLog.text("secondNumber: " + secondNumber);
  totalLog.text("Total: " + total);
  opLog.text("Total: " + operator);


  //Add your .click() here!
  $("#numbers a").not("#clear, #clearall").click(function() {


    input += $(this).text();



    if (input.length <= 9) {
      screen.text(input);
    } else {
      screen.text("Error");
      input = "";
    }

    firstNumberLog.text("firstNumber: " + firstNumber);
    secondNumberLog.text("secondNumber: " + secondNumber);
    totalLog.text("Total: " + total);
    opLog.text("Total: " + operator);

  });


  $(".operators").click(function() {
    firstNumber = input;
    input = "";

    operator = $(this).text();

    switch (operator) {
      case "+":
        total = (+secondNumber) + (+firstNumber);
        break;
      case "-":
        total = (+secondNumber) - (+firstNumber);
        break;
      case "*":
        total = (+secondNumber) * (+firstNumber);
        break;
      case "/":
        total = (+secondNumber) / (+firstNumber);
        break;
    }
    screen.text(total.toString());
    secondNumber = firstNumber;
    firstNumber = "";



    firstNumberLog.text("firstNumber: " + firstNumber);
    secondNumberLog.text("secondNumber: " + secondNumber);
    totalLog.text("Total: " + total);
    opLog.text("Total: " + operator);

  });

  $("#equals").click(function() {


    if (secondNumber !== "") {
      switch (operator) {
        case "+":
          total = (+secondNumber) + (+firstNumber);
          break;
        case "-":
          total = (+secondNumber) - (+firstNumber);
          break;
        case "*":
          total = (+secondNumber) * (+firstNumber);
          break;
        case "/":
          total = (+secondNumber) / (+firstNumber);
          break;
      }
    } else {
      switch (operator) {
        case "+":
          total = (+total) + (+firstNumber);
          break;
        case "-":
          total = (+total) - (+firstNumber);
          break;
        case "*":
          total = (+total) * (+firstNumber);
          break;
        case "/":
          total = (+total) / (+firstNumber);
          break;
      }
    }

    screen.text(total);
    firstNumber = "";

    firstNumberLog.text("firstNumber: " + firstNumber);
    secondNumberLog.text("secondNumber: " + secondNumber);
    totalLog.text("Total: " + total);
    opLog.text("Total: " + operator);

  });


  $("#clear").click(function() {

    firstNumber = "";

    if (secondNumber === "") {
      secondNumber = "";
      total = 0;
      screen.text("0");

    } else if (secondNumber !== "" && total !== 0) {
      secondNumber = "";
      total = 0;
      screen.text("0");
    } else {
      screen.text(total.toString());
    }


    firstNumberLog.text("firstNumber: " + firstNumber);
    secondNumberLog.text("secondNumber: " + secondNumber);
    totalLog.text("Total: " + total);
    opLog.text("Total: " + operator);

  });

  $("#clearall").click(function() {

    secondNumber = "";
    firstNumber = "";
    total = 0;
    operator = "";
    screen.text("0");

    firstNumberLog.text("firstNumber: " + firstNumber);
    secondNumberLog.text("secondNumber: " + secondNumber);
    totalLog.text("Total: " + total);
    opLog.text("Total: " + operator);

  });


});
