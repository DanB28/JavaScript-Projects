

function getColor(num,colors){
    // gets the color out of colors array.
    return colors[num];

} 

function randNumArray(numbers){
    // populates an array of size nine with a random number from 0-8 in each slot and 
    // returns that array. these are for what color each square is.
    for(i=0;i<9;i++){
        var num = Math.floor((Math.random() * 9));
        numbers[i]=num;
    }

return numbers;
}


function getQuestions(num1,numbers){
    // chooses a random number for 0-8 and checks to make sure that it is in the numbers array
    // this is "choosing" a color and checking to make sure it is in the pattern.
    //if not it chooses a new number until at least one matches and returns that number out.
    // this selects a random 'color' to pick in the game.
    
    var con =true;

    while(con!=false){
        con = false;
        var colorNum = Math.floor((Math.random() * 9));

        for(i=0;i<9;i++){
            if(colorNum == numbers[i]){
                num1 =colorNum;
                console.log("colorNum: "+ colorNum+" |numberarray "+numbers[i]);
                    return num1;
            }
            else
            {
                con = true;
            }
        }
    }
}

function getCorrectBoxes(correctBoxes, answer,numbers){
    //this checks the numbers box, aka all the different colors, if color of the question matches a color in the pattern
    //it writes true in a new array called correct boxes for where the color matches and returns that array out. 
    for(i=0;i<9;i++){
        if(numbers[i]==answer){
            correctBoxes[i]=true;
        }
        else{
            correctBoxes[i]= false;
        }
    }
    return correctBoxes;
}


function getCount(correctboxes){
    // counts the number of boxes that are of color of the answer.
    count =0;
    for(i=0;i<9;i++){
        if(correctboxes[i] == true){
            count++;
        }
    }
    return count;
}

function testcorrectboxes(cbox){
    console.log("1 "+cbox[0]);
    console.log("2 "+cbox[1]);
    console.log("3 "+cbox[2]);
    console.log("4 "+cbox[3]);
    console.log("5 "+cbox[4]);
    console.log("6 "+cbox[5]);
    console.log("7 "+cbox[6]);
    console.log("8 "+cbox[7]);
    console.log("9 "+cbox[8]);
}

function lifeCheck(lives,score){
    if(lives==0){
        $("#container").fadeOut();
        $("#fadeButton").fadeOut();
        $("#highscoreContainer").css("visibility","visible");
        $("#question").fadeOut();
        $("#status").text("Game over!! You got a HighScore of: "+score+" !!");
        

        $("#submitButton").click(function(){
            var vEmail = validateEmail($("#email").val());
            var semail = $("#email").val();

            if(vEmail==true){
                $("#emailLabel").text("Thank YOU");
                location.replace("celebration.html");
                return;
            }
            else{
                
                $("#emailLabel").text("Please enter a valid email");
            }
            
            });
            
    }
}



function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}

