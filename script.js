const habitInput = document.getElementById('habitInput');
const habitList = document.getElementById('habitList');

// Load habits from local storage on startup
let habits = JSON.parse(localStorage.getItem('habits')) || [];

function renderHabits() {
    habitList.innerHTML = '';
    habits.forEach((habit, index) => {
        const li = document.createElement('li');
        li.className = `habit-item ${habit.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <span onclick="toggleHabit(${index})">${habit.text}</span>
            <button class="delete-btn" onclick="deleteHabit(${index})">Delete</button>
        `;
        habitList.appendChild(li);
    });
    localStorage.setItem('habits', JSON.stringify(habits));
}

function addHabit() {
    const text = habitInput.value.trim();
    if (text) {
        habits.push({ text, completed: false });
        habitInput.value = '';
        renderHabits();
    }
}

function toggleHabit(index) {
    habits[index].completed = !habits[index].completed;
    renderHabits();
}

function deleteHabit(index) {
    habits.splice(index, 1);
    renderHabits();
}

renderHabits();