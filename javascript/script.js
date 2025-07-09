// 
const Marks = [];
let marks = 2;




const SelectionContents = [document.getElementById('beginner-level'),document.getElementById('html')];
const Iteration = SelectionContents[Symbol.iterator]();
let ShowContents = document.getElementById('display');

document.getElementById('level-1').addEventListener('click', function(){

    document.getElementById('intro').style.display = 'none';
    let ElementsValue = Iteration.next();
    if (!ElementsValue.done) {
        SelectionContents.forEach(Question => Question.style.display = 'none');
        ElementsValue.value.style.display = 'block';
        ShowContents.innerHTML = ElementsValue.value.id = '';
    } else {
        
    }

})

document.getElementById('HTML').addEventListener('click', function(){
    let ElementValue = Iteration.next();

    if (!ElementValue.done) {
        SelectionContents.forEach(Question => Question.style.display = 'none');
        ElementValue.value.style.display = 'block';
        ShowContents.innerHTML = ElementValue.value.id = '';
    } else {
        
    }
})

// Questions

const QuestionContents = [document.getElementById('page-1'),document.getElementById('page-2')];
let CurrentQuestion = 0;


const QuestionSliding = (index) =>
{
    
    QuestionContents.forEach(question => question.style.display = 'none');
    QuestionContents[index].style.display = 'block';

}

QuestionSliding(CurrentQuestion)

document.getElementById('next-1').addEventListener('click', function(){
    if (CurrentQuestion < QuestionContents.length -1) {
        CurrentQuestion++;
        QuestionSliding(CurrentQuestion);
    } else {
        
    }
})

document.getElementById('prev-1').addEventListener('click', function(){
    if (CurrentQuestion > 0) {
        CurrentQuestion--;
        QuestionSliding(CurrentQuestion);
    } else {
        
    }
})



document.getElementById('submit').addEventListener('click',function(){

    const question1 = document.querySelector('input[name="Answer-1-html"]:checked');
    const question2 = document.querySelector('input[name="Answer-2-html"]:checked');
    const question3 = document.querySelector('input[name="Answer-3-html"]:checked');
    const question4 = document.getElementById('user-answer-4').value;
    const question5 = document.getElementById('user-answer-5').value;
    const question6 = document.getElementById('user-answer-6').value;

    let IncorrectAnswer = '<p class="alert alert-danger text-center">Incorrect answer!</p>';
    let CorrectAnswer = `<p class="alert alert-success text-center">✔️ Correct ${marks} marks!</p>`;

    const Incorrect_1 = document.getElementById('Incorrect_1');
    const Incorrect_2 = document.getElementById('Incorrect_2');
    const Incorrect_3 = document.getElementById('Incorrect_3');
    const Incorrect_4 = document.getElementById('Incorrect_4');
    const Incorrect_5 = document.getElementById('Incorrect_5');
    const Incorrect_6 = document.getElementById('Incorrect_6');

    if (question1.value === 'B') {
        Marks.push(marks);
        Incorrect_1.innerHTML = CorrectAnswer;
    } else {
        Incorrect_1.innerHTML = IncorrectAnswer;
    }

    if (question2.value === "C") {
        Marks.push(marks);
        Incorrect_2.innerHTML = CorrectAnswer
    } else {
        Incorrect_2.innerHTML = IncorrectAnswer;
    }

    if (question3.value === "B") {
        Marks.push(marks);
        Incorrect_3.innerHTML = CorrectAnswer
    } else {
        Incorrect_3.innerHTML = IncorrectAnswer;
    }

    if (question4 === "<p></p>") {
        Marks.push(marks);
        Incorrect_4.innerHTML = CorrectAnswer
    } else {
        Incorrect_4.innerHTML = IncorrectAnswer;
    }

    if (question5 === '<img src="">') {
        Marks.push(marks);
        Incorrect_5.innerHTML = CorrectAnswer
    } else {
        Incorrect_5.innerHTML = IncorrectAnswer;
    }

    if (question6 === '<a href=""></a>') {
        Marks.push(marks);
        Incorrect_6.innerHTML = CorrectAnswer
    } else {
        Incorrect_6.innerHTML = IncorrectAnswer;
    }

    console.log(Marks);
    
    const TotalMarks = Marks.reduce(MarksCalculation);
    console.log(`Total marks earned is ${TotalMarks}`);
    
    let av = TotalMarks/Marks.length;
    console.log(`Your Average is ${av}`);
    
    


    function MarksCalculation(Value_A, Value_B){
        return Value_A + Value_B;
    }

    document.getElementById('link-results').style.display = 'block'

    this.disabled = true;
    
})

