// otevirani modalniho okna
function openModal(imagePath) {

    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImg');

    // cesta k obrazku 
    modalImg.src = imagePath;

    // otevreni mod okna
    modal.style.display = 'block';
}

// zavirani mod okna
function closeModal() {

    var modal = document.getElementById('myModal');

    // zavreni mod okna
    modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    // vse s history-box
    var historyBoxes = document.querySelectorAll('.history-box');

    // posluchac pro kazdy prvek
    historyBoxes.forEach(function (box) {
        box.addEventListener('click', function (event) {
            event.preventDefault();

            // cesta k img
            var imagePath = box.getAttribute('href');

            // otevreni mod okna
            openModal(imagePath);
        });
    });
});


