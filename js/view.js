

let habitList = document.getElementById('habitList');

let allData = JSON.parse(localStorage.getItem('data')) || [];

function displayHabits() {
    habitList.innerHTML = '';

    allData.forEach(habit => {
        let div = document.createElement('div');
        div.classList = 'habit-item';

        div.innerHTML = `
            <h3>${habit.name}</h3>
            <p>Category: ${habit.category}</p>
            <p>Target: ${habit.target}</p>

            <button class="delete" onclick="deleteHabit(${habit.id})">Delete</button>
            <button class="edit" onclick="editHabit(${habit.id})">Edit</button>
            `;

            habitList.appendChild(div);
    });
}

function deleteHabit(id) {
    allData = allData.filter(habit => habit.id !== id);

    localStorage.setItem('data', JSON.stringify(allData));
    
    displayHabits();

}

function editHabit(id) {
    window.location.href = `edit.html?id=${id}`;
}

displayHabits();