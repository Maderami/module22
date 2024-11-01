chatSection = document.querySelector('#chat');
const pMessWS = document.createElement('p');
const pMessMy = document.createElement('p');
const pMessGeo = document.createElement('p');
const divMytext = document.createElement('div');
const divWStext = document.createElement('div');
const divGeoLoc = document.createElement('div');
pMessMy.className = 'small p-2 me-3 mb-1 text-white rounded-3 bg-primary';
pMessWS.className = 'small p-2 ms-3 mb-1 rounded-3 bg-body-tertiary';
pMessGeo.className = "small p-2 me-3 mb-1 text-white rounded-3 bg-primary";
divMytext.className = 'd-flex flex-row justify-content-end mb-4 pt-1 col-md-6 col-lg-6';
divWStext.className = 'd-flex flex-row justify-content-start mb-4 pt-1 col-md-6 col-lg-6';
divGeoLoc.className = 'd-flex flex-row justify-content-end mb-4 pt-1 col-md-6 col-lg-6';
sendButton = document.createElement('button');
geoButton = document.createElement('button');
input = document.createElement('input');
divResult = document.createElement('div');
input.id = 'message';
input.contentHint = 'Введите сообщение';
input.classList.add('col-lg-6');
input.hint = 'Введите текст';
sendButton.id = 'sendButton';
sendButton.innerText = 'Отправка сообщения';
sendButton.classList.add('btn');
sendButton.classList.add('btn-success');
sendButton.classList.add('col-lg-3');
geoButton.id = 'geoButton';
geoButton.classList.add('btn');
geoButton.classList.add('btn-info');
geoButton.classList.add('col-lg-3');
geoButton.innerText = 'Запрос локации';
divResult.id='messageResult';
divResult.classList.add('list-group');
// Функция для создания чата на основе эхо-сервера
function createChat(sendButton, geoButton, input, divResult) {

    // Добавление элементов в DOM
    chatSection.appendChild(input);
    chatSection.appendChild(sendButton);
    chatSection.appendChild(geoButton);
    chatSection.appendChild(divResult);
}

// Создание WebSocket соединения
let ws = new WebSocket('wss://echo-ws-service.herokuapp.com/');

// Обработка сообщений от сервера
ws.addEventListener('message', function(event) {
    pMessWS.innerText = event.data;
    // Вывод сообщения от сервера в чат
    divWStext.appendChild(pMessWS);
    divResult.appendChild(divWStext);
});

// Обработка отправки сообщения
sendButton.addEventListener('click', function() {
    pMessMy.innerText += input.value;
    // Отправка сообщения на сервер
    ws.send(input.value);
    // Очистка поля ввода
    input.value = '';
    divMytext.appendChild(pMessMy);
    divResult.appendChild(divMytext);
});

// Обработка отправки гео-локации
geoButton.addEventListener('click', function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        // Вывод ссылки на OpenStreetMap
        let link = 'https://www.openstreetmap.org/?mlat=' + latitude + '&mlon=' + longitude;

        pMessGeo.innerHTML += '<a class="text-white" href="' + link + '">Ваша гео-локация</a>';
        divGeoLoc.appendChild(pMessGeo);
        divResult.appendChild(divGeoLoc);
    }, function() {
        console.error('Не удалось получить гео-локацию');
    });
});
// Вызов функции для создания чата
createChat(sendButton, geoButton, input, divResult);