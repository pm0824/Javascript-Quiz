function submitAns(){
    var total=5;
    var score=0;

    //get user input
    var q1=document.forms['quizForm']['q1'].value;
    var q2=document.forms['quizForm']['q2'].value;
    var q3=document.forms['quizForm']['q3'].value;
    var q4=document.forms['quizForm']['q4'].value;
    var q5=document.forms['quizForm']['q5'].value;
    
    //validation
    
    for(var i=1;i<=total;i++){
        
        if(eval('q'+i)==null || eval('q'+i)==''){
            alert('missed que '+i);
            return false;
        }
    }
    //set correct answers
    var ans=["d","c","a","b","d"];

    //check answers
    for(var i=0;i<total;i++){
        
        if(eval('q'+(i+1))==ans[i]){
            score++;
        }
    }
    //Display Results
    var result=document.getElementById('results');
    result.innerHTML="<h3>Your score is <span>"+score+"</span></h3>";
   
    return false;
}