player_1_name = localStorage.getItem("player_1_name");
player_2_name = localStorage.getItem("player_2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player_1_name").innerHTML = player_1_name + ":";
document.getElementById("player_2_name").innerHTML = player_2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn- " + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer turn- " + player_2_name;

function send() {
number1= document.getElementById(" number1").value;
number2= document.getElementById(" number2").value;
actual_answer = parseInt(number1) * parseInt(number2);
console.log(actual_answer);

question_word= "<h4 id='number1'Q. "+number2+"</h4>"
input_box= "<br> Answer: <input type='text id='input_check_box'>";
check_button= "<br><br><button class='btn btn-info' onclock='check()'>Check</button>";
row= question_number+input_box+check_button;
document.getElementById("output").innerHTML= row;
document.getElementById("number1").value="";
document.getElementById("number2").value="";
}