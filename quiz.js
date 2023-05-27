//появление модального через 39 сек
setTimeout(function() {
    let modal = document.getElementById("modal0");
    modal.style.display = "block";
}, 39000);

window.onclick = function(event) {
    let modal = document.querySelector(".modal");
    if (event.target == modal) {
        modal.style.display = "none";
        modal.classList.remove("modal");
    }
}
//закрыть окно крестиком или нажатием вне окна
let closeButtons = document.querySelectorAll(".close-modal");
for (let i = 0; i < closeButtons.length; i++) {
    let closeButton = closeButtons[i];
    closeButton.addEventListener("click", function() {
        let modal = this.closest(".modal");
        modal.style.display = "none";
        modal.classList.remove("modal");
    });
}
function showModal1() {
    document.getElementById("modal0").style.display = "none";
    document.getElementById("modal1").style.display = "block";
}
function showModal2() {
    document.getElementById("modal1").style.display = "none";
    document.getElementById("modal2").style.display = "block";
}

function showModal1back() {
    document.getElementById("modal2").style.display = "none";
    document.getElementById("modal1").style.display = "block";
}

function showModal3() {
    document.getElementById("modal2").style.display = "none";
    document.getElementById("modal3").style.display = "block";
}
function showModal2back() {
    document.getElementById("modal3").style.display = "none";
    document.getElementById("modal2").style.display = "block";
}
function showModal4() {
    document.getElementById("modal3").style.display = "none";
    document.getElementById("modal4").style.display = "block";
}
function showModal3back() {
    document.getElementById("modal4").style.display = "none";
    document.getElementById("modal3").style.display = "block";
}
function showModal5() {
    document.getElementById("modal4").style.display = "none";
    document.getElementById("modal5").style.display = "block";
}
//обязательное заполнение фомы
const cityInput = document.getElementById('city');
const cityButton = document.getElementById('city-button');
cityInput.addEventListener('input', () => {
    if (cityInput.value ) {
        cityButton.disabled = false;
    } else {
        cityButton.disabled = true;
    }
});
//отправка данных в базу
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    fetch(event.target.action, {
        method: event.target.method,
        body: formData
    }).then(function(response) {
        if (response.ok) {
            event.target.style.display = "none";
            document.getElementById("modal5").style.display = "none";
            document.getElementById("modal6").style.display = "block";
        } else {
            alert("Произошла ошибка при отправке данных: " + response.status);
        }
    }).catch(function(error) {
        alert("Произошла ошибка при отправке данных: " + error);
    });
});
//
document.getElementById("modal5").getElementsByClassName("close-modal")[0].onclick = function() {
    let modal = document.getElementById("modal5");
    modal.style.display = "none";
};
