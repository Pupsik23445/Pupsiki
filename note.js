document.addEventListener("DOMContentLoaded", function () {
    const notesList = document.querySelector(".notes-list");
    const addButton = document.querySelector(".add-note");
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    renderNotes();

    function renderNotes() {
        notesList.innerHTML = "";
        if (notes.length === 0) {
            notesList.innerHTML = "<p>У вас ще немає нотаток. Створіть першу!</p>";
            return;
        }

        notes.forEach((note, index) => {
            const noteItem = document.createElement("div");
            noteItem.className = `note-item ${getColorClass(note.subject)}`;
            noteItem.innerHTML = `
                <div class="note-text">
                    <strong>${note.subject}</strong><br>
                    ${note.task}<br>
                    <small>Термін: ${note.deadline}</small><br>
                    <small>Створено: ${note.createdAt}</small>
                </div>
                <div class="note-actions">
                    <button class="edit-note" data-index="${index}">✏️</button>
                    <button class="delete-note" data-index="${index}">🗑️</button>
                </div>
            `;
            notesList.appendChild(noteItem);
        });

        document.querySelectorAll(".delete-note").forEach(btn => {
            btn.addEventListener("click", function () {
                const index = this.dataset.index;
                notes.splice(index, 1);
                saveNotes();
                renderNotes();
            });
        });

        document.querySelectorAll(".edit-note").forEach(btn => {
            btn.addEventListener("click", function () {
                const index = this.dataset.index;
                const note = notes[index];
                const newSubject = prompt("Предмет:", note.subject);
                const newTask = prompt("Завдання:", note.task);
                const newDeadline = prompt("Термін (рік-місяць-день):", note.deadline);
                if (newSubject && newTask && newDeadline) {
                    notes[index] = {
                        subject: newSubject.trim(),
                        task: newTask.trim(),
                        deadline: newDeadline,
                        createdAt: note.createdAt
                    };
                    saveNotes();
                    renderNotes();
                }
            });
        });
    }

    function saveNotes() {
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    function getColorClass(subject) {
        const subjectColors = {
            "Математика": "math-color",
            "Українська мова": "ukr-color",
            "Англійська": "eng-color",
            "Історія": "history-color",
            "Інформатика": "info-color"
        };
        return subjectColors[subject] || "default-color";
    }

    addButton.addEventListener("click", function () {
        const subject = prompt("Предмет:");
        const task = prompt("Завдання:");
        const deadline = prompt("Термін виконання (рік-місяць-день):");
        if (subject && task && deadline) {
            const createdAt = new Date().toLocaleString("uk-UA");
            notes.push({
                subject: subject.trim(),
                task: task.trim(),
                deadline: deadline,
                createdAt: createdAt
            });
            saveNotes();
            renderNotes();
        }
    });
});