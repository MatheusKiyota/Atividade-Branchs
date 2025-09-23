// 1. Exibir uma janela Modal
document.getElementById('alertButton').addEventListener('click', function() {
    // Exibe a modal
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
});

// Fecha a modal quando o usuário clicar no 'X'
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


document.getElementById('changeColorButton').addEventListener('click', function() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
});


