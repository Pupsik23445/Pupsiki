document.addEventListener('DOMContentLoaded', function() {
    const currentWeekButton = document.querySelector('.week-selector button:first-child');
    const nextWeekButton = document.querySelector('.week-selector button:last-child');
    const timetableContainer = document.querySelector('.timetable');

    // Таблиці для кожного тижня
    const scheduleWeeks = [
        `<h2>Поточний тиждень</h2>
        <table class="schedule-table">
            <thead>
                <tr>
                    <th>День</th>
                    <th>Заняття 1</th>
                    <th>Заняття 2</th>
                    <th> Заняття 3</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Понеділок</td><td>Математика</td><td>Англійська</td><td>Біологія  </td></tr>
                <tr><td>Вівторок</td><td>Фізика</td><td>Історія</td><td>Математика </td></tr>
                <tr><td>Середа</td><td>Хімія</td><td>Географія</td><td>Біологія  </td></tr>
                <tr><td>Четвер</td><td>Біологія</td><td>Інформатика</td><td>Історія  </td></tr>
                <tr><td>Пʼятниця</td><td>Українська</td><td>Мистецтво</td><td>Математика  </td></tr>
            </tbody>
        </table>`,
        `<h2>Наступний тиждень</h2>
        <table class="schedule-table">
            <thead>
                <tr>
                    <th>День</th>
                    <th>Заняття 1</th>
                    <th>Заняття 2</th>
                    <th> Заняття 3</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Понеділок</td><td>Математика</td><td>Інформатика</td><td>Хімія</td></tr>
                <tr><td>Вівторок</td><td>Фізика</td><td>Мистецтво</td><td>Біологія</td></tr>
                <tr><td>Середа</td><td>Хімія</td><td>Англійська</td><td>Історія</td></tr>
                <tr><td>Четвер</td><td>Біологія</td><td>Географія</td><td>Хімія</td></tr>
                <tr><td>Пʼятниця</td><td>Історія</td><td>Українська</td><td>Математика</td></tr>
            </tbody>
        </table>`
    ];

    // Показати початковий розклад
    timetableContainer.innerHTML = scheduleWeeks[0];

    // Переключення
    currentWeekButton.addEventListener('click', function() {
        currentWeekButton.classList.add('active');
        nextWeekButton.classList.remove('active');
        timetableContainer.innerHTML = scheduleWeeks[0];
    });

    nextWeekButton.addEventListener('click', function() {
        nextWeekButton.classList.add('active');
        currentWeekButton.classList.remove('active');
        timetableContainer.innerHTML = scheduleWeeks[1];
    });
});