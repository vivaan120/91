var player_1_name = localStorage.getItem("player1_name");
var player_2_name = localStorage.getItem("player2_name");

var player_1_score = 0;
var player_2_score = 0;

document.getElementById("player1_name").innerHTML = player_1_name + " : ";
document.getElementById("player2_name").innerHTML = player_2_name + " : ";

document.getElementById("player1_score").innerHTML = player_1_score;
document.getElementById("player2_score").innerHTML = player_2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2_name;

function send() {

    var number1 = document.getElementById("word").value;
    var number2 = document.getElementById("word2").value;
    actual_question = parseInt(number1) * parseInt(number2);

    var question = "<h4>" + "Q. "+ number1 + " x " + number2 + "</h4>";
    var input = "<br> Answer : <input type='text' id='input_check_box'>";
    var check_button = "<br> <br> <button class='btn btn-info' onClick='check()'> Check </button>";

    var row = question + input + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    document.getElementById("word2").value = "";


}
