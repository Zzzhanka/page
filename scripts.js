document.getElementById('add-hobby-button').addEventListener('click', function() {
    let hobby = prompt('Введите новое увлечение:');
    if (hobby) {
        let li = document.createElement('li');
        li.textContent = hobby;
        document.getElementById('hobbies-list').appendChild(li);
    }
});
