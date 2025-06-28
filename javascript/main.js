// questions 
const points = [];
let Loose = 0;
const Results = document.getElementById('point');
const loose = {
    marks: Loose.length += Loose,
};

const questions = [document.getElementById('math'), document.getElementById('civics')];
const questionSeries = questions[Symbol.iterator]();
let point = 2;
// events

document.getElementById('Next').addEventListener('click', function(){
    const showQuestions = document.getElementById('show');
    const Questionvalues = questionSeries.next();

    if (!Questionvalues.done) {
        questions.forEach(page => page.style.display = 'none');
        Questionvalues.value.style.display = 'block';
        showQuestions.innerHTML=Questionvalues.value.id;
    } else {
        this.disabled = true;
    }
})

document.getElementById('submit').addEventListener('click', function(){

    const answer1 = document.querySelector('input[name="answer1"]:checked');
    const answer2 = document.querySelector('input[name="answer2"]:checked');
    const answer3 = document.querySelector('input[name="answer3"]:checked');
    const answer4 = document.querySelector('input[name="answer4"]:checked');
    const answer5 = document.querySelector('input[name="answer5"]:checked');
    let t = document.getElementById('wrong');
    let t1 = document.getElementById('wrong1');
    let t2 = document.getElementById('wrong2');
    let t3 = document.getElementById('wrong3');
    let t4 = document.getElementById('wrong4');
    // validate answers

  if (answer1.value === 'B') {
    points.push(point);
  } else {
    Loose++;
    loose.marks = Loose;
    loose.jibu = answer1.value;
    t.innerHTML = 'wrong answer is ' + loose.jibu;
    t.style.color = 'red';
  }

  if (answer2.value === 'B') {
    points.push(point);
  } else {
    Loose++;
    loose.marks = Loose;
    loose.jibu = answer2.value;
    t1.innerHTML = 'wrong answer is ' + loose.jibu;
    t1.style.color = 'red';
  }

  if (answer3.value === 'A') {
    points.push(point);
  } else {
    Loose++;
    loose.marks = Loose;
    loose.jibu = answer3.value;
    t2.innerHTML = 'wrong answer is ' + loose.jibu;
    t2.style.color = 'red';
  }

  if (answer4.value === 'B') {
    points.push(point);
  } else {
    Loose++;
    loose.marks = Loose;
    loose.jibu = answer4.value;
    t3.innerHTML = 'wrong answer is ' + loose.jibu;
    t3.style.color = 'red';
    
  }

  if (answer5.value === 'A') {
    points.push(point);
  } else {
    Loose++;
    loose.marks = Loose;
    loose.jibu = answer5.value;
    t4.innerHTML = 'wrong answer is ' + loose.jibu;
    t4.style.color = 'red';

    
  }

    const total = points.reduce(marks);
    Results.innerHTML = 'Marks ' + total + ' Umekosa ' + loose.marks ;
    // function for calculatingmarks

    function marks(valueA, valueB){
    return valueA + valueB;

    }


    

})

