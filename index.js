var interview = [{"question": "Question 1","rating": 0, "comment": "No Comment"},
                {"question": "Question 2","rating": 0, "comment": "No Comment"},
                {"question": "Question 3","rating": 0, "comment": "No Comment"},
                {"question": "Question 4","rating": 0, "comment": "No Comment"},
                {"question": "Question 5","rating": 0, "comment": "No Comment"}
                ];

let q = 0;
document.getElementById("question").innerHTML = interview[q].question;
document.getElementById("prev").style.visibility = "hidden";

// shows the next question on clicking the 'next' button
showNextQuestion = function() {
    if(q < interview.length-2)
    {
        q++;
        document.getElementById("question").innerHTML = interview[q].question;
        document.getElementById("prev").style.visibility = "visible";
        
    }
    else if(q == interview.length-2)
    {
        q++;
        document.getElementById("question").innerHTML = interview[q].question;
        document.getElementById("save").innerHTML = "Save & Finish";
        document.getElementById("next").style.visibility = "hidden";
    }
   
 }

// shows the previous question on clicking the 'Prev' button
showPrevQuestion = function() {
    if(q == interview.length-1)
    {
        document.getElementById("next").style.visibility = "visible";
        document.getElementById("save").innerHTML = "Save";
        document.getElementById("next").innerHTML = "Next";
        q--;
        document.getElementById("question").innerHTML = interview[q].question;
    }
    else if(q > 0)
    {
        q--;
        document.getElementById("question").innerHTML = interview[q].question;
        if(q == 0)
            document.getElementById("prev").style.visibility = "hidden";
    }
   
    
}

//To store the rating in a temporary variable before saving it
var rating = 0;

addRating = (r) => {
    rating = r
}

// Saving the comment and rating into the interview object for the specific question
saveResponse = function(){
    if(q < interview.length-2)
    {
        interview[q].comment = document.getElementById("comment").value;
        document.getElementById("comment").value = "";

        document.getElementById("prev").style.visibility = "visible";
        
        interview[q].rating = rating;
        
        rating = 0;
        q++;
        document.getElementById("question").innerHTML = interview[q].question;
    }
    else if(q == interview.length-2)
    {
        interview[q].comment = document.getElementById("comment").value;
        document.getElementById("comment").value = "";
        interview[q].rating = rating;
        document.getElementById("next").style.visibility = "hidden";
        rating = 0;
        q++;
        document.getElementById("question").innerHTML = interview[q].question;
        document.getElementById("save").innerHTML = "Finish";
        
    }
    else if(q == interview.length-1)
    {

        // if(interview[q].rating == 0)
        // {
            interview[q].comment = document.getElementById("comment").value;
            interview[q].rating = rating;
            rating = 0;
        // }
        var interviewJSON = JSON.stringify(interview);
            localStorage.setItem('questions',interviewJSON);
            location.href = "result.html";
       
    }	
}