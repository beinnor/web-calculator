
$(document).ready(function(){


    var total = 0;
    var firstNumber = "";
    var secondNumber = "";
    var operator = "";
    var screen = $("#screen");
    screen.text(0);


    //Add your .click() here!
    $("#numbers a").not("#clear, #clearall").click(function() {


        firstNumber += $(this).text();



        if (firstNumber.length <= 9) {
            screen.text(firstNumber);
        } else {
            screen.text("Error");
            firstNumber = "";
        }


    });


    $(".operators").click(function() {


        operator = $(this).text();

        secondNumber = firstNumber;
        firstNumber = "";

    });

    $("#equals").click(function() {



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
        firstNumber = total.toString();

    });


    $("#clear").click(function() {

        firstNumber = "";
        screen.text(total.toString());

    });

    $("#clearall").click(function() {

        secondNumber = "";
        firstNumber = "";
        total = 0;
        operator = "";
        screen.text("0");

    });


});
