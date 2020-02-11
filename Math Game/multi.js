function checkAnswer(enumbers,mednumbers,hardnumbers)
{
   
    var lives = document.getElementById("hiddenLives").value;
    var userAnswer = document.getElementById("useranswer").value;
    var correct = document.getElementById("answer").value;
    var score = document.getElementById("hscore").value;

        console.log("score "+ score);

        if(userAnswer == correct){
            console.log("correct");
            score++;
            document.getElementById("hscore").value = score;
            document.getElementById("score").innerHTML = "Score: "+ score;
            document.getElementById("useranswer").value ="";

            if(score <=5){
                console.log("easy");
            easy(enumbers);
            }
            if(score>5 && score <=10){
                console.log("medium");
                medium(mednumbers);
            }
            if(score >10){
                console.log("hard");
                Hard(hardnumbers);
            }
        }
        else{
            lives--;
            if(lives== 0)
            {
              addScore(score);
                window.location.replace("gameOver.html");
                
            }
            
            window.alert("Wrong answer");
            document.getElementById("hscore").value = score;
            document.getElementById("hiddenLives").value = lives;
            document.getElementById("lives").innerHTML = "Lives: "+lives;
            document.getElementById("score").innerHTML = "Score: "+ score;
            document.getElementById("useranswer").value ="";

            easy(enumbers);
        }
    }


    function easy(numbers)
    {
    var numArray = numbers;
    var ranNum1 = Math.floor(Math.random()*20);
    var ranNum2 = Math.floor(Math.random()*20);
    var num1 = numbers.number[ranNum1];
    var num2 = numbers.number[ranNum2];

    console.log("random number one:"+ranNum1);
    console.log("random number two:"+ranNum2);

    document.getElementById("question").innerHTML = "what is "+num1+ " x "+num2;

    var answer = num1 * num2;
    document.getElementById("answer").value = answer;

    console.log("answer: "+ answer);
    return answer;

    }


function medium(numbers)
{
    var numArray = numbers;
    var ranNum1 = Math.floor(Math.random()*20);
    var ranNum2 = Math.floor(Math.random()*20);
    var num1 = numbers.number[ranNum1];
    var num2 = numbers.number[ranNum2];

    console.log("random number one:"+ranNum1);
    console.log("random number two:"+ranNum2);


    document.getElementById("question").innerHTML = "what is "+num1+ " x "+num2;

    var answer = num1 * num2;
    document.getElementById("answer").value = answer;

    console.log("answer: "+ answer);
    return answer;


}

function Hard(numbers)
{
    var numArray = numbers;
    var ranNum1 = Math.floor(Math.random()*20);
    var ranNum2 = Math.floor(Math.random()*20);
    var num1 = numbers.number[ranNum1];
    var num2 = numbers.number[ranNum2];

    document.getElementById("question").innerHTML = "what is "+num1+ " x "+num2;

    var answer = num1 * num2;
    document.getElementById("answer").value = answer;

    console.log("answer: "+ answer);
    return answer;
}

function restart(){
   
    window.location.replace("Home.html");
}


function exit(){
  
}

function Start(){

    var Name = document.getElementById("userName").value;
    addusers(Name);
    window.location.replace("Add.html");

    

}

function addusers(user){
    let users = [{}];
    
    function addKeyValue(obj, key, data){
        obj[key] = data;
      }
       
      
      let newinfo = users.map(function(users) {
          
        return addKeyValue(users,"name",user);
      });

      localStorage.setItem('users',JSON.stringify(users));
      
      console.log(users);

}

function addScore(myscore){

    var scores = [{}];
   

function addKeyValue(obj, key, data){
    obj[key] = data;
  }
   
  let newinfo = scores.map(function(scores) {
    return addKeyValue(scores, "score", myscore);
  });
  
  localStorage.setItem('scores',JSON.stringify(scores));


}
