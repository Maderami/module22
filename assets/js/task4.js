// Функция для получения координат местоположения пользователя
const section = document.getElementById('timezone');
const btn = document.createElement('button');
const pTask4 = document.createElement('p');
window.addEventListener('load', () => {
    pTask4.innerHTML = 'Получить временную зону';
    section.appendChild(pTask4);
    btn.classList.add('btn');
    btn.classList.add('btn-info');
    btn.innerHTML = 'Получить таймзону';
    section.appendChild(btn);
    getTimezoneMain();
}, false)

function getTimezoneMain() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Функция для отправки запроса к Timezone API
            function getTimezone(latitude, longitude) {
                fetch('https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=' + latitude + '&long=' + longitude)
                    .then(response => response.json())
                    .then(data => {
                        const timezone = data.timezone;
                        const date_time_txt = data.date_time_txt;
                        console.log('Временная зона:', timezone);
                        console.log('Местные дата и время:', date_time_txt);
                    });

            }
            btn.addEventListener('click', function () {
                getTimezone(latitude, longitude);
            });
        });
    }
}