

const quizOne = document.querySelector('.quizOne');
const quizTwo = document.querySelector('.quizTwo');
const message = document.querySelector('.message');
const question = document.querySelector('.question');
const next = document.querySelector('.next');
const url = "./src/quiz.json";
const game = {};

quizOne.addEventListener('click', loadQuestions);
function loadQuestions(){
  quizOne.style.display = "none";
  fetch(url).then(function(res){
    return res.json()
  }).then(function(data){
    console.log(data);
    game.total = data.quizzes[0].questions.length;
    game.val = 0;
    game.score = 0;
    game.arr = data.quizzes[0].questions;
    game.ans = data.quizzes[0].questions.answers;
    game.test = 0;
    let number = 0 + Math.floor(Math.random() * 3);
    console.log(game.ans);

    console.log(typeof game.score);




    //message.textContent = 'Question #'+(game.val+1)+ ' out of '+ (game.total)
    question.innerHTML = '';
    let q = game.arr[number].answers;
    console.log(q);
    const main = document.createElement('div');
    const theQuestion = document.createElement('div');
    theQuestion.textContent = game.arr[number].question;
    message.appendChild(theQuestion);
    q.forEach(function(el){
      console.log(el);
      let span = document.createElement('span');
      span.textContent = el.content;
      message.appendChild(span);
      span.answer = el.value;
      span.classList.add('answer');
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
          next.textContent = 'Correct';
          game.score++;
         
          
        }else{
          console.log("not nice");
          span.style.color = 'red';
          next.textContent = 'Incorrect';
        }
        next.style.display = "block";
        next.addEventListener('click', newAnswer);
        function newAnswer(){
          console.log("test");
          //next.removeEventListener('click', newAnswer);
          message.innerHTML = "";
          game.val++;
          next.style.display = "none";
          quizOne.style.display = "block";
          quizOne.textContent = "Next Question";
          //console.log(rndmNumber + 'tst');
          console.log(game);
          // if (game.val === 3){
          //   message.textContent = 'Your score was ' + game.score;
          // }


          


        }
       

      }
      
    })
    
  })
  
}





        //console.log(game.val);

        // function newAnswer(){
        //   rndmNumber++
        //   message.innerHTML = '';
        //   loadQuestions();
        //   next.style.display = "none";
        //   //console.log(gameAdd + 'gamescore');
        // }

