// javascript

const Jscontents = [document.getElementById('javascript'),document.getElementById('js-2')];
const Jsiteration = Jscontents[Symbol.iterator]();

document.getElementById('JS').addEventListener('click',function(){
    document.querySelector('.beginner-level').style.display = 'none';
    let iterationValue = Jsiteration.next();
    if (!iterationValue.done) {
        Jscontents.forEach(page1 => page1.style.display = 'none');
        iterationValue.value.style.display = 'block';
        ShowContents.innerHTML = iterationValue.value.id = '';
    } else {
        
    }
})


const QuestionContents_js = [document.getElementById('js-1'),document.getElementById('js-2')];
let CurrentQuestion_js = 0;


const QuestionSliding_js = (index) =>
{
    
    QuestionContents_js.forEach(question => question.style.display = 'none');
    QuestionContents_js[index].style.display = 'block';

}

QuestionSliding_js(CurrentQuestion_js);

document.getElementById('next-js').addEventListener('click',function(){
    if (CurrentQuestion_js < QuestionContents_js.length -1) {
        CurrentQuestion_js++;
        QuestionSliding_js(CurrentQuestion_js);
    } else {
        
    }
})

document.getElementById('prev-js').addEventListener('click',function(){
    if (CurrentQuestion_js > 0) {
        CurrentQuestion_js--;
        QuestionSliding_js(CurrentQuestion_js);
    } else {
        
    }
})

document.getElementById('prev-js-2').addEventListener('click',function(){
    if (CurrentQuestion_js > 0) {
        CurrentQuestion_js--;
        QuestionSliding_js(CurrentQuestion_js);
    } else {
        
    }
})

// javscript answer validation

document.getElementById('submit-js').addEventListener('click', function(){

    const js_marks = [];
    let js_mark = 2;

    const question1_js = document.querySelector('input[name="q1"]:checked');
    const question2_js = document.querySelector('input[name="q2"]:checked');
    const question3_js = document.querySelector('input[name="q3"]:checked');
    const question4_js = document.getElementById('q4').value;
    const question5_js = document.getElementById('q5').value;
    const question6_js = document.getElementById('q6').value;

   let text_correct = `<p class="alert alert-success text-center">✔️ Correct ${js_mark} marks!</p>`;
   let text_icorrect = `<p class="alert alert-success text-center">❌ Incorrect  Answer! </p>`;
    
    const Incorrect_1 = document.getElementById('js-show-1');
    const Incorrect_2 = document.getElementById('js-show-2');
    const Incorrect_3 = document.getElementById('js-show-3');
    const Incorrect_4 = document.getElementById('js-show-4');
    const Incorrect_5 = document.getElementById('js-show-5');
    const Incorrect_6 = document.getElementById('js-show-6');



    if (question1_js.value === "c") {
        js_marks.push(js_mark);
        Incorrect_1.innerHTML = text_correct;
        
    } else {
        Incorrect_1.innerHTML = text_icorrect;
    }

    if (question2_js.value === "c") {
        js_marks.push(js_mark);
        Incorrect_2.innerHTML = text_correct;
        
    } else {
        Incorrect_2.innerHTML = text_icorrect;
    }

    if (question3_js.value === "c") {
        js_marks.push(js_mark);
        Incorrect_3.innerHTML = text_correct;
        
    } else {
        Incorrect_3.innerHTML = text_icorrect;
    }

    if (question4_js === 'let name = "John"' || question4_js === 'const name = "John"') {
        js_marks.push(js_mark);
        Incorrect_4.innerHTML = text_correct;
        
    } else {
        Incorrect_4.innerHTML = text_icorrect;
    }

    if (question5_js === "55") {
        js_marks.push(js_mark);
        Incorrect_5.innerHTML = text_correct;
        
    } else {
        Incorrect_5.innerHTML = text_icorrect;
    }

    if (question6_js === 'alert("Hello World");') {
        js_marks.push(js_mark);
        Incorrect_6.innerHTML = text_correct;
        
    } else {
        Incorrect_6.innerHTML = text_icorrect;
    }


    let totalMarks = js_marks.reduce(function(va,vb){
        return va + vb;
    })
    
    console.log(totalMarks);
    

    
})



