var myModal = document.getElementById('enrol');
var mainButton = document.getElementById('openModal');
var mySelect = document.getElementById('tariffSelect');
var myForm = document.getElementById('leadForm');

function showWindow() {
    myModal.classList.add('active');
}

function closeModal() {
    myModal.classList.remove('active');
}

mainButton.onclick = function() {
    showWindow();
}

function chooseTariff(name) {
    showWindow();
    mySelect.value = name;
}

myForm.onsubmit = function(event) {
    event.preventDefault();
    alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
    closeModal();
    myForm.reset();
}

var burgerbtn = document.getElementById('burger');
var menu = document.getElementById('nav-menu');

burgerbtn.onclick = function() {
    if (burgerbtn.className === 'burger') {
        burgerbtn.className = 'burger open';
        menu.className = 'nav-link active';
    } else {
        burgerbtn.className = 'burger';
        menu.className = 'nav-link';
    }
};

var ref = document.getElementsByTagName('a');

for (var i = 0; i < ref.length; i++) {
    ref[i].onclick = function() {
        burgerbtn.className = 'burger';
        menu.className = 'nav-link';
    };
}
