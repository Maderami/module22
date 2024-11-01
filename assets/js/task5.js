const chatSection = document.querySelector('#chat');
const pMessWS = document.createElement('p');
const pMessMy = document.createElement('p');
const pMessGeo = document.createElement('p');
const divMytext = document.createElement('div');
const divWStext = document.createElement('div');
const divGeoLoc = document.createElement('div');
const divMain = document.createElement('div');
const divMain2 = document.createElement('div');
const divMain3 = document.createElement('div');
pMessMy.className = 'small p-2 me-3 mb-1 text-white rounded-3 bg-primary';
pMessWS.className = 'small p-2 ms-3 mb-1 rounded-3 bg-body-tertiary';
pMessGeo.className = "small p-2 me-3 mb-1 text-white rounded-3 bg-primary";
divMain.className = 'd-flex flex-row justify-content-end mb-4 pt-1 col-md-12 col-lg-12';
divMain3.className = 'd-flex flex-row justify-content-end mb-4 pt-1 col-md-12 col-lg-12';
divMain2.className = 'd-flex flex-row justify-content-start mb-4 pt-1 col-md-12 col-lg-12'
divMytext.className = 'd-flex flex-row justify-content-end mb-4 pt-1 col-md-12 col-lg-12';
divWStext.className = 'd-flex flex-row justify-content-start mb-4 pt-1 col-md-12 col-lg-12';
divGeoLoc.className = 'd-flex flex-row justify-content-end mb-4 pt-1 col-md-12 col-lg-12';
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
divResult.id = 'messChat';
divResult.classList.add('row');
const ws = new WebSocket('wss://echo-ws-service.herokuapp.com/');
// Функция для создания чата на основе эхо-сервера
function createChat(sendButton, geoButton, input, divResult) {
    // Добавление элементов в DOM
    chatSection.appendChild(input);
    chatSection.appendChild(sendButton);
    chatSection.appendChild(geoButton);
    chatSection.appendChild(divResult);
}
// Вызов функции для создания чата
window.addEventListener(
    'load', ()=>{
        createChat(sendButton, geoButton, input, divResult);
    }
)

// Обработка сообщений от сервера
ws.addEventListener('message', function(event) {

    // Вывод сообщения от сервера в чат
        let contentDivRes = '';
        contentDivRes = document.getElementById('messChat').innerHTML;
        divResult.innerHTML = contentDivRes;
        if( pMessGeo.innerHTML ){
            divGeoLoc.appendChild(pMessGeo);
            divMain3.appendChild(divGeoLoc);
            divResult.appendChild(divMain3);
        }else if(pMessMy.innerHTML){
            pMessWS.innerText = event.data;
            divMytext.appendChild(pMessMy);
            divMain.appendChild(divMytext);
            divResult.appendChild(divMain);
            divWStext.appendChild(pMessWS);
            divMain2.appendChild(divWStext);
            divResult.appendChild(divMain2);
        }

});

// Обработка отправки сообщения
sendButton.addEventListener('click', function() {
    pMessMy.innerHTML = input.value;
    // Отправка сообщения на сервер
    ws.send(pMessMy.innerHTML);
    // Очистка поля ввода
    input.value = '';
});

// Обработка отправки гео-локации
geoButton.addEventListener('click', function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        // Вывод ссылки на OpenStreetMap
        let link = 'https://www.openstreetmap.org/?mlat=' + latitude + '&mlon=' + longitude;
        ws.send(latitude + ' ' + longitude);
        pMessGeo.innerHTML = '<a class="text-white" href="' + link + '">Ваша гео-локация</a>';
    }, function() {
        console.error('Не удалось получить гео-локацию');
    });
});

