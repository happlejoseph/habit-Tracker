

let saveBtn = document.getElementById('saveBtn');
let titleInput = document.getElementById('name');
let categoryInput = document.getElementById('category');
let targetInput = document.getElementById('target');

let allData = JSON.parse(localStorage.getItem('data')) || [];

saveBtn.addEventListener('click', ()=> {

    let name = titleInput.value;
    let category = categoryInput.value;
    let target = targetInput.value;

    if (!name || !category || !target) {
        alert('Please fill all fields');
        return;
    }

    let newHabit = {
        id : Date.now(),
        name : name,
        category : category,
        target : target
    }

    allData.push(newHabit);
    localStorage.setItem('data', JSON.stringify(allData));

    titleInput.value = '';
    categoryInput.value = '';
    targetInput.value = '';

    alert('Habit added successfully!');

    window.location.href = 'index.html';

});