function toggleVisibility(buttonId, tdId) {
    document.getElementById(buttonId).addEventListener('click', function() {
        var spanElement = document.querySelector(`#${tdId} span`);
        spanElement.classList.toggle('d-none');
        spanElement.classList.toggle('d-block');
    });
}

// Panggil fungsi untuk setiap tombol
toggleVisibility('button1', 'd1');
toggleVisibility('button2', 'd2');
toggleVisibility('button3', 'd3');
