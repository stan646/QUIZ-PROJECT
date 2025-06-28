// step one

const beginner_steps = [document.getElementById('beginner-level')];
const listIteration = beginner_steps[Symbol.iterator]()
const showContents = document.getElementById('display');

// step two

document.getElementById('level-1').addEventListener('click', function(){
    // sub step one
    document.getElementById('intro').style.display = 'none';

    const contentsValue = listIteration.next();
    if (!contentsValue.done) {
        beginner_steps.forEach(page=>page.style.display = 'none');
        contentsValue.value.style.display = 'block';
        showContents.innerHTML.contentsValue;
    }
})

// step three

const htmlContents = [document.getElementById('html'), document.getElementById('page-2')];
const htmlIteration = htmlContents[Symbol.iterator]();

document.getElementById('HTML').addEventListener('click', function(){
    document.getElementById('beginner-level').style.display = 'none';

    const contentsValue = htmlIteration.next();
    if (!contentsValue.done) {
        htmlContents.forEach(page=>page.style.display = 'none');
        contentsValue.value.style.display = 'block';
        showContents.innerHTML.contentsValue;
    }
})

document.getElementById('next-1').addEventListener('click', function(){
    const contentsValue = htmlIteration.next();
    if (!contentsValue.done) {
        htmlContents.forEach(page=>page.style.display = 'none');
        contentsValue.value.style.display = 'block';
        showContents.innerHTML.contentsValue;
    }

})

// step four js contents

const Jscontents = [document.getElementById('javascript'), document.getElementById('js-2')];
const JSiteration = Jscontents[Symbol.iterator]();

document.getElementById('JS').addEventListener('click', function(){
    document.getElementById('beginner-level').style.display = 'none';

      const contentsValue = JSiteration.next();
    if (!contentsValue.done) {
        Jscontents.forEach(page=>page.style.display = 'none');
        contentsValue.value.style.display = 'block';
        showContents.innerHTML.contentsValue;
    }
})


document.getElementById('next-2').addEventListener('click', function(){
      const contentsValue = JSiteration.next();
    if (!contentsValue.done) {
        Jscontents.forEach(page=>page.style.display = 'none');
        contentsValue.value.style.display = 'block';
        showContents.innerHTML.contentsValue;
    }

})