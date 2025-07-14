// array for holding marks if the user answer is true

const Marks = [];
let question_marks = 2;

// array that holding the series of html elemnt.

const html_element = [document.getElementById('welcome'), 
                        document.getElementById('intro'), 
                        document.getElementById('beginner-level'),
                        document.getElementById('html'),
                        document.getElementById('page-2')];

// a variable that hold length of the html series within array

let html_length = 0;

// function that used the direction of array element

function updatepage(index){
    html_element.forEach(element => element.style.display = 'none');//make element to be none in array
    html_element[index].style.display = 'block'; // make element visible for each one
}

// function for control user click to call next element

document.getElementById('Next-1').addEventListener('click', function(){
    // if number of element within array is equal to 0 when user click next should go to anaother or call elements within array
    if (html_length < html_element.length -1) {
        html_length++;
        updatepage(html_length);
    }
    document.getElementById('prev-back').style.display = 'block';
    this.style.display = 'none';
})

// eventlistenner for control user click to call previous element that has already pass

document.getElementById('prev-back').addEventListener('click', function(){
    // if number of element within array is greater than 0 once user click back program will return previous elements
    if (html_length > 0) {
        html_length--; // minimize length or number of element into 0
        updatepage(html_length);
        // 
        if (html_length < 1) {
            this.style.display = 'none';
            document.getElementById('Next-1').style.display = 'block';
        }
        
    }
})

// This is a button or event listener function that when user click it will call the cotents within the array
// This button hold specific cotents only

document.getElementById('level-1').addEventListener('click', function(){
    // if number of element within array is greater than 0 once user click back program will return previous elements
    if (html_length < html_element.length -1) {
        html_length++;
        updatepage(html_length);
    }
})

// when user click HTML button, all questions of html will appear and user will continue throught the buttons inside

document.getElementById('HTML').addEventListener('click', function(){

    // if number of element within array is greater than 0 once user click back program will return previous elements

    if (html_length < html_element.length -1) {
        html_length++;
        updatepage(html_length);
        document.getElementById('prev-back').style.display = 'none';
    }
})

// this button help user to go to the next questions within a series of question in html container
document.getElementById('next-qn').addEventListener('click', function(){
    if (html_length < html_element.length -1) {
        html_length++;
        updatepage(html_length);
        
    }
})

// this button help user to go back to previous question of html cotents
document.getElementById('prev').addEventListener('click', function(){
    if (html_length > 0) {
        html_length--;
        updatepage(html_length);
        document.getElementById('prev-back').style.display = 'block';
    }
})

// this button help user to go back to previous question of html cotents
document.getElementById('prev-1').addEventListener('click', function(){
    if (html_length > 0) {
        html_length--;
        updatepage(html_length);
        document.getElementById('prev-back').style.display = 'none';
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
    let CorrectAnswer = `<p class="alert alert-success text-center">✔️ Correct ${question_marks} marks!</p>`;

    const Incorrect_1 = document.getElementById('Incorrect_1');
    const Incorrect_2 = document.getElementById('Incorrect_2');
    const Incorrect_3 = document.getElementById('Incorrect_3');
    const Incorrect_4 = document.getElementById('Incorrect_4');
    const Incorrect_5 = document.getElementById('Incorrect_5');
    const Incorrect_6 = document.getElementById('Incorrect_6');

    if (question1.value === 'B') {
        Marks.push(question_marks);
        Incorrect_1.innerHTML = CorrectAnswer;
    } else {
        Incorrect_1.innerHTML = IncorrectAnswer;
    }

    if (question2.value === "C") {
        Marks.push(question_marks);
        Incorrect_2.innerHTML = CorrectAnswer
    } else {
        Incorrect_2.innerHTML = IncorrectAnswer;
    }

    if (question3.value === "B") {
        Marks.push(question_marks);
        Incorrect_3.innerHTML = CorrectAnswer
    } else {
        Incorrect_3.innerHTML = IncorrectAnswer;
    }

    if (question4 === "<p></p>") {
        Marks.push(question_marks);
        Incorrect_4.innerHTML = CorrectAnswer
    } else {
        Incorrect_4.innerHTML = IncorrectAnswer;
    }

    if (question5 === "<img src=''>" || question5 === '<img src="">') {
        Marks.push(question_marks);
        Incorrect_5.innerHTML = CorrectAnswer
    } else {
        Incorrect_5.innerHTML = IncorrectAnswer;
    }

    if (question6 === "<a href=''></a>" || question6 === '<a href=""></a>') {
        Marks.push(question_marks);
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





















