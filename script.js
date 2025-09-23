document.getElementById('alertButton').addEventListener('click', function() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
});


document.getElementById('closeModal').addEventListener('click', function() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

