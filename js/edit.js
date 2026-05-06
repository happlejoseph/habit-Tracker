

let nameInput = document.getElementById('name');
let categoryInput = document.getElementById('category');
let targetInput = document.getElementById('target');
let updateBtn = document.getElementById('updateBtn');

let allData = JSON.parse(localStorage.getItem('data')) || [];

let params = new URLSearchParams(window.location.search);
let id = params.get('id');

let habit = allData.find(h => h.id == id);

if (habit) {
    nameInput.value = habit.name;
    categoryInput.value = habit.category;
    targetInput.value = habit.target;
}

updateBtn.addEventListener("click", () => {

    habit.name = nameInput.value;
    habit.category = categoryInput.value;
    habit.target = targetInput.value;

    localStorage.setItem("data", JSON.stringify(allData));

    window.location.href = "view.html";
});