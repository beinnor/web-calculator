$(document).ready(function() {



  var firstNumber = "";
  var secondNumber = "";
  var operator = "";
  var screen = $("#screen");
  screen.text(0);

  var firstNumberLog = $("#first");
  var secondNumberLog = $("#second");
  var totalLog = $("#total");
  var opLog = $("#op");

  firstNumberLog.text("firstNumber: " + firstNumber);
  secondNumberLog.text("secondNumber: " + secondNumber);
  opLog.text("Operator: " + operator);


  //Add your .click() here!
  $("#numbers a").not("#clear, #clearall").click(function() {


    firstNumber += $(this).text();



    if (firstNumber.length <= 9) {
      screen.text(firstNumber);
    } else {
      screen.text("Error");
      firstNumber = "";
    }

    firstNumberLog.text("firstNumber: " + firstNumber);
    secondNumberLog.text("secondNumber: " + secondNumber);
    opLog.text("Operator: " + operator);

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



    firstNumberLog.text("firstNumber: " + firstNumber);
    secondNumberLog.text("secondNumber: " + secondNumber);
    opLog.text("Operator: " + operator);

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


    screen.text(firstNumber);
    secondNumber = "";

    firstNumberLog.text("firstNumber: " + firstNumber);
    secondNumberLog.text("secondNumber: " + secondNumber);
    opLog.text("Operator: " + operator);

  });


  $("#clear").click(function() {



    firstNumber = "";
    screen.text("0");




    firstNumberLog.text("firstNumber: " + firstNumber);
    secondNumberLog.text("secondNumber: " + secondNumber);
    opLog.text("Operator: " + operator);

  });

  $("#clearall").click(function() {

    secondNumber = "";
    firstNumber = "";
    operator = "";
    screen.text("0");

    firstNumberLog.text("firstNumber: " + firstNumber);
    secondNumberLog.text("secondNumber: " + secondNumber);
    opLog.text("Operator: " + operator);

  });


});
