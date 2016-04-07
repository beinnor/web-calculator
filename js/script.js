$(document).ready(function() {



  var firstNumber = "";
  var secondNumber = "";
  var operator = "";
  var screen = $("#screen");
  screen.text(0);

  var firstNumberLog = $("#first");
  var secondNumberLog = $("#second");
  var total = 0;
  var totalLog = $("#total");
  var opLog = $("#op");

  debug();


  //Add your .click() here!
  $("#numbers a").not("#clear, #clearall").click(function() {


    firstNumber += $(this).text();



    if (firstNumber.length <= 9) {
      screen.text(firstNumber);
    } else {
      screen.text("Error");
      firstNumber = "";
    }

    debug();

  });


  $(".operators").click(function() {



    operator = $(this).text();

    if (secondNumber === "") {

      secondNumber = firstNumber;

    } else {

      switch (operator) {
        case "+":
          secondNumber = (+secondNumber) + (+firstNumber);
          break;
        case "-":
          secondNumber = (+secondNumber) - (+firstNumber);
          break;
        case "*":
          secondNumber = (+secondNumber) * (+firstNumber);
          break;
        case "/":
          secondNumber = (+secondNumber) / (+firstNumber);
          break;
      }
    }

    firstNumber = "";



    debug();

  });

  $("#equals").click(function() {



    switch (operator) {
      case "+":
        firstNumber = (+secondNumber) + (+firstNumber);
        break;
      case "-":
        firstNumber = (+secondNumber) - (+firstNumber);
        break;
      case "*":
        firstNumber = (+secondNumber) * (+firstNumber);
        break;
      case "/":
        firstNumber = (+secondNumber) / (+firstNumber);
        break;
    }

    total = firstNumber;

    screen.text(firstNumber);
    secondNumber = "";

    debug();

  });


  $("#clear").click(function() {

    if (secondNumber === "") {
      firstNumber = "";
      operator = "";
      screen.text("0");
    } else {
      firstNumber = "";
      screen.text("0");
    }






    debug();

  });

  $("#clearall").click(function() {

    secondNumber = "";
    firstNumber = "";
    operator = "";
    screen.text("0");

    debug();


  });

  function debug() {
    firstNumberLog.text("firstNumber: " + firstNumber);
    secondNumberLog.text("secondNumber: " + secondNumber);
    totalLog.text("total: " + total);
    opLog.text("Operator: " + operator);
  }


});
