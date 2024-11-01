function getScreenAndLocation() {
    coord = document.getElementById('coordinate');
    let pCoordinate = document.createElement('p');
    let pSize = document.createElement('p');
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;
    let liCoordinate = document.createElement('li');
    let liSize =  document.createElement('li');
    coord.innerHTML = '';
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const {coords} = position;
            console.log(coords.latitude, coords.longitude);
            if (coords.latitude && coords.longitude) {
                pCoordinate.innerHTML = 'Координаты:<br>' + coords.latitude + '  ' + coords.longitude;
                liCoordinate.appendChild(pCoordinate);
            }



        });
    }
    if (screenWidth && screenHeight) {
        pSize.innerHTML = 'Размеры экрана:<br>' + screenWidth + 'x' + screenHeight;
        liSize.appendChild(pSize);
    }
    coord.appendChild(liCoordinate);
    coord.appendChild(liSize);

}