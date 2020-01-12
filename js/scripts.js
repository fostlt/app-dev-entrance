

const quizOne = document.querySelector('.quizOne');
const quizTwo = document.querySelector('.quizTwo');
const message = document.querySelector('.message');
const question = document.querySelector('.question');
const totalScore = document.querySelector('.score');
const next = document.querySelector('.next');
const url = "./src/quiz.json";
const game = {};
game.score = 0;
const pass = document.querySelector('.passed');
const fail = document.querySelector('.fail');
const menu = document.querySelector('.menu');
let nmbChange = 0;




quizTwo.addEventListener('click', loadQuestionsTwo);
function loadQuestionsTwo(){
  console.log("test");
  nmbChange++
  loadQuestions();
}



quizOne.addEventListener('click', loadQuestions);
function loadQuestions(){
  
  quizTwo.style.display = "none";
  quizOne.style.display = "none";
  fetch(url).then(function(res){
    return res.json()
  }).then(function(data){
    console.log(data);
    
    game.total = data.quizzes[nmbChange].questions.length;
    game.val = 0;
    game.arr = data.quizzes[nmbChange].questions;
    game.ans = data.quizzes[nmbChange].questions.answers;
    game.test = 0;
    let number = 0 + Math.floor(Math.random() * 3);
    //console.log(game.ans);

    



    //message.textContent = 'Question #'+(game.val+1)+ ' out of '+ (game.total)
    question.innerHTML = '';
    let q = game.arr[number].answers;
    console.log(q);
    const theQuestion = document.createElement('div');
    theQuestion.textContent = game.arr[number].question;
    message.appendChild(theQuestion);
    q.forEach(function(el){
      console.log(el);


      let span = document.createElement('span');
      span.textContent = el.content;
      message.appendChild(span);
      message.setAttribute('class', 'quizQ');
      span.answer = el.value;
      span.classList.add('answer');
      span.classList.add('btn');
      //console.log(span.answer);





      span.addEventListener('click', checker);
      function checker(e){
        const selAns = document.querySelectorAll('.answer');
        selAns.forEach(function(ele){
          ele.classList.remove('answer');
          ele.style.color = '#ddd';
          ele.removeEventListener('click', checker);
        })

        if (span.answer === true){
          console.log("nice");  
          span.style.color = 'green';
          next.textContent = 'Correct - Click for the next question';
          game.score++;
        
          
        }else{
          console.log("not nice");
          span.style.color = 'red';
          next.textContent = 'Incorrect - Click for the next question';
          
        }
        next.style.display = "block";
        next.addEventListener('click', newAnswer);
        function newAnswer(){
          //console.log("test");

          message.innerHTML = 'You have ' + game.score + ' out of ' + game.total + ' correct.';
          
          game.val++;
          next.style.display = "none";
          quizOne.style.display = "block";
          quizOne.textContent = "Next Question";
          
          //console.log(rndmNumber + 'tst');
          console.log(game);
          // if (game.val === 3){
          //   message.textContent = 'Your score was ' + game.score;
          // }
          if (game.val == game.total){
            message.innerHTML = "";
            quizOne.style.display = "none";
            message.textContent = 'Your final score was ' + game.score + ' out of ' + game.total;
            
            if (game.score < 2){
              
              fail.style.display = "block";
              menu.style.display = "block";
              menu.addEventListener('click', menubtn);
            }else{
              pass.style.display = "block";
              menu.style.display = "block";
              menu.addEventListener('click', menubtn);
            }

        }



        }
       

      }
      
    })
    
  })
  
}


function menubtn(){
  location.reload(true);
}























