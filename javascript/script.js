        // array for holding marks if the user answer is true

        const Marks = [];
        let question_marks = 2;

        // array that holding the series of html elemnt.

        const html_element = [document.getElementById('welcome'), 
                                document.getElementById('intro'), 
                                document.getElementById('beginner-level'),
                                document.getElementById('html'),
                                document.getElementById('page-2'),
                                document.getElementById('javascript')];

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
            
        });


        // this is array that holds html contents but with javascript questions from the divs
        const javascript_element = [document.getElementById('js-js'),
                                    document.getElementById('javascript'),
                                    document.getElementById('js-2')];

        // a variable that hold length of the html series within array

        let javascript_length = 0;

        // function that used the direction of array element

        function updatepage_js(index){
            javascript_element.forEach(element => element.style.display = 'none');//make element to be none in array
            javascript_element[index].style.display = 'block'; // make element visible for each one
        }


        // button or event that when user click it will call javascript contents

        document.getElementById('JS').addEventListener('click',function(){
            if (javascript_length < javascript_element.length -1) {
                javascript_length++;
                updatepage_js(javascript_length);

                // hide level 2 when user choosing questions from the languages within js because has already exist on first htmls cotents
                document.getElementById('prev-back').style.display = 'none';
                document.getElementById('beginner-level').style.display = 'none';
            }
        })

        // this event use to take user back to starting level of choosing topic or language question when is on javascript question

        document.getElementById('prev-js').addEventListener('click',function(){
            if (javascript_length > 0) {
                javascript_length--;
                updatepage_js(javascript_length);

                // display the level 2 when user want to change the topic question by showing the contents from html elements
                document.getElementById('beginner-level').style.display = 'block';
                document.getElementById('js-js').style.display = 'none';

                // show the main back button that can take user to the begining step of first step, it was hiden automaticaly
                document.getElementById('prev-back').style.display = 'block';
            }
        })

        // this event take user to the next question whis is js-2 question from the array of javascript question

        document.getElementById('next-js').addEventListener('click',function(){
            if (javascript_length < javascript_element.length -1) {
                javascript_length++;
                updatepage_js(javascript_length);

                // display the level 2 when user want to change the topic question by showing the contents from html elements

                document.getElementById('beginner-level').style.display = 'none';
                
            }
        })

        // this event take user back to previsous question of multiple choices of javascript which is js-1

        document.getElementById('prev-js-2').addEventListener('click',function(){
            if (javascript_length > 0) {
                javascript_length--;
                updatepage_js(javascript_length);

                // display the level 2 when user want to change the topic question by showing the contents from html elements

                document.getElementById('beginner-level').style.display = 'none';
                document.getElementById('js-js').style.display = 'none';
            }
        })

        // // javscript answer validation

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
        let text_icorrect = `<p class="alert alert-danger text-center">❌ Incorrect  Answer! </p>`;
            
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

            if (question4_js === 'let name="John";' || question4_js === 'const name="John";') {
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

            if (question6_js === 'alert("Hello World");' || question6_js === "alert('Hello World');") {
                js_marks.push(js_mark);
                Incorrect_6.innerHTML = text_correct;
                
            } else {
                Incorrect_6.innerHTML = text_icorrect;
            }

            let totalMarks = js_marks.reduce(function(va,vb){
                return va + vb;
            }) 
        
        })


        // CSS QUESTIONS STARTING DOWN HERE!

        const cssMarks = [];
        let   cssMark = 2;

        // html elemts inside the array

        const cssQuestion = [document.getElementById('cssHeader'), document.getElementById('css'), document.getElementById('css-2')];

        //number of all html element inside the array that will used to work on next and prev

        let cssLength = 0;

        // function for updating question or html elemnt into array when user call next and back

        const cssUpadteQuestions = (values) =>{
            cssQuestion.forEach(question => question.style.display = 'none');
            cssQuestion[values].style.display = 'block';
        }

        // EventListener that will call a div with css contents/question when user click.

        document.getElementById('CSS').addEventListener('click', function(){
            if (cssLength < cssQuestion.length -1) {
                cssLength++;
                cssUpadteQuestions(cssLength);
                document.getElementById('beginner-level').style.display = 'none';
                document.getElementById('prev-back').style.display = 'none';
            }
        })

        // EventListener that will use to call nexts questions, working on next button

        document.getElementById('css-next').addEventListener('click', function(){
            if (cssLength < cssQuestion.length -1) {
                cssLength++;
                cssUpadteQuestions(cssLength);
                document.getElementById('beginner-level').style.display = 'none';
                document.getElementById('prev-back').style.display = 'none';
            }
        })

        // EventListener that will use to call back questions, working on back button
        document.getElementById('css-back-2').addEventListener('click', function(){
            if (cssLength > 0) {
                cssLength--;
                cssUpadteQuestions(cssLength);
                document.getElementById('beginner-level').style.display = 'none';
                document.getElementById('prev-back').style.display = 'none';
            }
        })

        // EventListener that will use to call back main cotents for sellecting languages, working on back button
        document.getElementById('css-back').addEventListener('click', function(){
            if (cssLength > 0) {
                cssLength--;
                cssUpadteQuestions(cssLength);
                document.getElementById('beginner-level').style.display = 'block';
                document.getElementById('prev-back').style.display = 'block';
            }
        })

        // 

        document.getElementById('submit-css').addEventListener('click', function(){
            // 

            const cssQ1 = document.getElementById('CSSQ1').value;
            const cssQ2 = document.getElementById('CSSQ2').value;
            const cssQ3 = document.getElementById('CSSQ3').value;
            const cssQ4 = document.getElementById('CSSQ4').value;
            const cssQ5 = document.getElementById('CSSQ5').value;
            const cssQ6 = document.getElementById('CSSQ6').value;

            // 

            let IncorrectAnswer = '<p class="alert alert-danger text-center">Incorrect answer!</p>';
            let CorrectAnswer = `<p class="alert alert-success text-center">✔️ Correct ${cssMark} marks!</p>`;

            // 

            const cssq1_error_success = document.getElementById('cssq1');
            const cssq2_error_success = document.getElementById('cssq2');
            const cssq3_error_success = document.getElementById('cssq3');
            const cssq4_error_success = document.getElementById('cssq4');
            const cssq5_error_success = document.getElementById('cssq5');
            const cssq6_error_success = document.getElementById('cssq6');

            // 

            if (cssQ1 === 'Cascanding Style Sheet' || cssQ1 === "cascanding style sheet") {
                cssMarks.push(cssMark);
                cssq1_error_success.innerHTML = CorrectAnswer;
            } else {
                cssq1_error_success.innerHTML = IncorrectAnswer;
            }

            if (cssQ2 === '<link rel="stylesheet" href="">') {
                cssMarks.push(cssMark);
                cssq2_error_success.innerHTML = CorrectAnswer
            } else {
                cssq2_error_success.innerHTML = IncorrectAnswer;
            }

            if (cssQ3 === 'background-color: lightblue;') {
                cssMarks.push(cssMark);
                cssq3_error_success.innerHTML = CorrectAnswer
            } else {
                cssq3_error_success.innerHTML = IncorrectAnswer;
            }

            if (cssQ4 === '.box{};') {
                cssMarks.push(cssMark);
                cssq4_error_success.innerHTML = CorrectAnswer
            } else {
                cssq4_error_success.innerHTML = IncorrectAnswer;
            }

            if (cssQ5 === '#') {
                cssMarks.push(cssMark);
                cssq5_error_success.innerHTML = CorrectAnswer
            } else {
                cssq5_error_success.innerHTML = IncorrectAnswer;
            }

            if (cssQ6 === 'static') {
                cssMarks.push(cssMark);
                cssq6_error_success.innerHTML = CorrectAnswer
            } else {
                cssq6_error_success.innerHTML = IncorrectAnswer;
            }

            console.log(cssMarks);
            
            const TotalMarks = cssMarks.reduce(MarksCalculation);
            console.log(`Total marks earned is ${TotalMarks}`);
            
            let av = TotalMarks/Marks.length;
            console.log(`Your Average is ${av}`);
            
            


            function MarksCalculation(Value_A, Value_B){
                return Value_A + Value_B;
            }

            document.getElementById('link-results').style.display = 'block'

            this.disabled = true;
            
            
        })
